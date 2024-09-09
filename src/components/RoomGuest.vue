<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [{ id: 1, adultCount: 1, childCount: 0 }],
  },
  isGuestOpened: Boolean,
});

const emit = defineEmits(["update:modelValue", "update:isGuestOpened"]);

const rooms = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
const screenWidth = ref(window.screen.width);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

const roomCount = computed(() => rooms.value.length);
const route = useRouter();
const totalGuests = computed(() =>
  rooms.value.reduce((sum, room) => sum + room.adultCount + room.childCount, 0)
);
onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

function toggleGuestChoice() {
  emit("update:isGuestOpened", !props.isGuestOpened);
}

function updateRoom(index, type, operation) {
  const newRooms = [...rooms.value];
  const room = newRooms[index];

  if (type === "adult") {
    if (operation === "increment" && room.adultCount + room.childCount < 4) {
      room.adultCount++;
    } else if (operation === "decrement" && room.adultCount > 1) {
      room.adultCount--;
    }
  } else if (type === "child") {
    if (operation === "increment" && room.adultCount + room.childCount < 4) {
      room.childCount++;
    } else if (operation === "decrement" && room.childCount > 0) {
      room.childCount--;
    }
  }

  rooms.value = newRooms;
  emit("update:modelValue", rooms.value);
}

function addRoom() {
  if (roomCount.value < 4) {
    rooms.value = [
      ...rooms.value,
      { id: Date.now(), adultCount: 1, childCount: 0 },
    ];
    // emit("update:modelValue",rooms.value)
  }
}

function removeRoom(index) {
  if (roomCount.value > 1) {
    rooms.value = rooms.value.filter((_, i) => i !== index);
    // emit("update:modelValue", rooms.value)
  }
}

function canAddGuest(room) {
  return room.adultCount + room.childCount < 4;
}
</script>

<template>
  <div
    class="container"
    :style="[
      {
        marginTop:
          route.currentRoute.value.name == 'BookingConfirmed'
            ? '20px'
            : route.currentRoute.value.name == 'Booking' && screenWidth < 912
            ? '20px' // or whatever margin you want for this case
            : '0',
        
      },
      {
        zIndex: route.currentRoute.value.name=='BookingConfirmed' ? 0 : 3
      }
    ]"
  >
    <div
      class="guests_wrapper"
      @click="toggleGuestChoice"
      :style="[
        {
          height:
            route.currentRoute.value.name == 'BookingConfirmed'
              ? '45px'
              : 'auto',
        },
      ]"
    >
      <div class="guests">
        <p>{{ totalGuests }} {{ totalGuests === 1 ? "Guest" : "Guests" }}</p>
        <p>{{ roomCount }} {{ roomCount === 1 ? "Room" : "Rooms" }}</p>
      </div>
    </div>

    <Transition>
      <div v-if="isGuestOpened" class="dropdown-content">
        <div class="guests_choice_wrapper">
          <div
            class="guests_choice_subwrapper"
            v-for="(room, index) in rooms"
            :key="room.id"
          >
            <h4 class="guest_choice_opened_title">Room {{ index + 1 }}</h4>
            <div class="adult_choice_wrapper">
              <p>Adults</p>
              <div class="guest_number_selector_wrapper">
                <span
                  class="minus"
                  :class="{ disabled: room.adultCount <= 1 }"
                  @click="updateRoom(index, 'adult', 'decrement')"
                  >-</span
                >
                <span class="number">{{ room.adultCount }}</span>
                <span
                  class="plus"
                  :class="{ disabled: !canAddGuest(room) }"
                  @click="updateRoom(index, 'adult', 'increment')"
                  >+</span
                >
              </div>
            </div>
            <div class="child_choice_wrapper">
              <p>Children</p>
              <div class="guest_number_selector_wrapper">
                <span
                  class="minus"
                  :class="{ disabled: room.childCount <= 0 }"
                  @click="updateRoom(index, 'child', 'decrement')"
                  >-</span
                >
                <span class="number">{{ room.childCount }}</span>
                <span
                  class="plus"
                  :class="{ disabled: !canAddGuest(room) }"
                  @click="updateRoom(index, 'child', 'increment')"
                  >+</span
                >
              </div>
            </div>
            <p
              v-if="roomCount > 1"
              @click="removeRoom(index)"
              class="remove_room_btn"
            >
              Remove The Room
            </p>
          </div>
        </div>
        <p v-if="roomCount < 4" @click="addRoom()" class="guest_add_room_btn">
          Add A Room
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  position: relative;
  user-select: none;
}
.dropdown-content {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.guests_wrapper {
  width: 300px;
  height: 38px;
  background-color: white;
  color: black;
  border-radius: 3px;
  cursor: pointer;
}

.guests_wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #8b8a93;
  border-radius: 3px;
  transition: border-color 0.3s ease;
  pointer-events: none;
}

.guests_wrapper:hover::before {
  border-color: black;
}

.guests {
  display: flex;
  align-items: center;
}

.guests p {
  margin-left: 10px;
  padding: 8px 2px;
}
.guests_choice_wrapper {
  background-color: white;
  color: black;
  margin: 1px 0;
  position: relative;
  right: 0;
  border: 1px solid black;
  border-radius: 3px;
  padding: 15px;
  padding-bottom: 20px;
}
.guests_choice_wrapper::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #8b8a93;
  display: block;
  margin: 10px 0;
}
.guest_choice_opened_title {
  font-size: 14px;
  font-weight: bold;
}
.guest_number_selector_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.guest_number_selector_wrapper span {
  text-align: center;
}

.v-move,
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.adult_choice_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.child_choice_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
}
.minus,
.plus {
  cursor: pointer;
  width: 30px;
  height: 30px;
  text-align: center;
  user-select: none;
  font-size: 25px;
}
.number {
  width: 50px;
  user-select: none;
}
.minus:hover {
  background-color: #059669;
  border-radius: 50%;
  color: white;
}
.plus:hover {
  background-color: #059669;
  border-radius: 50%;
  color: white;
}

.disabled {
  background-color: #8b8a93;
  color: white;
  pointer-events: none;
  border-radius: 50%;
}
.guest_add_room_btn {
  position: absolute;
  right: 15px;
  bottom: 8px;
  font: 1rem;
  color: #059669;
  text-decoration: underline;
  cursor: pointer;
}
.guest_add_room_btn:hover {
  color: #08523a;
  transition: 3ms ease-in;
}
.remove_room_btn {
  font-size: 0.875rem;
  text-decoration: underline;
  color: #059669;
  cursor: pointer;
  display: flex;
  justify-content: right;
}
.remove_room_btn:hover {
  color: #08523a;
  transition: 3ms ease-in;
}
</style>

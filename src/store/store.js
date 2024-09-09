import { createStore } from "vuex";

const store = createStore({
  state: {
    pageWidth: window.innerWidth,
    isBookingConfirmed: false,
    prevRoute: null,
    bookingDetails: {
      checkInDate: "",
      checkOutDate: "",
      rooms: [],
    },
    roomsList: [
      {
        title: "Twin Room with Extra Bed",
        img: "tourfa-tbilisi-pic-10-min.jpg",
        shortDescription:
          "Room size: 30 sqm, situated on ground floor with backdoor courtyard and terraceKing size bed and two sofasAdjustable Air-conditioning High speed internet access and Wi-Fi",
        longDescription:
          "Offering free toiletries, this twin/double room includes a private bathroom with a shower, a hairdryer and slippers. The spacious air-conditioned twin/double room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view.",
        roomPreviewSlides: [
          "tourfa-tbilisi-pic-10-min.jpg",
          "Twin-room-tv.jpg",
          "Twin-room-shower-2.jpg",
        ],
        minPrice: "GEL157",
        occupancy: 3,
        minOccupancy: 1,
        priceForOne: 180,
        priceForTwo: 205,
        priceForThree: 270,
        dimension: "35 m²",
      },
      {
        title: "Family Suite",
        img: "Family-Suite-room.jpg",
        longDescription:
          "Featuring a private entrance, this air-conditioned suite is consisted of of 1 living room, 2 separate bedrooms and 1 bathroom with a shower and a hairdryer. The suite offers a flat-screen TV with cable channels, soundproof walls, a tea and coffee maker, a seating area as well as an inner courtyard view. The unit offers 3 beds.",
        roomPreviewSlides: [
          "Family-Suite-room.jpg",
          "Family-Suite-room-2.jpg",
          "Family-Suite-room-3.jpg",
          "Family-Suite-bathroom.jpg",
          "Family-Suite-bathroom-2.jpg",
        ],
        minPrice: "GEL173",
        occupancy: 4,
        minOccupancy: 1,
        priceForOne: 200,
        priceForTwo: 225,
        priceForThree: 240,
        priceForFour: 240,
        dimension: "37 m²",
      },
      {
        title: "Family Room",
        img: "Family-Room.jpg",
        shortDescription:
          "Family rooms comprise main and child room, 22 and 6 sqm, respectively, equipped with bathroom, tea & coffee facilities, flat-screen TV and Wi-Fi. They feature king size bedroom and a sofa convertible into extra bed. Family rooms can easily accommodate up to 4 people and are suitable for larger families, etc.",
        longDescription:
          "This air-conditioned family room includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with an inner courtyard view. The unit offers 3 beds.",
        roomPreviewSlides: [
          "Family-Room.jpg",
          "Family-Rooms-peripherals.jpg",
          "Family-Room-couch.jpg",
          "Family-Room-bathroom.jpg",
          "Family-Room-bathroom-2.jpg",
          "Family-Room-balcony.jpg",
        ],
        minPrice: "GEL154",
        occupancy: 4,
        minOccupancy: 2,
        priceForTwo: 200,
        priceForThree: 215,
        priceForFour: 230,
        dimension: "32 m²",
      },
      {
        title: "Deluxe Double Room with extra bed",
        img: "Double-Deluxe-Preview.jpg",
        shortDescription:
          "Deluxe is spacious 30 sqm room featuring adjoining individual courtyard; equipped with bathroom, tea & coffee facilities, flat-screen TV and Wi-Fi. It features king size bedroom and two sofas convertible into extra bed. Deluxe room can easily accommodate up to 4 people a ",
        longDescription:
          "Offering free toiletries, this double room includes a private bathroom with a shower, a hairdryer and slippers. The air-conditioned double room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view. The unit has 2 beds.",
        roomPreviewSlides: [
          "Double-Deluxe-Preview.jpg",
          "Double-Deluxe-Preview-2.jpg",
          "Double-Room-couch.jpg",
          "Double-Room-bathroom.jpg",
          "Double-Room-bathroom-2.jpg",
          "Double-Room-shower.jpg",
          "Double-Room-shower-2.jpg",
        ],
        minPrice: "GEL150",
        occupancy: 4,
        minOccupancy: 1,
        priceForOne: 170,
        priceForTwo: 195,
        priceForThree: 210,
        priceForFour: 230,
        dimension: "25 m²",
      },
      {
        title: "Comfort Quadruple Room",
        img: "Comfort-Quadruple.jpg",
        longDescription:
          "Offering free toiletries, this quadruple room includes a private bathroom with a shower, a hairdryer and slippers. The air-conditioned quadruple room offers a flat-screen TV with cable channels, a private entrance, soundproof walls, a tea and coffee maker as well as an inner courtyard view. The unit offers 3 beds.",
        roomPreviewSlides: [
          "Comfort-Quadruple.jpg",
          "Comfort-Quadruple-2.jpg",
          "Comfort-Quadruple-3.jpg",
          "Comfort-Quadruple-bathroom.jpg",
          "Comfort-Quadruple-courtyard.jpg",
          "Comfort-Quadruple-courtyard-2.jpg",
        ],
        minPrice: "GEL154",
        occupancy: 4,
        minOccupancy: 2,
        priceForTwo: 200,
        priceForThree: 215,
        priceForFour: 230,
        dimension: "32 m²",
      },
    ],
  },
  mutations: {
    setPageWidth(state, width) {
      state.pageWidth = width;
    },
    setBookingConfirmation(state, isConfirmed) {
      state.isBookingConfirmed = isConfirmed;
    },
    setPrevRoute(state, route) {
      state.prevRoute = route;
    },
    setBookingDetails(state, details) {
      state.bookingDetails = details;
    },
  },
  actions: {
    updatePageWidth({ commit }) {
      commit("setPageWidth", window.innerWidth);
    },
    setBookingConfirmation({ commit }) {
      return new Promise((resolve) => {
        commit("setBookingConfirmation", true);
        resolve();
      });
    },
    setBookingDetails({ commit }, payload) {
      return new Promise((resolve) => {
        commit("setBookingDetails", payload);
        resolve();
      });
    },
    setPrevRoute({ commit }, route) {
      commit("setPrevRoute", route);
    },
  },
  getters: {
    getWidth(state) {
      return state.pageWidth;
    },
    getBookingConfirmation(state) {
      return state.isBookingConfirmed;
    },
    getBookingDetails(state) {
      return state.bookingDetails;
    },
    getRoomsList(state) {
      return state.roomsList;
    },
  },
  modules: {
    // If you have separate modules, you can define them here
  },
});

export default store;

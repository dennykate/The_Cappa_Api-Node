import axios from "axios";
import Leader from "../models/leader.js";
import { faker, ro_MD } from "@faker-js/faker";

const bedTypes = ["Double Bed", "Single Bed", "Family Bed"];
const roomTypes = [
  "Standard",
  "Double Room",
  "Single Room",
  "Deluxe Room",
  "Standard Suite",
  "Deluxe Suite",
];
const roomFloors = ["Floor-A", "Floor-B", "Floor-C", "Floor-D", "Floor-E"];

const seed = async (count) => {
  let rooms = [];

  for (let i = 0; i < count; i++) {
    const image = faker.image.url();
    const roomName = "A-" + Math.floor(Math.random() * 100000);
    const bedType = bedTypes[Math.floor(Math.random() * 3)];
    const roomType = roomTypes[Math.floor(Math.random() * 3)];
    const roomFloor = roomFloors[Math.floor(Math.random() * 3)];
    const facilities =
      "AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi";
    const rate = `${Math.floor(Math.random() * 3)}` + "00";
    const status = "active";

    rooms.push({
      image,
      roomName,
      bedType,
      roomType,
      roomFloor,
      facilities,
      rate,
      status,
    });
  }

  const { data } = await axios.post("http://localhost:5000/room/many", {
    data: rooms,
  });
};

seed(50);

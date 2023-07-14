import axios from "axios";
import Leader from "../models/leader.js";
import { faker } from "@faker-js/faker";

const seed = async (count) => {
  let leaders = [];

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const image = faker.image.url();
    const department = faker.person.jobType();
    const email = faker.internet.email();
    const instagram = faker.internet.email();
    const twitter = faker.internet.email();
    const facebook = faker.internet.email();
    const pinterest = faker.internet.email();

    leaders.push({
      name,
      image,
      department,
      email,
      instagram,
      twitter,
      facebook,
      pinterest,
    });
  }

  const { data } = await axios.post("http://localhost:5000/leader/many", {
    data: leaders,
  });

};

seed(10);

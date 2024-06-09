import { faker } from "@faker-js/faker";

export const FakeData = {
  username: faker.internet.userName(),
  lastName: faker.person.lastName(),
  password: faker.internet.password(),
  postalCode: faker.location.zipCode(),
};

const request = require("supertest");
const { server } = require("./server");

const properties = ["message", "name"];
const mockUser = {
  name: "Gabriel",
  email: "gabrielbrito@teste.com.br",
};

describe("App Test Suite", () => {
  it("Should be able to get main route", async () => {
    const response = await request(server).get("/");
    const { body, statusCode } = response;

    expect(statusCode).toEqual(200);

    properties.map((prop) => expect(body).toHaveProperty(prop));
  });

  it("Should be able to create user", async () => {
    const response = await request(server).post("/users").send(mockUser);
    const { body, statusCode } = response;

    expect(statusCode).toEqual(200);
    expect(body).toMatchObject({
      ...mockUser,
      id: 1,
    });
  });

  it("Should not be able to create user", async () => {
    const response = await request(server).post("/users");
    const { body, statusCode } = response;

    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty(
      "message",
      "User data must be providen!"
    );
  });
});
/*
- when making a GET request to the `/` endpoint 
  the API should respond with status code 200 
  and the following JSON object: `{ api: 'running' }`.
*/
const request = require("supertest");

const server = require("../server/server");

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      let response;

      return request(server)
        .get("/")
        .then(res => {
          response = res;

          expect(response.status).toEqual(expectedStatusCode);
        });
    });

    it("should return a JSON object fron the index route", async () => {
      const expectedBody = { api: "running" };
      let response;

      return request(server)
        .get("/")
        .then(res => {
          response = res;

          expect(response.body).toEqual(expectedBody);
        });
    });

    it("should return a JSON object fron the index route", async () => {
      let response;
      return request(server)
        .get("/")
        .then(res => {
          response = res;

          expect(response.type).toEqual("application/json");
        });
    });
  });
});

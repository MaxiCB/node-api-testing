const db = require("../data/dbConfig");

const Hobbits = require("../data/hobbits/hobbitsModel");

beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db("hobbits").truncate();
});

describe("hobbits model", () => {
  describe("insert()", () => {
    it("should insert the provided hobbits into the db", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "sam" });

      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(2);
    });
    it("should insert the provided hobbit into the db", async () => {
      let hobbit = await Hobbits.insert({ name: "rudy"});
      expect(hobbit.name).toBe("rudy");

      hobbit = await Hobbits.insert({ name: "jake"});
      expect(hobbit.name).toBe("jake");
    })
  });
});

const db = require("../data/dbConfig");

const Hobbits = require("../data/hobbits/hobbitsModel");

beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db("hobbits").truncate();
  await db("hobbit-tools").truncate();
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
    });
    it("should insert the provided hobbits into the db and delete them", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "sam" });

      let hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(2);

      await Hobbits.deleteHobbit(1);
      await Hobbits.deleteHobbit(2);

      hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(0);
    });
  });
});

describe("hobbits tools", () => {
  describe("insertTool()", () => {
    it("should insert the provided tools into the db", async () => {
      await Hobbits.insertTool({ toolName: "hammer" });
      await Hobbits.insertTool({ toolName: "screwdriver" });

      const hobbits = await db("hobbit-tools");

      expect(hobbits).toHaveLength(2);
    });
    it("should insert the provided tool into the db", async () => {
      let hobbit = await Hobbits.insertTool({ toolName: "pick"});
      expect(hobbit.toolName).toBe("pick");

      hobbit = await Hobbits.insertTool({ toolName: "pliers"});
      expect(hobbit.toolName).toBe("pliers");
    });
    it("should insert the provided tools into the db and delete them", async () => {
      await Hobbits.insertTool({ toolName: "hammer" });
      await Hobbits.insertTool({ toolName: "screwdriver" });

      let hobbits = await db("hobbit-tools");
      expect(hobbits).toHaveLength(2);

      await Hobbits.deleteTool(1);
      await Hobbits.deleteTool(2);

      hobbits = await db("hobbit-tools");
      expect(hobbits).toHaveLength(0);
    });
  });
});

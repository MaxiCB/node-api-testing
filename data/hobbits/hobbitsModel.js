const db = require("../dbConfig");

async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit, "id");

  return db("hobbits")
    .where({ id })
    .first();
}

async function insertTool(tool) {
  const [id] = await db("hobbit-tools").insert(tool, "id");

  return db("hobbit-tools")
    .where({ id })
    .first();
}

const deleteHobbit = id => {
  return db("hobbits").where({id}).del();
}

const deleteTool = id => {
  return db("hobbit-tools").where({id}).del();
}

const updateHobbit = (hobbit, id) => {
  return db("hobbits").where({id}).update(hobbit);
}

const updateTool = (tool, id) => {
  return db("hobbit-tools").where({id}).update(tool);
}

module.exports = {
  insert,
  insertTool,
  deleteHobbit,
  deleteTool,
  updateHobbit,
  updateTool
};

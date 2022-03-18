const knex = require("../config/knex");

const getAllPosts = async (req, res) => {
  try {
    const posts = await knex.select("*").from("posts");

    res.send({ posts });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { getAllPosts };

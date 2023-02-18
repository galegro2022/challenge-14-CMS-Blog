const sequelize = require('../config/connection');
const {Post} = require("../models")

const postData = require("./postData.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const posts = await Post.bulkCreate(postData);

  process.exit(0);
};



seedDatabase();



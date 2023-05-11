const {mongoose,MongoClient } = require('mongoose');

const username = 'tien2092001';
const password = 'xlAst6lqrnNSvDOs';
const URL = `mongodb+srv://${username}:${password}@todolist.ylcbtkc.mongodb.net/login_register`;
const local = 'mongodb://localhost:27017';

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log('Connect successfull!!!');
  } catch (error) {
    console.log('Fail :(');
  }
}

module.exports = { connect };


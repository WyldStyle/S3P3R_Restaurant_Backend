import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://wyldStyle:wyldStyle_123@cluster0.cmeq8hn.mongodb.net/?retryWrites=true&w=majority';

class Database {
  constructor() {
    if (!Database.instance) {
      this.client = new MongoClient(url)
    }
    console.log('hey in the Database',this)
    this.connect();
    Database.instance = this;
  }

  async connect () {
    try {
      await this.client.connect();
      console.log("---> Connected to mongodb.")
      this.database = this.client.db("restaurant");
      return this.database;
    } catch(error) {
      console.log("Error while connecting to mongodb --->", error.stack);
      throw error;
    }
  }

  async close() {
    await this.client.close();
    console.log("---> Closed mongoDb Connection");
  }
}

const database = new Database();
export default database;

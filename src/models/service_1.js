import { ObjectId } from "mongodb";
import database from "../../database_connection";

const collection_nameFn = (req)=>{
if(req.body.hotel !== undefined) return 'hotels'
else return 'users'
}
const createNewEntry = async (data) => {
  try {
    const collection_name = collection_nameFn();
    const db = await database.connect();
    const collection = db.collection(collection_name)
    const res = await collection.insertOne({
      ...expData
    })
    return res;
  } catch (error) {
    console.log(error.stack);
    throw error;
  } finally {
    database.close();
  }
}

const deleEntryAtId = async (id) =>{
  try {
    const collection_name = collection_nameFn();
    const db = await database.connect();
    const collection = db.collection(collection_name)
  } catch (error) {
    console.log(error.stack);
  }
}

const findAllEntries = async()=>{
  try {
    const db = await database.connect();
    const collection = db.collection(collection_name)
    const result =  await collection.find().toArray();
    return result;
  } catch (error) {
    console.log(error.message);
  } finally{
    database.close();
  }
}
const updateEntryAtId = async (id, updateEntryAtId)=>{
  try {
    const collection_name = collection_nameFn();
    const db = await database.connect();
    const collection = db.collection(collection_name)
    const result = await collection.updataeOne({_id: new ObjectId(id)}, {$set:updatedExpData}) 
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    database.close();
  }
}

export {createNewEntry, deleEntryAtId, findAllEntries, updateEntryAtId}
import {ObjectId} from 'mongodb'
import database from "../../database_connection.js";

const collection_nameFn = (req)=>{
  // console.log('servideCollectioname');
  console.log('collection name fn ', req.body);
  // console.log('service1.......................????????????????',req.body.hotel);
if(req.body.hotel !== undefined) return 'hotels'
else return 'users'
}
const createNewEntry = async (req) => {
  try {
    const collection_name = collection_nameFn(req);
    // console.log('service',collection_name);
    const db = await database.connect();
    const collection = db.collection(collection_name)
    // console.log('object',req.body);
    const res = await collection.insertOne({
      ...req.body
    })
    return res;
  } catch (error) {
    console.log(error.stack);
    throw error;
  } finally {
    database.close();
  }
}

const deleEntryAtId = async (id,req) =>{
  try {
    console.log('delete service req',req);
    const collection_name = collection_nameFn(req);
    const db = await database.connect();
    const collection = db.collection(collection_name);
    const result =  collection.deleteOne({_id: new ObjectId(id)})
    return result
  } catch (error) {
    console.log(error.stack);
  }
}

const findAllEntries = async()=>{
  try {
    console.log('finding ====>>');
    const db = await database.connect();
    const collection = db.collection('hotels')
    const result =  await collection.find().toArray();
    console.log('found --->',result);
    return result;
  } catch (error) {
    console.log(error.message);
  } finally{
    database.close();
  }
}
const updateEntryAtId = async (req, id, updatedData)=>{
  try {
    console.log('here in service',req);
    const collection_name = collection_nameFn(req);
    // console.log('update Service',collection_name);
    const db = await database.connect();
    const collection = db.collection(collection_name)
    const result = await collection.updateOne({_id: new ObjectId(id)}, {$set:updatedData}) 
    // console.log('in updateEntry servid3',result);
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    database.close();
  }
}

export {createNewEntry, deleEntryAtId, findAllEntries, updateEntryAtId}
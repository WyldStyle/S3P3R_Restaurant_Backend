import {
  createNewEntry,
  deleEntryAtId,
  findAllEntries,
  updateEntryAtId
} from "./service_1.js";
import ResponseHandler from "../../responseHandler.js";

export const newEntry = async (req, res) =>{
  try {
    console.log('controller');
    console.log('request',req.body);
    const data = req.body;
    const result = await createNewEntry(req);
    ResponseHandler.sendSuccessResponse(res, result, 200);
  } catch (error) {
    console.log(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}

export const delEntry = async( req, res)=>{
  try {
    console.log('controller delete req',req);
    const id = req.params.id;
    console.log('controller del requeest',req);
    const result = await deleEntryAtId(id,req);
    ResponseHandler.sendSuccessResponse(res, result,200)
  } catch (error) {
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}

export const updateEntry = async (req, res)=>{
  try {
    const updatedData = req.body;
    const id = req.params.id;
    const result = updateEntryAtId(req,id, updatedData);
    ResponseHandler.sendSuccessResponse(res, result,200 )
  } catch (error) {
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}

export const findAll = async (req, res)=>{
  try {
    console.log('controller --------------<',req.body);
    const findRes = await findAllEntries();
    console.log('controller findAll',findRes);
    ResponseHandler.sendSuccessResponse(res, findRes, 200)
  } catch (error) {
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}
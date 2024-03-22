import {
  createNewEntry,
  deleEntryAtId,
  findAllEntries,
  updateEntryAtId
} from "./service_1.js";
import ResponseHandler from "../../responseHandler.js";

export const newEntry = async (req, res) =>{
  try {
    const data = req.body;
    const result = await createNewEntry(data);
    ResponseHandler.sendSuccessResponse(res, result, 200);
  } catch (error) {
    console.log(error.stack);
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}

export const delEntry = async( req, res)=>{
  try {
    const id = req.params.id;
    const result = await deleEntryAtId(id);
    ResponseHandler.sendSuccessResponse(res, result,200)
  } catch (error) {
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}

export const updateEntry = async (req, res)=>{
  try {
    const updatedData = req.body;
    const id = req.params.id;
    const result = updateEntryAtId(id, updatedData);
    ResponseHandler.sendSuccessResponse(req, result, 200);
  } catch (error) {
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}

export const findAll = async (req, res)=>{
  try {
    const findRes = await findAllEntries();
    ResponseHandler.sendSuccessResponse(req, findRes, 200)
  } catch (error) {
    ResponseHandler.sendFailureResponse(res, error.message, null,500 )
  }
}
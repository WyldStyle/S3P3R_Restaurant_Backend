export default class ResponseHandler {
  static sendSuccessResponse (res, data, statusCode) {
    res.status(statusCode).json({
      data,
      status: "success"
    })
  }
  
  sendFailureResponse (res, message, data, statusCode) {
    res.status(statusCode).json({
      data,
      message,
      status: "failed"
    })
  }
}
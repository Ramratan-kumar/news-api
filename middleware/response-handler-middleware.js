
const cacheMiddleWare = require("./cache-middleware")
module.exports = {
    createResponse : createResponse
}

function createResponse(req,res,statuscode,resObject){
    if(statuscode == 200){
        cacheMiddleWare.setCache(resObject,req.body);
    }
    return res.status(statuscode).json(resObject);
}
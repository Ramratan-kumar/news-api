"use strict"
const newService = require("./news-service");
const responseCreator = require("../middleware/response-handler-middleware");
module.exports = {
    getNews:getNews
}

async function getNews(req,res){
    try{
        let news = await newService.getNews(req.body);
        responseCreator.createResponse(req,res,200,news)
    }catch(err){
        console.error(err);
        let statusCode = err && err.response && err.response.status?err.response.status:0;
        responseCreator.createResponse(req,res, statusCode || 500,{message:err.message || "something went wrong."})
    }
}


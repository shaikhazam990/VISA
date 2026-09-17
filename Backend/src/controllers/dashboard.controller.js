const service=require('../services/dashboard.service');const {ok}=require('../utils/apiResponse');exports.summary=(req,res)=>ok(res,service.summary());

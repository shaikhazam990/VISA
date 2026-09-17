const {randomUUID}=require('crypto');module.exports=(req,res,next)=>{req.requestId=req.headers['x-request-id']||randomUUID();res.setHeader('x-request-id',req.requestId);next();};

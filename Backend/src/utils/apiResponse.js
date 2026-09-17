exports.ok=(res,data,message='OK',status=200)=>res.status(status).json({success:true,data,message});
exports.fail=(res,status,code,message,details=[])=>res.status(status).json({success:false,error:{code,message,details}});

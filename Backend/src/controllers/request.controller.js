const service=require('../services/request.service'),agent=require('../services/agent.service');const {ok,fail}=require('../utils/apiResponse');
exports.list=(req,res)=>{let a=service.list(req.query);const page=Math.max(1,Number(req.query.page)||1),limit=Math.min(100,Number(req.query.limit)||20);const total=a.length;a=a.slice((page-1)*limit,page*limit);ok(res,{items:a,total,page,limit,totalPages:Math.ceil(total/limit)});};
exports.get=(req,res)=>{const x=service.get(req.params.id);x?ok(res,x):fail(res,404,'NOT_FOUND','Request not found');};
exports.create=(req,res)=>{const e=require('../validator/request.validator').create(req.body);if(e.length)return fail(res,400,'VALIDATION_ERROR','Invalid request',e);ok(res,service.create(req.body),'Request created',201);};
exports.update=(req,res)=>{const x=service.update(req.params.id,req.body);x?ok(res,x,'Request updated'):fail(res,404,'NOT_FOUND','Request not found');};
exports.remove=(req,res)=>service.remove(req.params.id)?ok(res,null,'Request deleted'):fail(res,404,'NOT_FOUND','Request not found');
exports.process=async(req,res)=>{const x=service.get(req.params.id);if(!x)return fail(res,404,'NOT_FOUND','Request not found');ok(res,await agent.process(x),'Request processed');};

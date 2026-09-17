const BaseDAO=require('./base.dao');
module.exports=new BaseDAO('request' + ( 'request'==='agentRun' ? '' : 's'));

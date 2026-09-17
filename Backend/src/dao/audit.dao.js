const BaseDAO=require('./base.dao');
module.exports=new BaseDAO('audit' + ( 'audit'==='agentRun' ? '' : 's'));

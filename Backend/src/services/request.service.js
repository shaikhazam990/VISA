const {requests}=require('../dao');
const audit=require('./audit.service');
const {randomUUID}=require('crypto');
exports.list=(q={})=>{let a=requests.all();if(q.status)a=a.filter(x=>x.status===q.status);if(q.category)a=a.filter(x=>x.category===q.category);if(q.search){const s=q.search.toLowerCase();a=a.filter(x=>(x.requestId+' '+x.employeeName+' '+x.employeeEmail+' '+x.requestText).toLowerCase().includes(s));}return a.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));};
exports.get=(id)=>requests.findById('requestId',id);
exports.create=(body)=>{const now=new Date().toISOString();const r={requestId:body.requestId||`REQ-${Date.now()}`,employeeName:body.employeeName||'Unknown',employeeEmail:body.employeeEmail||'',openedDate:body.openedDate||now,requestText:body.requestText,initialAction:body.initialAction||'Not started',category:'unknown',subCategory:null,matchedPolicies:[],classificationConfidence:0,recommendedAction:null,status:'New',linkedTicketId:null,agentResponse:null,requiresHumanReview:false,routedTo:null,createdAt:now,updatedAt:now};const out=requests.insert(r);audit.log({action:'REQUEST_CLASSIFIED',entityType:'request',entityId:r.requestId,requestId:r.requestId,reason:'Request created; classification pending'});return out;};
exports.update=(id,p)=>requests.update('requestId',id,p);
exports.remove=(id)=>requests.remove('requestId',id);

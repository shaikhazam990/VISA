const dao=require('../dao');
const {randomUUID}=require('crypto');
exports.log=(event)=>dao.audits.insert({eventId:randomUUID(),actorType:event.actorType||'agent',actorId:event.actorId||'system',action:event.action,entityType:event.entityType,entityId:event.entityId,previousState:event.previousState??null,newState:event.newState??null,matchedPolicyIds:event.matchedPolicyIds||[],reason:event.reason||'',timestamp:new Date().toISOString(),requestId:event.requestId||null});

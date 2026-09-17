exports.process=(b)=>{const e=[];if(!b.requestId&&!b.message)e.push('requestId or message is required');return e;};

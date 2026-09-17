exports.status=(s)=>['Open','In Progress','Pending','Resolved','Rejected','Approved'].includes(s)?[]:['Invalid ticket status'];

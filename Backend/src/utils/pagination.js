exports.parse=(q)=>{const page=Math.max(1,Number(q.page)||1),limit=Math.min(100,Math.max(1,Number(q.limit)||20));return {page,limit,skip:(page-1)*limit};};
exports.wrap=(items,total,page,limit)=>({items,total,page,limit,totalPages:Math.ceil(total/limit)});

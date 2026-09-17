exports.info=(...a)=>console.log(new Date().toISOString(),'INFO',...a);
exports.error=(...a)=>console.error(new Date().toISOString(),'ERROR',...a);

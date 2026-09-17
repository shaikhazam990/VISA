const {kb}=require('../dao');
exports.all=()=>kb.all().filter(x=>x.active!==false);
exports.search=(q='')=>{const s=q.toLowerCase();return exports.all().filter(p=>(p.kbId+' '+p.title+' '+p.category+' '+p.content).toLowerCase().includes(s));};
exports.get=(id)=>kb.findById('kbId',id);

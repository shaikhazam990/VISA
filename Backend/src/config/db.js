// Lightweight file-backed persistence keeps the demo runnable without a local database server.
// The DAO layer isolates storage so MongoDB can be introduced later without changing routes/services.
const fs = require('fs');
const path = require('path');
const { dataDir } = require('./config');
const ensure = () => { if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true }); };
function file(name){ ensure(); return path.join(dataDir, `${name}.json`); }
function read(name, fallback=[]){ const p=file(name); if(!fs.existsSync(p)) return fallback; try{return JSON.parse(fs.readFileSync(p,'utf8'));}catch{return fallback;} }
function write(name, data){ fs.writeFileSync(file(name), JSON.stringify(data,null,2)); }
module.exports={read,write,file,ensure};

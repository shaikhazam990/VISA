const path = require('path');
try { require('dotenv').config(); } catch {}
module.exports = {
  port: Number(process.env.PORT || 4000),
  dataDir: path.resolve(__dirname, '../../', process.env.DATA_DIR || 'data'),
  clientOrigin: process.env.CLIENT_ORIGIN || '*'
};

const app=require('./src/app');const {port}=require('./src/config/config');app.listen(port,()=>console.log(`Veridian agent API running on http://localhost:${port}`));

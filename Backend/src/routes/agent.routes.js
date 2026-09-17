const r=require('express').Router(),c=require('../controllers/agent.controller');r.post('/process',c.process);r.get('/policies',c.policies);module.exports=r;

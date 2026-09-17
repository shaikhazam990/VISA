const r=require('express').Router(),c=require('../controllers/audit.controller');r.get('/',c.list);r.get('/:id',c.entity);module.exports=r;

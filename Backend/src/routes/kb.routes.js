const r=require('express').Router(),c=require('../controllers/kb.controller');r.get('/',c.list);r.get('/:id',c.get);module.exports=r;

const r=require('express').Router(),c=require('../controllers/dashboard.controller');r.get('/summary',c.summary);module.exports=r;

const test=require('node:test');const assert=require('node:assert/strict');const classifier=require('../src/services/classification.service');
test('classifies phishing',()=>assert.equal(classifier.classify('I got a phishing email').category,'security_incident'));
test('classifies guest wifi',()=>assert.equal(classifier.classify('Wi-Fi access for a guest').category,'guest_wifi'));
test('unknown request stays unknown',()=>assert.equal(classifier.classify('hey it is not working').category,'unknown'));

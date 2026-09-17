const rules=[
 ['security_incident',['phishing','malware','unauthorized access','suspicious email','login'],['KB-09']],
 ['password',['password','locked out','failed attempts','reset'],['KB-01']],
 ['vpn',['vpn','credentials expired','credential expired'],['KB-02']],
 ['laptop',['laptop','screen flickering','hardware failure','replacement'],['KB-03','ASSET-2026']],
 ['software',['install','software','browser extension','data-analysis'],['KB-04']],
 ['printer',['printer','paper jam','print spooler','print queue'],['KB-05']],
 ['email',['mailbox','email full','quota','25gb'],['KB-06']],
 ['guest_wifi',['guest wifi','guest wi-fi','wi-fi access','visitor'],['KB-07']],
 ['expense_software',['expense tool','expense management','expense software'],['KB-08']],
 ['home_office',['work from home','working from home','monitor','home office','chair'],['KB-10']],
 ['access',['admin access','access to','server'],[]]
];
exports.classify=(text='')=>{const s=text.toLowerCase();for(const [cat,terms,policies] of rules){if(terms.some(t=>s.includes(t)))return {category:cat,matchedPolicies:policies,confidence:0.96};}return {category:'unknown',matchedPolicies:[],confidence:0.18};};

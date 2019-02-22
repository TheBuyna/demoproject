const X = require('express');
const APP = X();
const PORT = 1997;

APP.use('/',X.static(__dirname + '/_SITE_/'));

APP.listen(PORT, () => {
    console.log(`\r\nNODE ::: I started my back end server port ${PORT}.\r\n`);
})
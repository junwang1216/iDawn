#!/usr/bin/env node

var app = require('./app'),
    config = require('./config');

app.set('port', process.env.PORT || config.app.port);

var server = app.listen(app.get('port'), function() {
    "use strict";
    console.log('Express server listening on port ' + server.address().port);
});

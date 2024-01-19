var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function () {
    console.log('Client :: ready');
    conn.shell(function (err, stream) {
        if (err) throw err;
        stream.on('close', function () {
            console.log('Stream :: close');
            conn.end();
        }).on('data', function (data) {
            console.log('OUTPUT: ' + data);
        });
        // pass the router command
        stream.end('show running-config\nexit\n');
    });
}).connect({
    host: '192.168.100.1',
    port: 22,
    username: 'username',
    password: 'password'
});

// Test with CISCO router

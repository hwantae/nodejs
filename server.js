const http = require('http');
const fs = require('fs');
const spawn = require('child_process').spawn;
const result = require('child_process').spawn('python', ['python.py']);

result.stdout.on('data', function(data){
    console.log(data.toString());
})

result.stderr.on('data', function(data){
    console.log(data.toString());
})


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
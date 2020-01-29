const filesystem_var = require('fs');

filesystem_var.unlink('./tmp/hello.txt', (err)=>{
    if(err){
        throw err;
        return;
    }
    console.log('delete success');
});
var ccav = require('./ccavutil.js'),
qs = require('querystring');
exports.ccavres = function(req,res){
    let ccavEncResponse='',
    ccavResponse='',
    workingKey = '0CA9AB0B9FEBF9EB9008AA9523F9F2A0',	//Put in the 32-Bit key shared by CCAvenues. TESTING 3010
    accessCode = 'AVBS02GD63AJ23SBJA',			//Put in the Access Code shared by CCAvenues. TESTING 3010
    ccavPOST = '';

    req.on('data', function (data) {
	    ccavEncResponse += data;
	    ccavPOST =  qs.parse(ccavEncResponse);
	    var encryption = ccavPOST.encResp;
		ccavResponse = ccav.decrypt(encryption,workingKey);
        // Response is decrypted
        });

    req.on('end', function () { 
    const stringify = JSON.stringify(ccavResponse.split('&')).replace(/['"]+/g, '').replace(/[[\]]/g,'');
    console.log(stringify);
    let output = stringify.split(',').reduce(function(o,pair) {
        pair = pair.split('=');
        return o[pair[0]] = pair[1], o;
    }, {});
  
    // The 'output' variable is the CCAvenue Response in JSON Format
    if(output.order_status === 'Failure') {
        // DO YOUR STUFF redirect to failure url and update failure status to database
        res.writeHead(301,
            {Location: 'http://localhost:3010/failed'}
            );
            res.end();
        } else if (output.order_status === 'Success') {
            // DO YOUR STUFF redirect to success url and update success status to database
            res.writeHead(301,
               {Location: 'http://localhost:3010/success'}
            );
            res.end();
       }
    })
}
'use strict';
var ccav = require('./ccavutil.js');
module.exports = function(Order) {

    Order.encryptFormData = function (request, cb) {
        var formBody = '';
        var workingKey = '0CA9AB0B9FEBF9EB9008AA9523F9F2A0';	//Put in the 32-Bit key shared by CCAvenues.TESTING 3010
        var accessCode = 'AVBS02GD63AJ23SBJA';	//Put in the Access Code shared by CCAvenues. TESTING 3010
        var encRequest = '';
        encRequest = ccav.encrypt(request, workingKey);
        cb(null, encRequest);
      }
    
      Order.remoteMethod('encryptFormData', {
        accepts: {
          arg: 'request',
          type: 'any'
        },
        returns: {
          arg: 'response',
          type: 'any'
        },
        http: {
          path: '/encryptFormData',
          verb: 'get'
        }
      });

};

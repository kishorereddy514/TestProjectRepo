import { expect } from 'chai';
import { API_KEY } from './config';
var loadtest = require('loadtest');


describe("Performance Test ", function () {

  it("performance testing with maxRequest", function (done) {
    this.timeout(1000 * 60);
    var options = {
      "url": 'https://maps.googleapis.com/maps/api/geocode/json?address=Toledo&key=' + API_KEY,
      "concurrency": 5,
      "maxRequests": 10,
      "statusCallback": callback
    };
    var gLatency;
    function callback(error, result, latency) {
      //console.log('Current latency %j, error %j', latency, error);
      expect(latency.totalErrors).to.be.equals(0);
      gLatency = latency;
    }
    var operation = loadtest.loadTest(options, function (error) {
      if (error) {
        console.error('Error : %s', error);
      } else if (operation.running == false) {
        console.log("-----------");
        done();
      }
    });
  });
});
import supertest from 'supertest';
import { expect } from 'chai';
import { REQUEST, API_KEY, INVALID_API_KEY, INSECURE_REQUEST } from './config';

//Negative test - wrong ApiKey/ Invalid APIKEY
describe('Negative Scenarios', () => {
    it('Request Denied - Authentication', async () => {
        const res = await REQUEST.get('address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + INVALID_API_KEY);
        expect(res.body.results).to.be.length(0);
        expect(res.body.status).to.be.equals('REQUEST_DENIED');
        expect(res.body.error_message).to.be.equals('The provided API key is invalid.');
    });

    //INSECURE_REQUEST
    it('Insecure Request -- without ssl protocol', async () => {
        const res = await INSECURE_REQUEST.get('latlng=40.714224,-73.961452&location_type=ROOFTOP&result_type=street_&key=' + API_KEY);
        expect(res.statusCode).to.be.equals(400);
        expect(res.body.results).to.be.length(0);
        expect(res.body.status).to.be.equals('INVALID_REQUEST');
    });

    //INVALID_REQUEST -- Reverse geocoding filtered by type
    it('Invalid Request -- with invalid result_type', async () => {
        const res = await REQUEST.get('latlng=40.714224,-73.961452&location_type=ROOFTOP&result_type=street_&key=' + API_KEY);
        expect(res.body.results).to.be.length(0);
        expect(res.body.status).to.be.equals('INVALID_REQUEST');
    });



});




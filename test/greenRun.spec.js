import supertest from 'supertest';
import { expect } from 'chai';
import {REQUEST, API_KEY} from './config';


//const request = supertest('https://maps.googleapis.com/maps/api/geocode/');

//const apiKey = 'AIzaSyBNW9ny7Q9TS1iRLYWgrWo4CwAb3wmrEik';
//const invalidApiKey = 'testInvalid';

//before block 
before(async () => {
    //console.log('before test code goes here');
});

//Positive test with async 
describe('Green Run - GET geocode with valid api key', () => {
    it('Check status 200', async () => {
        const res = await REQUEST.get('json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + API_KEY);
        expect(res.statusCode).to.be.equals(200);
        expect(res.body.status).to.be.equals('OK');
    });

    it('Reverse geocoding filtered with latlng', async () => {
        const res = await REQUEST.get('json?latlng=40.714224,-73.961452&location_type=ROOFTOP&result_type=street_address&key=' + API_KEY);
        expect(res.statusCode).to.be.equals(200);
        expect(res.body.status).to.be.equals('OK');
        expect(res.body.results).to.not.be.length(0);

    });
});

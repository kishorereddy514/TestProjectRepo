import supertest from 'supertest';
import { expect } from 'chai';
import { REQUEST, API_KEY } from './config';


//before block 
before(async () => {
    //console.log('before test code goes here');
});

//Positive test 
describe('Green Run - GET geocode with valid api key', () => {
    it('GeoCoding response', async () => {
        const res = await REQUEST.get('address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + API_KEY);
        expect(res.statusCode).to.be.equals(200);
        expect(res.body.status).to.be.equals('OK');
    });

    it('Viewport biasing', async () => {
        const res = await REQUEST.get('address=Winnetka&key=' + API_KEY);
        expect(res.statusCode).to.be.equals(200);
        expect(res.body.status).to.be.equals('OK');
        expect(res.body.results).to.not.be.length(0);

    });

    it('Reverse geocoding filtered with latlng', async () => {
        const res = await REQUEST.get('latlng=40.714224,-73.961452&location_type=ROOFTOP&result_type=street_address&key=' + API_KEY);
        expect(res.statusCode).to.be.equals(200);
        expect(res.body.status).to.be.equals('OK');
        expect(res.body.results).to.not.be.length(0);

    });


});


describe('Validate data ', () => {
    let formatted_address_withOut_region, place_id_withOut_region;
    it('Address with and without region ', async () => {
        const res = await REQUEST.get('address=Toledo&key=' + API_KEY);
        expect(res.body.status).to.be.equals('OK');
        expect(res.body.results).to.not.be.length(0);
        //store formatted_address and place_id
        formatted_address_withOut_region = res.body.results[0].formatted_address;
        place_id_withOut_region = res.body.results[0].place_id;

        const regionRes = await REQUEST.get('address=Toledo&region=es&key=' + API_KEY);
        expect(regionRes.body.status).to.be.equals('OK');
        expect(regionRes.body.results).to.not.be.length(0);
        // validate formatted_address with  region=es and without region 
        expect(regionRes.body.results[0].formatted_address).to.not.be.equals(formatted_address_withOut_region);
        expect(regionRes.body.results[0].place_id).to.not.be.equals(place_id_withOut_region);
    });

});

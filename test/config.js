import supertest from 'supertest';
require('dotenv').config(); //securely stores api key in .env file
export const REQUEST = supertest('https://maps.googleapis.com/maps/api/geocode/json?');
export const INSECURE_REQUEST = supertest('http://maps.googleapis.com/maps/api/geocode/json?');
export const API_KEY = process.env.apiKey ;
export const INVALID_API_KEY = 'testInvalid';


import supertest from 'supertest';

export const REQUEST = supertest('https://maps.googleapis.com/maps/api/geocode/');
export const INSECURE_REQUEST = supertest('http://maps.googleapis.com/maps/api/geocode/');
export const API_KEY = 'AIzaSyBNW9ny7Q9TS1iRLYWgrWo4CwAb3wmrEik';
export const INVALID_API_KEY = 'testInvalid';

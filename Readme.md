# Manual Tests:
## Complete Green Run

 * Query with valid address
    * Given the valid URL, API key and the 'address' is passed as query param 
    * When GET request is sent
    * Then validate status code is '200' and status is 'OK'

 * Query Viewport biasing
    * Given the valid URL, API key and 'address' is passed as query param  
    * When GET request is sent
    * Then validate status code is '200'
 
 * Query Reverse geocoding filtered with latlng
     * Given the valid URL, API key and 'latlng' 'location_type' and 'result_type' is passed as query param
     * When GET request is sent
     * Then validate status code is '200'
     
 * Address with and without region 
     * Given url with valid api key
     * And  just 'address' is passed as query param
     * And 'address' and 'region' is passed as query param
     * When GET request is sent
     * Then validate both 'formatted_address' and 'place_id' of results not to be equal
     
  
## Negative Tests (error/exception)

 * Query with invalid api key
    * Given the valid URL, invalid api key and 'address' as query param
    * When GET request is sent
    * Then validate status is 'REQUEST_DENIED' and error message
      
 * Query with invalid query parameter
    * Given the valid URL and valid api key
    * And the invalid 'result_type' as query param 
    * When GET request is sent
    * Then validate status is 'INVALID_REQUEST' and results lenght to be '0'
    
  
## Security/ performance    

* Query without ssl protocol
    * Given the invalid URL and valid api key
    * And the valid 'address' as query param 
    * When GET request is sent
    * Then validate status is 'INVALID_REQUEST' and status code to be '400'

* Performance test with maxRequest and concurrency
   * Given the valid URL and api key
   * When maxRequest and concurrency is given
   * Then validate 'latency' params like totalErrors etc      
    

  Other scenarios that can be covered
    * For any input when value is null/empty is passed, but when a null is unacceptable, must be rejected
    * Inputs of an incorrect type or  length/size must be rejected
    * Check apiKey expiry or limit requests
    * check apiKey of one user with other user
    * Validate request headers
     
How to run instructions:
```bash
use "npm run test" command >> it will generate console output 
use "npm run test_report" >> it will generate report.html file 
```


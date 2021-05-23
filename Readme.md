# Manual Tests:
## Complete Green Run

 * Query with valid address
    * Given the valid URL and API key 
    * When the valid 'address' is passed as query param 
    * Then validate status code is '200' and status is 'OK'

 * Query Viewport biasing
    * Given the valid URL and API key
    * When the valid 'address' is passed as query param
    * Then validate status code is '200'
 
 * Query Reverse geocoding filtered with latlng
     * Given the valid URL and API key
     * When the 'latlng' 'location_type' and 'result_type' is passed as query param
     * Then validate status code is '200'
     
 * Address with and without region 
     * Given url with valid api key
     * When  just 'address' is passed as query param
     * When 'address' and 'region' is passed as query param
     * Then validate both 'formatted_address' and 'place_id' of results not to be equal
     
  
## Negative Tests (error/exception)

 * Query with invalid api key
    * Given the valid URL and invalid api key
    * When the valid 'address' as query param 
    * Then validate status is 'REQUEST_DENIED' and error message
      
 * Query with invalid query parameter
    * Given the valid URL and valid api key
    * When the invalid 'result_type' as query param 
    * Then validate status is 'INVALID_REQUEST' and results lenght to be '0'
    
    Other scenarios that can be covered
    * For any input when value is null/empty is passed, but when a null is unacceptable, must be rejected
    * Inputs of an incorrect type or  length/size must be rejected

## Security/ performance    

* Query without ssl protocol
    * Given the invalid URL and valid api key
    * When the valid 'address' as query param 
    * Then validate status is 'INVALID_REQUEST' and status code to be '400'
    

How to run instructions:
```bash
use "npm test" command >> it will generate console output 
use "npm test_report" >> it will generate report.html file 
```


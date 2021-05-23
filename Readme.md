Background
Railz is an API first company, with a Node.js / JavaScript based stack. In addition to API services,
we have a browser based dashboard, which allows for account management. Assume that
infrastructure is on AWS, consists of microservices and includes both SQL and NoSQL
datastores.
1. Given the Google Geocoding API, and assuming that all output is in JSON:
https://developers.google.com/maps/documentation/geocoding/overview
Outline the set of manual tests that you would perform for:
• a complete green run
• error / exception cases
• performance / security
You may use the following API key:
AIzaSyBNW9ny7Q9TS1iRLYWgrWo4CwAb3wmrEik
2. Create a set of automated tests using a JavaScript test framework of your choice that
covers the green run in part (3). The responses for this section should be provided as
code, with either instructions on how to run, or the code with a sample of the live
output.


Manual Tests:
• a complete green run
    * Validate status code with valid URL, API key and valid address 
    * Validate status code with valid URL, API key and latitude and longitude

• error / exception cases
    * 


• performance / security

Running instructions:
use "npm test" command >> it will generate console output 
use "npm test_report" >> it will generate report.html file 



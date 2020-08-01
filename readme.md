'npm install express' if you dont have the dependency installed

'node main.js' to start server

========================================================================

Prompt:

If you don’t have a current code sample you can share, please write a small web application in one of the above languages (Python/Ruby/Node). The application only needs to do the following:

Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
Return a JSON object with the key “return_string” and a string containing every third letter from the original string

(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

Note: To see expected behavior you can test against a current working example with the command: curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'

========================================================================

Notes:

This small code sample is really only main.js and utility.js.  main.js is the main file for the express app and utility.js is the file that contains the function used to create 'return_string'.  I separated that function out to a separate file to keep main.js clean.  As mentioned above, this does use express so please install that dependency if needed.  I was able to test the route both locally and at https://lyft-interview-test.glitch.me/test using Postman and I believe I was able to achieve the desired behavior.  Of course, any feedback would be appreciated.

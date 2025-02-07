# Unhandled Server Error in Node.js HTTP Server

This repository demonstrates a common yet subtle error in Node.js HTTP servers: failure to properly handle errors and close the response.  When an error occurs during request processing, if the response isn't properly ended, it can lead to hanging connections and various unexpected behaviors.  The solution showcases the proper use of error handling to ensure robust server operation.

## Bug
The `bug.js` file contains a Node.js HTTP server that intentionally throws an error when the URL is `/error`. However, it lacks proper error handling, which causes issues in the response.

## Solution
The `bugSolution.js` file demonstrates the correct approach.  It uses a `try...catch` block to gracefully handle errors and ensure that the response is always ended, even in case of failures.  This prevents hanging connections and maintains server stability.
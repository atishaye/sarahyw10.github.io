// Name: _your name here_
// Date: _add date here_
// Section: CSE 154 _your section here_
//
// -- your description of what this file does here --

// Do not keep comments from this template in any work you submit (functions included under "Helper
// functions" are an exception, you may keep the function names/comments of checkStatus/id/qs/qsa)
(function() {
  "use strict";

  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED
  // HERE
  const API_URL = ""; // it's good to factor out your url base as a constant

  /**
   *  Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);
  id("registered").addEventListener("click", registered)


  /**
   *  CHANGE: Describe what your init function does here.
   */
  function init() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE
    // WEBPAGE LOADS
  }

  function registered(){
    id("registrationBox").parentNode.removeChild("registrationBox");
  }

  /**
   * Steps to making an Fetch request:
   * Step 1: Write a function to "fetch" data from a URL (possibly with query/value pairs)
   * Step 2: Write a function to do something with the response (if successful)
   * Step 3  Write a function to handle any response errors in a user-friendly way
   *        (pass this function name in the catch statement for Step 1)
   */
  // Step 1
  function makeRequest() {
    let url = URL_BASE; // if no params needed in request url
    //let url = URL_BASE + "?query0=value0"; // one query/value pair, indicated with a starting ?
    //let url = URL_BASE + "?query0=value0&query1=value1..."; // two or more query/value pairs, joined by &
    fetch(url)
      .then(checkStatus)      // helper function provide to ensure request is successful or not
    //.then(JSON.parse)       // uncomment if response returns JSON format instead of text
      .then(successFunction)  // this is reached if checkStatus says good-to-go; you write this function
      .catch(console.log);    // this is reached if error happened down the fetch chain pipeline,
                              // use console.log (for debugging) or your own error-handling
                              // function (required in some assignments)
  }

  // Step 2
  function successFunction(responseData) {
    // responseData is string if you didn't include JSON.parse in fetch call chain, else JSON object
    console.log(responseData); // this is a good step when you want to check that data was successfully
                               // retrieved in the fetch call chain, but remove console statements
                               // after testing.
    // now play with your responseData! (build DOM, display messages, etc.)
  }

  /* ------------------------------ Helper Functions  ------------------------------ */
  // Note: You may use these in your code, but do remember that your code should not have
  // any functions defined that are unused.

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @returns {object} - valid result text if response was successful, otherwise rejected
   *                     Promise result
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status === 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

})();

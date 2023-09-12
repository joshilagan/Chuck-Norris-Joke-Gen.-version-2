# CHUCK NORRIS JOKES

**Description:**
This Chuck Norris Jokes Generator is an improved version of the first one.

**New Features:**
- This one utilizes the use `.then` to handle the promise and `.catch` to handle the error.
- It also automatically loads a joke upon opening the joke generator web app.

**Old Features:**

- Upon clicking the `Get Another Joke` it generates a Chuck Norris Joke that is displayed in the HTML DIV.

- The Chuck Norris Joke utilizes AJAX-XHR to get the API from api.chucknorris.io. Upon clicking the `Get Another Joke` button, an XML Get request is made to api.chucknorris.io server. Once the ready state changes to '4' and the status to '200', we then take the response and convert it to an object string using JSON.parse. Then display the result in the HTML DIV.
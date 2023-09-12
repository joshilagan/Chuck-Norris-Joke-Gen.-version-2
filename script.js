const joke = document.querySelector('#joke')

function getJoke() {
  //create a function called getData() inside the event listener's function, so that we can create a promise. Insert a parameter inside this function to pass in the web server address
  function getData(endpoint) {
    //create a promise constructor
  return new Promise ((resolve, reject) =>{
    //create an XMLHttpRequest() and assign it to a variable
    const xhr = new XMLHttpRequest();
    //use the parameter inside the open() method so we can make a "Get" request to the server
    xhr.open('GET', endpoint);
    //create a function to handle the ready state
    xhr.onreadystatechange = function () {
      //breakdown the readystate and status into nested if's
      //
      if (this.readyState === 4){
        if (this.status === 200) {
          //use resolve() method to get the response from the server
          resolve(JSON.parse(this.responseText));
        } else {
          //use reject() method to handle status error if any
          reject('Something went wrong');
        }
      }
    };
    //use send() method to send the request
    xhr.send();
  })
  }

  //pass in an argument to the invoker, the argument will be the web server address
  //use .then to catch the response from the server
  //create an arrow function inside the .then and use an identifier inside the arrow function
getData('https://api.chucknorris.io/jokes/random').then((item) => {  
  console.log(item.value);
  //use the identifier to display the API in our HTML
  joke.textContent = `${item.value} `;
})
//use .catch to handle status error
.catch((error) => {console.log(error)
});

}
//create an event listener on the button
document.querySelector('#joke-btn').addEventListener('click', getJoke)
//create an onload event to load the joke upon opening the web app
window.addEventListener('DOMContentLoaded', getJoke);
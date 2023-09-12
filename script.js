const joke = document.querySelector('#joke')

//create XMLHttpRequest constructor and assign it to a variable
const xhr = new XMLHttpRequest();

//create a click event for the "Get Another Joke" button
function getJoke(){
    //use the XMLHttpRequest: open() method to initialize a newly-created request. And the request is to "Get" 'https://api.chucknorris.io/jokes/random'
    xhr.open('Get', 'https://api.chucknorris.io/jokes/random');

    //use the onreadystatechange property to define a function to be executed when the readyState change.
    //Note:The onreadystatechange event is triggered four times (1-4), one time for each change in the readyState.
    xhr.onreadystatechange = function () {
        //we shall set a condition for the readystate and status, '4' for the readystate and '200' for the status
        if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText));
        //we shall convert the server's response from JSON String to Object string using JSON.parse then assign it to a variable
        const data = JSON.parse(this.responseText);
        //display the response in the HTML
        joke.textContent = `${data.value} `;   
  }
};
//send request to the server using XMLHttpRequest: send() method
xhr.send();
}
document.querySelector('#joke-btn').addEventListener('click', getJoke)
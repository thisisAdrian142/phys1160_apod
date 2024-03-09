// nasa api
const count = 10;
const apiKey = 'DEMO_KEY';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
// we pass the count=10 to the apiURL above.

// create an array that we will pass the api in; what we're fetching from the api
let resultsArray = []; //set it empty

// set up an asynchornous fetch requrest
// get 10 imgs from nasa api
// since we want this to be a synchronous -> prepend async before writting out function
async function getNasaPictures() {
    try {
        const response = await fetch(apiURL); // it awaits the results of the fetch requrest
        resultsArray = await response.json(); // we populate the results array and await that response in json format
        console.log(resultsArray);
    } catch (error) {
        //catch error here
    }
}

// on load to see the result
getNasaPictures();
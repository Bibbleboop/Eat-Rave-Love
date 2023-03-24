const apikey = "eGb5sb2MhTGgLq4l2SzXrLUxLXWJcTBm"
const secret = "CoGgTMxNGqhB5APG"
const baseUrl = "https://app.ticketmaster.com/discovery/v2/"
const url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=eGb5sb2MhTGgLq4l2SzXrLUxLXWJcTBm"

fetch(url)
.then((response) => {
    console.log("retieved", response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((error) => {
  console.log("rejected", error);
});

export const testCall = () => {
    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("99e862960da1f6c3c8cfcc8f6ba4f35968cee4846f4411a8a8e75b8e697c3d9e");
​
    const params = {
        q: "evenements Paris",
        google_domain: "google.fr",
        gl: "fr",
        hl: "fr"
    };
​
    const callback = function (data) {
        console.log(data["events_results"]);
    };
​
    // Show result as JSON
    search.json(params, callback);
}
​
testCall();
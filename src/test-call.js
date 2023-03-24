
    const testCall = () => {

    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("99e862960da1f6c3c8cfcc8f6ba4f35968cee4846f4411a8a8e75b8e697c3d9e");
    const params = {
        q: "events near london",
        google_domain: "google.com"
        // gl: "fr",
        // hl: "fr"
    };
    const callback = function (data) {
        console.log(data["events_results"]);
    };
    // Show result as JSON
    search.json(params, callback);
}
testCall()
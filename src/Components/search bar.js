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


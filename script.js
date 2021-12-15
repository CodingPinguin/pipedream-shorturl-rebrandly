const axios = require("axios");

let linkRequest = {
  destination: "LINK",
  domain: { fullName: "rebrand.ly" }
  //, slashtag: "A_NEW_SLASHTAG"
  //, title: "Yeeeee"
}

let requestHeaders = {
  "Content-Type": "application/json",
  "apikey": "API-KEY",
  "workspace": "ID"
}

await axios.post(`https://api.rebrandly.com/v1/links`,
    linkRequest,
    {
      headers: requestHeaders
    })
  .then((response) => {
   let link = response.data;
   console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
  })
  .catch((error) => {
    console.log(`error was ${error}`);
  })

const rp = require('request-promise');
const checksum = require('checksum'); 
const co = require('cheerio');

// instantiate an empty variable outside the function so we can save its value
let hash = "";

function checkURL(siteToCheck) {
  return rp(siteToCheck).then(HTMLresponse => {
    
    const $ = co.load(HTMLresponse);
    let goalScorerString = "";

    // use Cheerio to parse HTML response and find all search results
    $(".statsTableContainer").each((i, element) => {
      let topTwenty = element.children.map(a => a.name);
      goalScorerString += `${topTwenty}`;
    });
    return checksum(goalScorerString);
  })
    .catch(err => {
      console.log(`Could not complete fetch of ${url}: ${err}`);
    });
};

const url = `https://www.premierleague.com/stats/top/players/goals`;

// check every 10 seconds
// doing this asynchronyously so our fetch is sure to resolve
setInterval(async () => {
  console.log(await checkURL(url));
}, 10000);
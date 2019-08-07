const rp = require('request-promise'); 
const co = require('cheerio');

const url = `https://www.premierleague.com/stats/top/players/goals`;

rp(url)
  .then(res => {
    res.setHeader("Content-Type", "text/javascript");
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
const rp = require('request-promise'); 
const co = require('cheerio');

const url = `https://www.premierleague.com/stats/top/players/goals`;

rp(url)
  .then(response => console.log(response));
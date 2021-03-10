const cheerio = require('cheerio')
const axios = require('axios')
const moment = require('moment');

async function init() {
  const foreSignal = await axios.get('https://foresignal.com/es/');
  const $ = cheerio.load(foreSignal.data);
  const timesArray = [];
  $('.row.row-eq-height .signal-value .gmt script').each((i, item) => {
    timesArray.push($(item).html().trim());
  })
  console.log(timesArray);
}

init().then();

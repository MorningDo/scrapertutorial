const cheerio = require('cheerio');
const moment = require('moment');

module.exports.extractListingsFromHTML = (html) => {
    const $ = cheerio.load(html);
    const vacancyRows = $('.views-row listing__item');

    const vacancies = [];
    vacancyRows.each((i, el) => {
        let job = $(el).children('.listing__heading').first().text().trim()
        let closing = $(el).children('.listing__meta-label').first().text().trim()
        
        vacancies.push({job, closing});
    });

    return vacancies
}
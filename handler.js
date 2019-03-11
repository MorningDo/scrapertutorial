'use strict';

const request = require('axios')
const {extractListingsFromHTML} = require('./data_extractors')

const JobSiteURL = "https://www.thedonkeysanctuary.org.uk/jobs/latest-vacancies"

module.exports.GetScraperJobs = (event, context, callback) => {
    request(JobSiteURL)
      .then(({data}) => {
        const jobs = extractListingsFromHTML(data);
        callback(null, {jobs})
      }).catch(callback)
  };


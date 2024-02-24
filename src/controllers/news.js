const News = require('../models/news');

const createNews = async (newsData) => {
  // we need to add validations here
  return News.createNews(newsData);
}

const getNewsByMatchId = async (matchId) => {
  if (!matchId || isNaN(Number(matchId))) {
    throw new Error('Missing or invalid required path parameter: matchId');
  }
  return News.getNewsByMatchId(matchId);
}

const getNewsByTourId = async (tourId) => {
  if (!tourId || isNaN(Number(tourId))) {
    throw new Error('Missing or invalid required path parameter: matchId');
  }
  return News.getNewsByTourId(tourId);
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId, 
    getNewsByTourId: getNewsByTourId
}
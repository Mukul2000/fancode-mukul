const mysql = require('../lib/mysql');

const createNews = async (newsData) => {
  const statement = `insert into news (title, description, linked_id, link_type) values (?, ?, ?, ?)`;
  const parameters = [newsData.title, newsData.description, newsData.linkedId, newsData.link_type];
  return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (matchId) => {
  const statement = `select n.id, title, description from news n join matches m on n.linked_id = m.id where n.link_type = ? and m.id = ?`;
  const parameters = ['match', matchId];
  return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (tourId) => {
  const statement = `select n.id, title, description from news n join tours t on n.linked_id = t.id where n.link_type = ? and t.id = ?`;
  const parameters = ['tour', tourId];
  return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (sportId) => {
  const statement = `SELECT n.id, title, description, s.name as sportName   
    FROM news n JOIN matches m ON n.linked_id = m.id
    JOIN tours t ON m.tourId = t.id
    JOIN sports s ON t.sportId = s.id   
    WHERE s.id = ? OR m.id IS NULL;
  `;
  const parameters = [sportId];
  return await mysql.query(statement, parameters);
}

module.exports = {
  createNews: createNews,
  getNewsByMatchId: getNewsByMatchId,
  getNewsByTourId: getNewsByTourId,
  getNewsBySportId: getNewsBySportId,
}
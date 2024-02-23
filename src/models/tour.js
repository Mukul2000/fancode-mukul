const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourId = async params => {
    const statement = 'select * from matches where tourId = ?';
    const parameters = [ params.tourId ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourId: getMatchesByTourId
}
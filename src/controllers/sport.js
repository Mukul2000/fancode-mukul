const Sport = require('../models/sport');

const getAllSportsToursAndMatches = async () => {
    const matches = await Sport.getAllSportsToursAndMatches();
    const res = {};
    matches.forEach(match => {
        const { sportName, tourName, matchName, id, format, startTime } = match;
        if (!res[sportName]) {
            res[sportName] = {};
        }
        if (!res[sportName][tourName]) {
            res[sportName][tourName] = [];
        }
        res[sportName][tourName].push({
            id,
            matchName,
            format,
            startTime,
        });
    });
    return res;
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}
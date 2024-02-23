const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourId = async params => {
    const { tourId } = params;

    if (!tourId || isNaN(Number(tourId))) {
        throw new Error('Missing or invalid required parameter: tourId');
    }

    return await Tour.getMatchesByTourId(params);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourId: getMatchesByTourId
}
const Tour = require('../controllers/tour');

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    /*
        By modify I assume not using something irregular like name
        I dont see a particular use case for name
        frontend should do this mapping from name to id, not us.
    */
    app.route('/tour/:tourId/matches').get(async (req, res, next) => {
        try {
            let params = req.params;
            let result = await Tour.getMatchesByTourId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}
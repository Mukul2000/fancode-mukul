const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news').post(async (req, res, next) => {
        try {
            return res.json(await News.createNews(req.body));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:id').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsByMatchId(req.params.id));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:id').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsByTourId(req.params.id));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/:id').get(async (req, res, next) => {
        try {
            return res.json(await News.getNewsByTourId(req.params.id));
        } catch (err) {
            return next(err);
        }
    });
}

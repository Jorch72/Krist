var krist = require('./../krist.js');

module.exports = function(app) {
	app.get('/', function(req, res, next) {
		if (typeof req.query.getwork !== 'undefined') {
			return res.send(krist.getWork().toString());
		}

		next();
	});

	/**
	 * @api {get} /work Get the current work
	 * @apiName GetWork
	 * @apiGroup MiscellaneousGroup
	 * @apiVersion 2.0.0
	 *
	 * @apiSuccess {Number} work The current Krist work (difficulty)
	 * @apiSuccess {Number} growth_factor The current work growth factor
	 *
	 * @apiSuccessExample {json} Success
	 * {
	 *     "ok": true,
	 *     "work": 18750,
	 *     "growth_factor": 0.999978
     * }
	 */
	app.get('/work', function(req, res) {
		res.json({
			ok: true,
			work: krist.getWork(),
			growth_factor: krist.getWorkGrowthFactor()
		});
	});

	return app;
};
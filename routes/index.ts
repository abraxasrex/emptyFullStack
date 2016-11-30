import * as express from 'express';
let router = express.Router();

/* GET home page. */
// no mount path, requests to 'www.bowties.com'
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;

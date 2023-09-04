const dbUsers = require('../db/users')
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/:userId', async function(req, response) {
  try {
    response.send(await dbUsers.get(req.params.userId));
  }catch (error) {
    console.log("Error in Get: ", error);
    return next(error);
  }
});

router.post('/add', async function (request, response) {

  //Add user details to the database
  try {
    await dbUsers.add(request.body);
    response.send(request.body);

  } catch (error) {
    console.error('Error verifying Google token:', error);
    throw new Error('Invalid Google token');
  }

});
module.exports = router;

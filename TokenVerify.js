const jwt = require("jsonwebtoken");
require("dotenv").config();

function TokenVerify(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(200).send([{_id: 'unknown' , message: "UnAuthorized access" }]);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      res.status(200).send([{ message: "Unknown User" }]);
    } else if (user.email) {
      next();
    } else {
      return res.status(500).send({
        message:
          "I Don't have permission To giveing you This Data please contact on our help center",
      });
    }
  });
}

module.exports = TokenVerify;

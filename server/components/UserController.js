const userLogin = (req, res, next) => {
  let { password, user } = req.query;
  console.log(user);
  console.log(password);
};
const createUser = (req, res, next) => {};

module.exports = { userLogin, createUser };

const userLogin = (req, res, next) => {
  let { password, user } = req.query;
  console.log(user);
  console.log(password);
};
const createUser = (req, res, next) => {
  let {
    userName,
    email,
    firstName,
    lastName,
    phoneNumber,
    password
  } = req.body;
  console.log(userName, email, firstName, lastName, phoneNumber, password);
};

module.exports = { userLogin, createUser };

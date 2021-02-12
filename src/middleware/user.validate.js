const validateUserSignup = (req, res, next) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    return res.status(400).json({
      error: 'user credentials cannot be empty',
    });
  }
  next();
};

const validateUserSignin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).json({
      error: 'Either email or password incorrect',
    });
  }
  next();
};

export default { validateUserSignup, validateUserSignin };
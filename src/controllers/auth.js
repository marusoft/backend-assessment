import User from "../entities/user";
import logger from "../utils/logger";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import config from "../config";

/**
 * Given a json request
 * {"username": "<...>", "password": "<...>"}
 * Create a new user and return some authentication token
 * which can be used to verify protected resources
 * {"user": <{...}>, "token": "<...>""}
 */
const signup = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const savedUser = await User.findOne({ email });
    if (savedUser) {
      return res.status(400).json({
        error: `User with ${savedUser.email} already exist, please login`,
      });
    }
    const hashpassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      username,
      email,
      password: hashpassword
    });
    const newUser = await user.save();
    const { _id } = newUser;
    const token = jwt.sign({ _id }, config.jwt_secret);
    return res
      .status(201)
      .json({ token, message: `${user.email} account successfully created` });
  } catch (error) {
    logger.error(error);
  }
};
/**
 * Given a json request
 * {"username": "<...>", "password": "<...>"}
 * Verify the user is valid and return some authentication token
 * which can be used to verify protected resources
 * {"user": <{...}>, "token": "<...>""}
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(401).json({
        error: 'email or pasword incorrect',
      });
    }

    const comparePassword = await bcrypt.compare(password, userExist.password);
    if (comparePassword) {
      const token = jwt.sign({ _id: userExist._id }, config.jwt_secret);

      const {
        _id, username, email
      } = userExist;
      return res.status(200).json({
        token,
        user: {
          _id,
          username,
          email,
        },
        message: `${userExist.email} successfully signed in`,
      });
    }
    return res.status(401).json({ error: 'email or pasword incorrect' });
  } catch (error) {
    logger.error(error);
  }
};

/**
 * Implement a way to recover user accounts
 */
const forgotPassword = (req, res) => {
  res.status(404).json({ err: "not implemented" });
};

export default {
  login,
  signup,
  forgotPassword,
};

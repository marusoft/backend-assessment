import Auth from '../controllers/auth';
import userValidation from "../middleware/user.validate"

const { validateUserSignup, validateUserSignin } = userValidation;

module.exports = app => {
	app.route('/auth/login').post(validateUserSignin, Auth.login);
	app.route('/auth/signup').post(validateUserSignup, Auth.signup);

	/*** BONUS POINTS ***/
	// app.route('/auth/forgotPassword').post(Auth.forgotPassword);
};

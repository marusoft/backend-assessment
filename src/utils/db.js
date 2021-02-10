import mongoose from 'mongoose';
import logger from './logger'

mongoose.Promise = global.Promise;

const uri = 'mongodb://localhost:27017/contact';
const dev = "dev"
const connection = mongoose.connect(uri, {
	useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

connection
	.then(db => {
		logger.info(
			`Successfully connected to ${uri} in ${
			dev
			} mode.`,
		);
		return db;
	})
	.catch(err => {
		if (err.message.code === 'ETIMEDOUT') {
			logger.info('Attempting to re-establish database connection.');
			mongoose.connect(uri);
		} else {
			logger.error('Error while attempting to connect to database:');
			logger.error(err);
		}
	});

export default connection;

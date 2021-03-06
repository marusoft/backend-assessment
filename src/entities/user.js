import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

export const UserSchema = new Schema(
	{
		email: {
			type: String,
			lowercase: true,
			trim: true,
			index: true,
			unique: true,
			required: true
		},
		username: {
			type: String,
			lowercase: true,
			trim: true,
			index: true,
			unique: true,
			required: true
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			trim: true,
			required: true
		}
	},
	{ collection: 'users' }
)


UserSchema.plugin(timestamps);
UserSchema.plugin(mongooseStringQuery);

UserSchema.indexes({ email: 1, username: 1 });

module.exports = exports = mongoose.model('User', UserSchema);

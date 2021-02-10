import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line import/no-mutable-exports
let config;

if (process.env.NODE_ENV === 'production') {
  config = {
    uri: process.env.DB_URL,
  };
}
config = {
  uri: process.env.URL,
  jwt_secret: process.env.SECRECT_KEY,
};

export default config;

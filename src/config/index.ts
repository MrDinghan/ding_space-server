import MySqlConfig from './mysql';

// Process env
const env = (process.env.NODE_ENV || 'development') as
  | 'development'
  | 'test'
  | 'production';

// default config
const defaultConfig = {
  env: env,
  MYSQL_CONFIG: MySqlConfig[env],
  OPEN_API_DOC: true,
};

export default defaultConfig;

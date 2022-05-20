export default {
  development: {
    USER: 'root',
    PASSWORD: 'admin123',
    DB: 'test',
    HOST: 'localhost',
    PORT: 3306,
    SYNC: false,
  },
  test: {
    USER: 'xxxxx', // 测试环境数据库的账号名
    PASSWORD: 'xxxxx', // 测试环境数据库的密码
    DB: 'xxxxx', // 测试环境数据库名
    HOST: 'xxxxx', // 测试环境host
    PORT: 3306,
    SYNC: false,
  },
  production: {
    USER: 'root',
    PASSWORD: 'admin123',
    DB: 'test',
    HOST: 'host.docker.internal',
    PORT: 3306,
    SYNC: false,
  },
};

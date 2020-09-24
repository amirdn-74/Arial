module.exports = {
  // choose your database driver
  driver: env("DB_DRIVER", "mongodb"),

  /*
  |
  |
  |
    specify database loging (for sql dbms drivers)
    default: false
    if you choose true every change will be loged in terminal
  |
  |
  |
  */
  loging: false,

  /*
  |
  |
  |
    list of avalable drivers in AriaL
    configure your drivers here
    AriaL Strongly recommends configure your database in .env file
    for security point of view
  |
  |
  |
  */
  drivers: {
    mongodb: {
      host: env("DB_HOST", "127.0.0.1"),
      port: env("DB_PORT", 27017),
      database: env("DB_DATABASE", "arial"),
      username: env("DB_USERNAME", ""),
      password: env("DB_PASSWORD", ""),
      connectionString: env("DB_CONNECTION_STRING", ""),
    },
    mysql: {
      host: env("DB_HOST", "127.0.0.1"),
      port: env("DB_PORT", 3306),
      database: env("DB_DATABASE", "arial"),
      username: env("DB_USERNAME", ""),
      password: env("DB_PASSWORD", ""),
    },
  },
};

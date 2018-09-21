module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        host: 'localhost',
        dialect: 'sqlite',
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      
        // SQLite only
        storage: 'ntask.sqlite'
      }
};
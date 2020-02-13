module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/my_node_db'
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    }
  }
};

module.exports = ({ env }) => {
  if (process.env.NODE_ENV === 'development') {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    }
  }

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          host: env('DATABASE_HOST', '127.0.0.1'),
          srv: env.bool('DATABASE_SRV', false),
          port: env.int('DATABASE_PORT', 27017),
          database: env('DATABASE_NAME', 'strapi'),
          username: env('DATABASE_USERNAME', null),
          password: env('DATABASE_PASSWORD', null),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    },
  }
};

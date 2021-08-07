module.exports = {
  provider: process.env.NODE_ENV === 'development' ? 'local' : "do",
  providerOptions: process.env.NODE_ENV === 'development' ? {} : {
    key: process.env.DO_SPACE_ACCESS_KEY,
    secret: process.env.DO_SPACE_SECRET_KEY,
    endpoint: process.env.DO_SPACE_ENDPOINT,
    space: process.env.DO_SPACE_BUCKET,
  }
}

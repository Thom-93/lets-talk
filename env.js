module.exports = {
  production: {
    certUrl: __dirname + '/ssl/production/',
    keyUrl: __dirname + '/ssl/production/',
    dbUrl: '',
    portHTTP: 80,
    portHTTPS: 443,
  },
  development: {
    certUrl: __dirname + '/ssl/development/local.crt',
    keyUrl: __dirname + '/ssl/development/local.key',
    dbUrl: 'mongodb+srv://Alex:qwe@cluster0.u908xrg.mongodb.net/test?authSource=admin&replicaSet=atlas-38r5up-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    portHTTP: 3000,
    portHTTPS: 3001,
  }
}
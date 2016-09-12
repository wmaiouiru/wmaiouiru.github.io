/*
    Documentation on nwb.conig: 
    https://github.com/insin/nwb/blob/master/docs/Configuration.md#publicpath-string
*/

module.exports = {
  type: 'react-app'
}

module.exports = {
    webpack: {
        publicPath: './dist_staging',
        path: __dirname + '/dist_staging'
    },
}

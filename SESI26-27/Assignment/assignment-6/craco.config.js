const path = require('path')

module.exports = {
    reactScriptsVersion: "react-scripts",
    webpack: {
        alias: {
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@store': path.resolve(__dirname, 'src/redux'),
        },
    },
};

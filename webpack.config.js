const path = require('path');

module.exports = {
  // Your existing configuration...
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'), // If you need HTTPS as well
      // other fallbacks if needed
    },
  },
  // other configurations like entry, output, etc.
};

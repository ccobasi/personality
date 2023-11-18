// module.exports = {
//   moduleFileExtensions: ['js', 'json', 'vue'],
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//     '^.+\\.vue$': 'vue-jest',
//   },
// };
/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
  };
};

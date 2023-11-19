
// /** @type {import('jest').Config} */
// const config = {
//   verbose: true,
// };

// module.exports = config;
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
}

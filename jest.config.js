export default {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  // Add any other Jest configuration here
};

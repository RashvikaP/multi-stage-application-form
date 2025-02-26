/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Process .tsx files with ts-jest
    },
    testEnvironment: 'jsdom', 
    // the following line is needed in order to grab modules from the
    // src folder without the need to write them relatively
    moduleDirectories: ["node_modules", "src"],
  };
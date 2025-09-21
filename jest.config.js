/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverageFrom: [
    "<rootDir>/**/*.{ts,tsx}",
    "!<rootDir>/.next/**",
    "!<rootDir>/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/**/types.ts",
    "!<rootDir>/**/?(*.)+(spec|test).[jt]s?(x)",
  ],
};

module.exports = createJestConfig(config);

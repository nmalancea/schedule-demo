module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: '<rootDir>/__tests__/customTestEnv.js',
  testMatch: [
    '**/?(*.)+(spec|test|e2e).js?(x)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/',
  ],
  setupFiles: [
    '<rootDir>/__tests__/setupFiles.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/setupFilesAfterEnv.js',
  ],
};

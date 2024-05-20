module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'src/constants',
    'src/config',
    'src/modules/meta-service',
    'common.ts',
    'mock-data.ts',
    '.dto.ts',
  ],
  coverageReporters: ['cobertura', 'html', 'lcov', 'text', 'text-summary'],
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
};

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'src/constants',
    'src/config',
    'src/modules/meta-service',
    'src/providers/banco-pichincha/config',
    'src/providers/banco-pichincha/constants',
    'src/providers/banco-pichincha/enums',
    'src/providers/banco-pichincha/utils/common.ts',
    'common.ts',
    'mock-data.ts',
    '.dto.ts',
  ],
  coverageReporters: ['cobertura', 'html', 'lcov', 'text', 'text-summary'],
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
};

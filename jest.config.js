const isProd = process.env.NODE_ENV === 'production'
const COVERAGE_EXPECTATION = isProd ? 70 : 0

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/.next',
    '<rootDir>/build'
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    'node_modules/(?!(imask)/)'
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/fileTransformer.js'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)?'],
  coverageThreshold: {
    global: {
      branches: COVERAGE_EXPECTATION,
      functions: COVERAGE_EXPECTATION,
      lines: COVERAGE_EXPECTATION,
      statements: COVERAGE_EXPECTATION
    }
  },
  coverageReporters: ['text', 'text-summary', 'cobertura', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  modulePaths: ['<rootDir>/src/'],
  modulePathIgnorePatterns: ['<rootDir>/src/pages/_document.jsx']
}

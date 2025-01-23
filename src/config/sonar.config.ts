import { config } from 'dotenv';

config(); // Load environment variables from .env file

export const sonarConfig = {
  projectKey: process.env.SONAR_PROJECT_KEY || 'default-project-key',
  projectName: process.env.SONAR_PROJECT_NAME || 'default-project-name',
  projectVersion: process.env.SONAR_PROJECT_VERSION || '1.0',
  sourceEncoding: process.env.SONAR_SOURCE_ENCODING || 'UTF-8',
  sources: process.env.SONAR_SOURCES || 'src',
  exclusions: process.env.SONAR_EXCLUSIONS || '**/*.spec.ts,**/node_modules/**',
  tests: process.env.SONAR_TESTS || 'src',
  testInclusions: process.env.SONAR_TEST_INCLUSIONS || '**/*.spec.ts',
  javascriptLcovReportPaths:
    process.env.SONAR_JS_LCOV_REPORT_PATH || 'coverage/lcov.info',
  typescriptLcovReportPaths:
    process.env.SONAR_TS_LCOV_REPORT_PATH || 'coverage/lcov.info',
  hostUrl: process.env.SONAR_HOST_URL || 'http://localhost:9000',
  login: process.env.SONAR_LOGIN || '',
};

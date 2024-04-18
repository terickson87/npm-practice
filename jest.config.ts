// jest.config.ts
import type {Config} from 'jest';


const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/build/']
};

export default config;
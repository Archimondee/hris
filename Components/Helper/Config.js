//This file like .env

import {Constants} from 'expo';
import {Platform} from 'react-native';

const url = 'http://192.168.0.6:8080/hris_api/v1';

const ENV = {
  dev: {
    apiUrl: url,
    versi:0,
    //link: "Testing"
  },
  staging: {
    apiUrl: url,
    versi:0,
    //apiUrl: "[your.staging.api.here]",
    //amplitudeApiKey: "[Enter your key here]",
    // Add other keys you want here
  },
  prod: {
    apiUrl: url,
    versi:0,
    //apiUrl: "[your.production.api.here]",
    //amplitudeApiKey: "[Enter your key here]",
    // Add other keys you want here
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else {
    return ENV.prod;
  }
};

export default getEnvVars;

let baseURL;
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'https://development-wuge.com/api';
    break;
  case 'test':
    baseURL = 'https://test-wuge.com/api';
    break;
  case 'production':
    baseURL = 'https://production-wuge.com/api';
    break;
  default:
    baseURL = 'https://production-wuge.com/api';
    break;
}

export default {
  baseURL
}
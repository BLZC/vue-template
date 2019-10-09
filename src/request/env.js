let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = '/dev';
}
if (process.env.NODE_ENV === 'production') {
  baseUrl = '/api';
}
export default baseUrl;

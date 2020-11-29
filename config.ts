export const hostName = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:8080/'
  : 'https://tracker-fcc.herokuapp.com/';
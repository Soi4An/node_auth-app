// export const corsOptions = {
const corsOptions = {
  origin: 'http://localhost:3000',
  // origin: 'http://allowed-domain.com',
  
  methods: 'GET,POST,PATCH',
  // allowedHeaders: 'Content-Type,Authorization',
  // methods: ['get', 'patch', 'put', 'post', 'delete', 'options'],
  // allowedheaders: ['content-type', 'authorization', 'x-requested-with'],

  // is allowed to include user credentials
  // (cookies, HTTP authorization, and TLS certificates)
  credentials: true,
};

module.exports = { corsOptions };

const AuthenticationHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'authentications',
  version: '1.0.0',
  register: async (server, {
    authenticationsService, userService, tokenManager, validator,
  }) => {
    const authenticatiosHandler = new AuthenticationHandler(
      authenticationsService,
      userService,
      tokenManager,
      validator,
    );
    server.route(routes(authenticatiosHandler));
  },
};

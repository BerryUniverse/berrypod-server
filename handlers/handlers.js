module.exports = {

  // Generic handlers
  getServerState: (req, res) => {
    return res('The server is up and running');
  },

  notYetImplemented: (req, res) => {
    return res('Not yet implemented, but thanks for trying!');
  },

  // Login
  login: (req, res) => {
    
  },

  // Profile
  getProfile: (req, res) => {
    return res({
      userid: 1,
      username: 'Anonymous',
      firstname: 'Dread Pirate',
      lastname: 'Roberts'
    })
  }
};

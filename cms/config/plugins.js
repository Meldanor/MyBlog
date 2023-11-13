module.exports = {
  'public-permissions': {
    enabled: true,
    config: {
      verbose: true,
      actions: {
        post: ['find', 'findOne']
      }
    }
  }
};

const imageManipulation = require('strapi-plugin-responsive-image/server/services/image-manipulation');

module.exports = (plugin) => {
  plugin.services['image-manipulation'] = imageManipulation;

  return plugin;
};

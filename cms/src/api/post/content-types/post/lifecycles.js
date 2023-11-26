module.exports = {
  afterUpdate(event) {
    // Only rebuild the blog when the update params changes the publishing field
    if (Object.hasOwn(event.params.data, 'publishedAt')) {
      console.log('Triggering blog rebuild..');
      triggerBlogBuild();
    }
  }
};

async function triggerBlogBuild() {
  const url = process.env.GITHUB_WEBHOOK_URL;
  const token = process.env.GITHUB_WEBHOOK_TOKEN;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      event_type: 'webhook'
    }),
    headers: {
      Authorization: `Token ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    }
  });
}

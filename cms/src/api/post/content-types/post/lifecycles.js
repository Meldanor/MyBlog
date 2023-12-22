module.exports = {
  afterUpdate(event) {
    // Only rebuild the blog when the update params changes the publishing field
    if (Object.hasOwn(event.params.data, 'publishedAt')) {
      triggerBlogBuild();
    }
  }
};

async function triggerBlogBuild() {
  const url = process.env.GITHUB_WEBHOOK_URL;
  const token = process.env.GITHUB_WEBHOOK_TOKEN;

  if (!url || !token) {
    return;
  }
  console.log('Triggering blog rebuild..');
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

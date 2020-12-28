import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
// (replace <api url> and <content key> with your own credentials
const api = new GhostContentAPI({
  url: '<api url>',
  key: '<content key>',
  version: 'v3',
})

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err)
    })
}

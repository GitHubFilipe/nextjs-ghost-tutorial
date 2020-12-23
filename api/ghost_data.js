import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://megaghost.spdns.org',
  key: '5d04055ea1a604d18fcece4e9b',
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

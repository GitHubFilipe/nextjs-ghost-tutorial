import { getTags, getSingleTag, getPostsByTag } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function TagPage(tagData) {
  let _title = tagData.tag.name + ' - My blog'
  return (
    <Layout _title={_title}>
      <div className="my-10">
        <h2 className="py-1 mx-2 my-8  text-indigo-900 text-xl">
          Posts tagged with{' '}
          <span className="font-bold">{tagData.tag.name}</span>
        </h2>
        <ul>
          {tagData.posts.map((post) => (
            <li>
              <div className="cursor-pointer py-4 bg-gray-100 hover:bg-gray-200 m-2 rounded-md border-gray-200 border-2">
                <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                  <div className="mx-10">
                    <h3 className="font-medium text-indigo-900">
                      {post.title}
                    </h3>

                    {/* TODO refactor START */}
                    <p className="text-gray-600 text-xs">
                      {new Intl.DateTimeFormat('default', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      }).format(new Date(post.published_at))}
                    </p>
                    {/* TODO refactor END */}
                    <p className="italic text-gray-700 text-xs">
                      (reading time: {post.reading_time} min.)
                    </p>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const tags = await getTags()
  const paths = tags.map((tag) => ({
    params: { slug: tag.slug },
  }))
  return { paths, fallback: false }
}

// Pass the tag slug over to the "getSingleTag" function
// and retrieve all associated posts

export async function getStaticProps({ params }) {
  const _tag = await getSingleTag(params.slug)
  let _posts = (await getPostsByTag(params.slug)).sort((a, b) => {
    return a.published_at > b.published_at ? -1 : 1
  })
  return { props: { tag: _tag, posts: _posts } }
}

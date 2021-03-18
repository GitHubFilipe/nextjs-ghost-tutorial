import { getTags, getSingleTag, getPostsByTag } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function TagPage(tagData) {
  let _title = tagData.meta_title + ' - YOUR BLOG TILE'
  let facebook_handle = 'YOUR FACEBOOK HANDLE'
  let twitter_handle = '@YOUR TWITTER HANDLE'
  let metaObject = {
    n_title: _title,
    n_description: tagData.tag.meta_description,
    n_HandheldFriendly: 'True',
    n_canonical_url: '',
    p_og_site_name: 'YOUR BLOG TITLE',
    p_og_type: 'website',
    p_og_description: tagData.tag.meta_description,
    p_og_image: tagData.tag.feature_image,
    p_article_published_time: '',
    p_article_modified_time: '',
    p_article_tag: '',
    p_article_publisher: 'https://www.facebook.com/' + facebook_handle,
    n_twitter_card: 'summary_large_image',
    n_twitter_title: _title,
    n_twitter_description: tagData.tag.meta_description,
    n_twitter_image: tagData.tag.feature_image,
    n_twitter_label1: 'Written by',
    n_twitter_data1: 'YOUR NAME',
    n_twitter_label2: 'Filed under',
    n_twitter_data2: '',
    n_twitter_site: twitter_handle,
    n_twitter_creator: twitter_handle,
    n_generator: 'Filipe Matos next.js + Ghost CMS',
  }
  return (
    <Layout _metaData={metaObject}>
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

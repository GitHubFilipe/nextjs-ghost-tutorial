import { getPosts, getSinglePost } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'

// PostPage page component
export default function PostPage({ post }) {
  // Render post title and content in the page from props
  let _title = post.meta_title + ' - YOUR BLOG TILE'
  let facebook_handle = 'YOUR FACEBOOK HANDLE'
  let twitter_handle = '@YOUR TWITTER HANDLE'
  let metaObject = {
    n_title: _title,
    n_description: post.meta_description,
    n_HandheldFriendly: 'True',
    n_canonical_url: post.canonical_url,
    p_og_site_name: 'YOUR BLOG TITLE',
    p_og_type: 'article',
    p_og_description: post.meta_description,
    p_og_image: post.feature_image,
    p_article_published_time: post.published_at, // TODO: format date!
    p_article_modified_time: post.updated_at, // TODO: format date!
    p_article_tag: '', // TODO: object with tags
    p_article_publisher: 'https://www.facebook.com/' + facebook_handle,
    n_twitter_card: 'summary_large_image',
    n_twitter_title: _title,
    n_twitter_description: post.meta_description,
    n_twitter_image: post.feature_image,
    n_twitter_label1: 'Written by',
    n_twitter_data1: 'YOUR NAME',
    n_twitter_label2: 'Filed under',
    n_twitter_data2: '', // TODO: object with tags
    n_twitter_site: twitter_handle,
    n_twitter_creator: twitter_handle,
    n_generator: 'Filipe Matos next.js + Ghost CMS',
  }
  return (
    <Layout _metaData={metaObject}>
      <div className="blogInnerHTML">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {/* <Link href="/Home" as={'/'}>
        <a>-- go to homepage --</a>
      </Link> */}
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug)
  return { props: { post: post } }
}

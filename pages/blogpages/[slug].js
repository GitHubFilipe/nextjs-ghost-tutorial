import { getPages, getSinglePage } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'

// PostPage page component
export default function PostPage({ page }) {
  // Render post title and content in the page from props
  let _title = page.meta_title + ' - YOUR BLOG TILE'
  let facebook_handle = 'YOUR FACEBOOK HANDLE'
  let twitter_handle = '@YOUR TWITTER HANDLE'
  let metaObject = {
    n_title: _title,
    n_description: page.meta_description,
    n_HandheldFriendly: 'True',
    n_canonical_url: page.canonical_url,
    p_og_site_name: 'YOUR BLOG TITLE',
    p_og_type: 'website',
    p_og_description: page.meta_description,
    p_og_image: page.feature_image,
    p_article_published_time: page.published_at, // TODO: format date!
    p_article_modified_time: page.updated_at, // TODO: format date!
    p_article_tag: '', // TODO: object with tags
    p_article_publisher: 'https://www.facebook.com/' + facebook_handle,
    n_twitter_card: 'summary_large_image',
    n_twitter_title: _title,
    n_twitter_description: page.meta_description,
    n_twitter_image: page.feature_image,
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
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const pages = await getPages()
  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const page = await getSinglePage(params.slug)
  return { props: { page: page } }
}

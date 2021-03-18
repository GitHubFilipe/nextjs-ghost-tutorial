import PostPreviewCard from '../components/postpreviewcard'
import styles from '../styles/Home.module.css'
import { getPosts } from '../api/ghost_data'
import Layout from '../components/layout'

export default function Home({ posts }) {
  let facebook_handle = 'YOUR FACEBOOK HANDLE'
  let twitter_handle = '@YOUR TWITTER HANDLE'
  let title = 'YOUR BLOG TITLE'
  let description = 'A NICE DESCRIPTION FOR YOUR BLOG'
  let metaObject = {
    n_title: title,
    n_description: description,
    n_HandheldFriendly: 'True',
    n_canonical_url: 'THE URL OF YOUR HOMEPAGE',
    p_og_site_name: 'YOUR BLOG TITLE',
    p_og_type: 'website',
    p_og_description: description,
    p_og_image: '/images/profilepic.jpg', // TODO: Website picture
    p_article_published_time: '', // TODO: Today + format date!
    p_article_modified_time: '', // TODO: Today + format date!
    p_article_tag: 'Personal Blog',
    p_article_publisher: 'YOUR NAME',
    n_twitter_card: 'summary_large_image',
    n_twitter_title: title,
    n_twitter_description: description,
    n_twitter_image: '/images/profilepic.jpg', // TODO: Website picture
    n_twitter_label1: 'Written by',
    n_twitter_data1: 'YOUR NAME',
    n_twitter_label2: 'Filed under',
    n_twitter_data2: 'SOME LABELS OF YOUR CHOICE',
    n_twitter_site: twitter_handle,
    n_twitter_creator: twitter_handle,
    n_generator: 'Filipe Matos next.js + Ghost CMS',
  }
  return (
    <Layout home _metaData={metaObject}>
      <ul>
        {posts.map((post) => (
          <li>
            <PostPreviewCard blogpost={post} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  posts.map((post) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }

    post.dateFormatted = new Intl.DateTimeFormat('default', options).format(
      new Date(post.published_at),
    )
  })
  return {
    props: {
      posts,
    },
  }
}

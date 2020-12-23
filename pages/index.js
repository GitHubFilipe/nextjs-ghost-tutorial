import PostPreviewCard from '../components/postpreviewcard'
import styles from '../styles/Home.module.css'
import { getPosts } from '../api/ghost_data'
import Layout from '../components/layout'

export default function Home({ posts }) {
  return (
    <Layout home _title="My Ghost Blog">
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

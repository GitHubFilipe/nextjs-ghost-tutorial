import { getPosts, getSinglePost } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'

// PostPage page component
export default function PostPage({ post }) {
  // Render post title and content in the page from props
  let _title = post.title + ' - My blog'
  return (
    <Layout _title={_title}>
      <div className="blogInnerHTML">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link href="/Home" as={'/'}>
        <a>-- go to homepage --</a>
      </Link>
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

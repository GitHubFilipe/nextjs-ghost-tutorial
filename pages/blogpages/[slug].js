import { getPages, getSinglePage } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'

// PostPage page component
export default function PostPage({ page }) {
  // Render post title and content in the page from props
  let _title = page.title + ' - My blog'
  return (
    <Layout _title={_title}>
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

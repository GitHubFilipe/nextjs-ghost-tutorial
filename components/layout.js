import Header from './header'
import Footer from './footer'
import Head from 'next/head'
import GithubBanner from './githubbanner'

export default function Layout({ home, _metaData, children }) {
  return (
    <div className="top-40 absolute min-w-full">
      <GithubBanner /> // Delete this line to remove banner at the top
      <Header home={home} />
      <Head>
        <title>{_metaData.n_title}</title>
        <meta property="og:title" content={_metaData.n_title} key="title" />
        <meta name="description" content={_metaData.n_description} />
        <meta name="HandheldFriendly" content={_metaData.n_HandheldFriendly} />
        <meta property="og:site_name" content={_metaData.p_og_site_name} />
        <meta property="og:type" content={_metaData.p_og_type} />
        <meta property="og:description" content={_metaData.p_og_description} />
        <meta property="og:image" content={_metaData.p_og_image} />
        <link rel="canonical" href={_metaData.n_canonical_url} />
        <meta
          property="article:published_time"
          content={_metaData.p_article_published_time}
        />
        <meta
          property="article:modified_time"
          content={_metaData.p_article_modified_time}
        />
        <meta
          property="article:article_tag"
          content={_metaData.p_article_tag}
        />
        <meta
          property="article:publisher"
          content={_metaData.p_article_publisher}
        />
        <meta name="twitter:card" content={_metaData.n_twitter_card} />
        <meta name="twitter:title" content={_metaData.n_twitter_title} />
        <meta
          name="twitter:description"
          content={_metaData.n_twitter_description}
        />
        <meta name="twitter:image" content={_metaData.n_twitter_image} />
        <meta name="twitter:label1" content={_metaData.n_twitter_label1} />
        <meta name="twitter:data1" content={_metaData.n_twitter_data1} />
        <meta name="twitter:label2" content={_metaData.n_twitter_label2} />
        <meta name="twitter:data2" content={_metaData.n_twitter_data2} />
        <meta name="twitter:site" content={_metaData.n_twitter_site} />
        <meta name="twitter:creator" content={_metaData.n_twitter_creator} />
        <meta name="generator" content={_metaData.n_generator} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <div
            id="content"
            className="container p-6 max-w-screen-lg mt-6 mx-auto"
          >
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

import Header from './header'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ home, _title, children }) {
  return (
    <div className="top-40 absolute min-w-full">
      <Header home={home} />
      <Head>
        <title>{_title}</title>
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

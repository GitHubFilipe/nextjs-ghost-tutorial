import Header from './header'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ home, _title, children }) {
  return (
    <>
      <Header home={home} />
      <Head>
        <title>{_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-48">
        <main className="w-5/6">
          <div
            id="content"
            className="container items-center max-w-screen-lg justify-center mt-12 w-11/12 mx-auto"
          >
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

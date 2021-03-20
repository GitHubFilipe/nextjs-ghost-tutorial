import Link from 'next/link'

export default function Header({ home }) {
  return (
    <nav className="bg-gray-800 p-2 fixed z-10 top-10 w-full">
      <div className="container mx-auto flex flex-col flex-wrap items-center">
        <div>
          {home ? (
            <img
              className="rounded-full w-32 border-white border-4 border-solid"
              src="/profilepic.jpg"
              alt="My pic"
            />
          ) : (
            <Link href="/Home" as={'/'}>
              <a>
                <img
                  className="rounded-full w-32 border-white border-4 border-solid"
                  src="/profilepic.jpg"
                  alt="My pic"
                />
              </a>
            </Link>
          )}
        </div>
        <div>
          <h1 className="font-sans text-3xl font-semibold text-center text-white my-2">
            My Blog
          </h1>
          <div className="flex mb-2">
            <div>
              <Link href="/tags/tagoverview" as="/tags/tagoverview">
                <a className="text-white px-8 truncate">Tags</a>
              </Link>
            </div>

            <div>
              <Link href="/blogpages/[slug]" as="/blogpages/about">
                <a className="text-white px-8 truncate">About me</a>
              </Link>
            </div>

            <div>
              <Link href="/blogpages/[slug]" as="/blogpages/legal">
                <a className="text-white px-8 truncate">Legal</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

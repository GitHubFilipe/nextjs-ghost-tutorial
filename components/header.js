import Link from 'next/link'

export default function Header({ home }) {
  return (
    <nav className="bg-gray-800 p-2 fixed z-10 top-0 w-full">
      <div className="container mx-auto flex flex-col flex-wrap items-center">
        <div>
          {home ? (
            <img
              className="rounded-full w-32 border-white border-4 border-solid"
              src="/profilepic.jpg"
              alt="Filipe"
            />
          ) : (
            <Link href="/Home" as={'/'}>
              <a>
                <img
                  className="rounded-full w-32 border-white border-4 border-solid"
                  src="/profilepic.jpg"
                  alt="Filipe"
                />
              </a>
            </Link>
          )}
        </div>
        <div>
          <h1 className="font-sans text-3xl font-semibold text-center text-white">
            Filipe Matos
          </h1>
          <div>
            <Link href="/tags/tagoverview" as="/tags/tagoverview">
              <a className="text-white p-10">Tags</a>
            </Link>

            <Link href="/blogpages/[slug]" as="/blogpages/about">
              <a className="text-white p-10">About me</a>
            </Link>

            <Link href="/blogpages/[slug]" as="/blogpages/legal">
              <a className="text-white p-10">Legal</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

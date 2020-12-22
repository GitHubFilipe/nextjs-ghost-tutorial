import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 w-full">
      <div className="flex w-full py-4">
        <div className="flex w-1/2 px-5">
          <Link href="/blogpages/[slug]" as="/blogpages/copyright">
            <a className="text-white">Copyright</a>
          </Link>
        </div>
        <div className="flex w-1/2 justify-end">
          <div className="px-5">
            <a
              href="https://twitter.com/_Filipe_Matos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter.png" alt="Twitter" className="text-white" />
            </a>
          </div>
          <div className="px-5">
            <a
              href="https://www.instagram.com/fmaiamatos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
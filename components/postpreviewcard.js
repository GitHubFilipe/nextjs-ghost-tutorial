import Link from 'next/link'

export default function BlogPreviewCard({ blogpost }) {
  return (
    <div className="grid">
      <div className="grid place-self-center w-3/4 grid-cols-1 md:grid-cols-2 mb-24">
        <div className="flex justify-start md:justify-center">
          <Link href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>
            <img
              className="m-4 rounded-lg sm:w-64 md:w-72 sm:max-w-sm"
              src={blogpost.feature_image}
            />
          </Link>
        </div>
        <div className="flex md:pt-4">
          <div className="ml-5">
            <p className="text-gray-500 text-sm">
              {blogpost.tags.map((tag) => (
                <Link href="/tags/[slug]" as={`/tags/${tag.slug}`}>
                  <a>{tag.name}</a>
                </Link>
              ))}
            </p>
            <p>{blogpost.dateFormatted}</p>
            <hr />
            <Link href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>
              <a>
                <h1 className="text-2xl font-bold text-indigo-900">
                  {blogpost.title}
                </h1>
              </a>
            </Link>
            <div
              className="excerpt py-2"
              dangerouslySetInnerHTML={{ __html: blogpost.excerpt }}
            />
            <Link href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>
              <a className="text-indigo-900">...read more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GithubBanner() {
  return (
    <div className="w-full mx-auto p-2 fixed z-10 top-0 h-10 bg-yellow-300 text-sm text-center">
      The source code for this page is
      <a
        className="underline"
        href="https://github.com/GitHubFilipe/nextjs-ghost-tutorial"
      >
        {' '}
        available on Github
      </a>
    </div>
  )
}

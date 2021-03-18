// File: /scripts/generate-sitemap-postbuild.js

const fs = require('fs')
const path = require('path')

function isPageFile(filename) {
  return path.extname(filename) === '.html' && !filename.endsWith('404.html')
}

function getPageFiles(folders, files = []) {
  folders.map((folder) => {
    const entries = fs.readdirSync(folder, { withFileTypes: true })
    entries.forEach((entry) => {
      const absolutePath = path.resolve(folder, entry.name)
      if (entry.isDirectory()) {
        getPageFiles(absolutePath, files)
      } else if (isPageFile(absolutePath)) {
        files.push(absolutePath)
      }
    })
  })
  return files
}

function buildSiteMap(websiteUrl, outDirectory, pageFiles) {
  const urls = pageFiles.map((file) => {
    let f = file.split('/')
    let folder = file.split('/')[f.length - 2]
    return websiteUrl + '/' + folder + '/' + path.parse(file).name
  }) // Hack: add index.html manually (adding it in the "folders" array isn't working)
  urls.push(websiteUrl + '/')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 

${urls
  .map(
    (url) => ` 
    <url> 
      <loc>${url}</loc> 
    </url> 
    `,
  )
  .join('')}</urlset> 
`

  // write to the output static folder
  fs.writeFileSync(path.join(outDirectory, 'sitemap.xml'), sitemap)
}

function main() {
  const websiteUrl = 'https://YOUR_URL_HERE '
  const baseDirectory = './.next/server/pages'
  const outDirectory = './out/'
  const folders = [
    baseDirectory + '/blogpages',
    baseDirectory + '/posts',
    baseDirectory + '/tags',
  ]

  const pageFiles = getPageFiles(folders)
  buildSiteMap(websiteUrl, outDirectory, pageFiles)
}

main()

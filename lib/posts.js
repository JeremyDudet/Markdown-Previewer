import fs from 'fs'
import path from 'path'

const markdownDirectory = path.join(process.cwd(), 'markdown')

export async function getPostData() {
  const fullPath = path.join(markdownDirectory, `default.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

 
  return fileContents
}
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {useState} from 'react'
import parse from 'html-react-parser'
import marked from 'marked'
import { getPostData } from '../lib/posts'


export async function getStaticProps() {
  const defaultInput = await getPostData()
  return {
    props: {
      defaultInput
    }
  }
}

export default function Home({defaultInput}) {

  const [markdown, setMarkdown] = useState(defaultInput)

  function handleSetMarkdown(markdown) {
    setMarkdown(markdown)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Markdown Previewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
      <img src="/markdownPreviewerTitle.jpeg" alt="page title" className={styles.title} />

        <p className={styles.description}>
          Get started by editing 
          <code className={styles.code}>'your'.md</code>
          file on the left
        </p>
      </header>

      <main className={styles.editorPreviewWrapper}>
        <textarea 
          value={markdown}
          className={styles.editor}
          onChange={(event)=>handleSetMarkdown(event.target.value)}></textarea>
        <div 
          className={styles.preview}
        >
          {parse(marked(markdown))}
        </div>

      </main>
    

      <footer className={styles.footer}>
        <a
          href="https://github.com/JeremyDudet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="Github Logo" className={styles.logo} />
          <img src="/signature.png" alt="Developer's Signature" className={styles.signature} />
        </a>
      </footer>
    </div>
  )
}

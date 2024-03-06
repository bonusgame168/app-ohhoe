import ReactMarkdown from 'react-markdown'

import classes from './Markdown.module.css'

export interface Markdown {
  content: string
}

const Markdown: React.FC<Markdown> = ({ content }) => {
  return <ReactMarkdown className={classes.markdownContent}>{content}</ReactMarkdown>
}

export default Markdown

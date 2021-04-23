import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const CodeBlockRenderer = ({ language, value }) => (
    <SyntaxHighlighter showLineNumbers={true} language={language} style={vs2015}>
        {value}
    </SyntaxHighlighter>
)

export const ImageRenderer = ({ src, alt = '', caption = '' }) => (
    <img src={src} alt={alt} />
)
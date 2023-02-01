import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ code, language }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={gradientDark}
      showLineNumbers={language !== "sh"}
      customStyle={{
        marginTop: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
      wrapLongLines
      className="code-scrollbar"
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

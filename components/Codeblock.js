import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaRegCopy } from "react-icons/fa";

const CodeBlock = ({ code, language, filename }) => {
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    setTimeout(() => setCopySuccess(""), 2000);
  }, [copySuccess]);

  const CodeButton = () => {
    function copyToClipboard() {
      const tempInput = document.createElement("input");
      tempInput.value = code;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setCopySuccess(true);
    }
    return (
      <button
        data-splitbee-event={`Code copied at: ${filename ?? code}`}
        className="text-gray-700 rounded focus:ring-2 ring-primary
              bg-gray-300 p-1 focus:outline-none"
        onClick={() => copyToClipboard()}
        aria-label="Copy code"
      >
        <FaRegCopy />
      </button>
    );
  };

  return (
    <div
      className="not-prose rounded border 
      border-primary bg-primary
      text-sm lg:text-md mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none"
    >
      <div className="relative p-2 md:p-3 lg:p-4">
        {filename && (
          <div className=" bg-primary text-white font-bold mx-auto p-2 flex flex-row justify-between items-center">
            {" "}
            {filename}
          </div>
        )}
        <SyntaxHighlighter
          wrapLongLines
          language={language}
          style={gradientDark}
        >
          {code}
        </SyntaxHighlighter>

        <div className="absolute right-0 bottom-0 mr-1 mb-1 block rounded-full border-2 border-primary bg-white px-1 py-1 text-center font-body text-sm font-bold uppercase text-primary md:text-base cursor-pointer hover:bg-primary hover:border-white hover:text-white">
          {copySuccess ? (
            <span className="text-green-600 mr-1 self-center">
              <FaRegCopy size={18} />
            </span>
          ) : (
            <CodeButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;

import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export const ExtensionCode = ({title, children}) => (
  <div>
    <CodeBlock
      language="js"
      showLineNumbers
      title={(
        <div>
          {`${title}.js`}
          {' - '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://turbowarp.org/editor?extension=${location.origin}/example-extensions/${title}.js`}
          >
            {'Try this extension'}
          </a>
        </div>
      )}
    >
      {children.default}
    </CodeBlock>
  </div>
);

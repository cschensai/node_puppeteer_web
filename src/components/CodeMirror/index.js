import React from 'react';
import CodeMirror from 'codemirror-react';

function CodeMirrorComp(props) {
  const { value } = props;
  return (
    <CodeMirror
      value={value}
      mode="javascript"
      theme="duotone-light"
      tabSize={2}
      lineNumbers={true}
    />
  )
}
export default CodeMirrorComp;

const ExampleChoice = () => {
  return (
    <div className="ExampleChoice">
      <pre>
        <div className="cm-editor ͼ1 ͼ2 ͼ4">
          {/* <div aria-live="polite"></div> */}
          <div tabindex="-1" className="cm-scroller">
            <div spellcheck="false" autocorrect="off" autocapitalize="off" translate="no" contenteditable="true" className="cm-content" role="textbox" aria-multiline="true" data-language="css">
              <div className="cm-line">
                <span className="cm-tag">inset</span>: 5% 0<span className="ͼ8">;</span>
              </div>
            </div>
            <div className="cm-layer cm-layer-above cm-cursorLayer" aria-hidden="true">
              <div className="cm-cursor cm-cursor-primary"></div>
            </div>
            <div className="cm-layer cm-selectionLayer" aria-hidden="true"></div>
          </div>
        </div>
      </pre>
      <button type="button" className="copy hidden" aria-hidden="true" aria-label="Copy to clipboard">
        <span className="visually-hidden">Copy to Clipboard</span>
      </button>
      <button type="button" className="example-choice-button">
        <span className="visually-hidden">Choose example 2</span>
      </button>
    </div>
  );
};
export default ExampleChoice;

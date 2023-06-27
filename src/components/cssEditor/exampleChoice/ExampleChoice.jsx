const ExampleChoice = () => {
  return (
    <div className="ExampleChoice">
      <pre>
        <div class="cm-editor ͼ1 ͼ2 ͼ4">
          <div aria-live="polite"></div>
          <div tabindex="-1" class="cm-scroller">
            <div spellcheck="false" autocorrect="off" autocapitalize="off" translate="no" contenteditable="true" class="cm-content" role="textbox" aria-multiline="true" data-language="css">
              <div class="cm-line">
                <span class="cm-tag">inset</span>: 5% 0<span class="ͼ8">;</span>
              </div>
            </div>
            <div class="cm-layer cm-layer-above cm-cursorLayer" aria-hidden="true">
              <div class="cm-cursor cm-cursor-primary"></div>
            </div>
            <div class="cm-layer cm-selectionLayer" aria-hidden="true"></div>
          </div>
        </div>
      </pre>
      <button type="button" class="copy hidden" aria-hidden="true" aria-label="Copy to clipboard">
        <span class="visually-hidden">Copy to Clipboard</span>
      </button>
      <button type="button" class="example-choice-button">
        <span class="visually-hidden">Choose example 2</span>
      </button>
    </div>
  );
};
export default ExampleChoice;

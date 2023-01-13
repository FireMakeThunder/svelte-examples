/**
 * Will cause font size to diminish if the container is overflowing on the x axis
 * @param node Container that might overflow
 * @param valueThatChanges Set this to the value that changes
 */
export function shrink(node: HTMLElement, valueThatChanges: string) {
  const initialFontSize = parseInt(
    getComputedStyle(node).fontSize.replace("px", "")
  );
  const initialLineHeight = parseInt(
    getComputedStyle(node).lineHeight.replace("px", "")
  );

  console.log({ initialLineHeight, initialFontSize });
  let currentFontSize = initialFontSize;
  let currentLineHeight = initialLineHeight;

  function update() {
    node.style.fontSize = `${(currentFontSize = initialFontSize)}px`;
    node.style.lineHeight = `${(currentLineHeight = initialLineHeight)}px`;

    while (node.scrollLeft != 0 || node.scrollWidth > node.offsetWidth) {
      node.style.fontSize = `${--currentFontSize}px`;
      node.style.lineHeight = `${--currentLineHeight}px`;
    }
    node.style.fontSize = `${currentFontSize - 0.5}px`;
    node.style.lineHeight = `${currentLineHeight - 0.5}px`;
  }

  node.style.overflowX = "auto";
  node.style.overflowY = "hidden";
  update();

  return { update };
}
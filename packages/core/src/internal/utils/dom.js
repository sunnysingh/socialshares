export function isDomNode(element) {
  return typeof element === 'object' && element.nodeType === 1;
}

export function invariant(condition, message = '') {
  if (condition) return;
  throw new Error(`socialshares: ${message}`);
}

export function normalizeProps(props) {
  const { children, ...otherProps } = props;
  return { label: children, ...otherProps };
}

export function objectToQueryParams(object) {
  const queryParams = Object.entries(object)
    .filter(([, value]) => Boolean(value))
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    );

  if (queryParams.length === 0) return '';

  return `?${queryParams.join('&')}`;
}

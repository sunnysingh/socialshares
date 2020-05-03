export function createConfig(defaults, options) {
  const clonedOptions = { ...options };

  // Remove undefined values to prevent unwanted overrides
  Object.keys(clonedOptions).forEach((key) => {
    if (typeof clonedOptions[key] === 'undefined') {
      delete clonedOptions[key];
    }
  });

  return { ...defaults, ...clonedOptions };
}

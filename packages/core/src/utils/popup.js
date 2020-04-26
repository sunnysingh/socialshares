export function openPopup(url) {
  const width = 680;
  const height = 450;
  const top = window.screen.height / 2 - height / 2;
  const left = window.screen.width / 2 - width / 2;

  window.open(
    url,
    'Share',
    `width=${width},height=${height},top=${top},left=${left},menubar=no,toolbar=no,resizable=yes,scrollbars=yes`
  );
}

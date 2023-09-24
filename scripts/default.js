const mdToHTML = (elInnerHTML) => {
  const marked = window.marked;
  const innerHTML = elInnerHTML
    .split('\n')
    // .filter(v => v.trim() != '')
    .map(v => v)
    .join('\n');
  const html = marked.parse(innerHTML);
  return html
}

const mdToHTML = (elInnerHTML) => {
  const marked = window.marked;
  const innerHTML = elInnerHTML
    .split('\n')
    // .filter(v => v.trim() != '')
    .map(v => v)
    .join('\n')

  const html = marked.parse(
    innerHTML
  ).replace(
    /\<table\>/g,
    "<table class=\"table\">",
  )

  console.log("html", html)
  return html
}

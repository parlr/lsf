export { highlight };

function highlight(content, query) {
  if (query.trim().length === 0) return content;

  var search = new RegExp(query, 'ig');
  return content
    .toString()
    .replace(search, match => `<span class="highlight">${match}</span>`);
}

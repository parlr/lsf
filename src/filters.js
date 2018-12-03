export { highlight, regExpEscape };

function highlight(content, query) {
  if (query.trim().length === 0) return content;

  var search = new RegExp(regExpEscape(query), 'ig');
  return content
    .toString()
    .replace(search, match => `<span class="highlight">${match}</span>`);
}

// see: https://stackoverflow.com/a/3561711/802365
function regExpEscape(string) {
  console.log('escape', string);
  return String(string).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

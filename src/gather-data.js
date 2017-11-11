/**
 1. Visit http://lsf.education.fr/
 2. run below script in a Firefox console
 3. copy `vocabulaire` content to clipboard:
  1. Right-click the object and select _Store as global variable_
  2. type in the console:

      copy(vocabulaire)

*/
function gatherWords() {
  let mots = document.querySelectorAll('.words');
  const lsf = [];

  mots.forEach(item => {
    let mot = item.textContent;
    let key = clean(mot);

    lsf.push({
      key,
      label: mot,
      video: `http://lsf.education.fr/videos/${key}.flv`
    });
  });
  return lsf;
}

function clean(mot) {
  return mot
    .toLowerCase()
    .replace(/\s/, '_')
    .replace(/[\(\)]/g, '')
    .replace(/[éèê]/, 'e')
    .replace(/[àâ]/, 'a')
    .replace(/[ô]/, 'o')
    .replace(/[îï]/, 'i');
}

var vocabulaire = gatherWords();

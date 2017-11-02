/**
 1. run in a Firefox console
 2. copy `vocabulaire` content to clipboard:
  1. Right-click the object and select _Store as global variable_
  2. type in the console:

      copy(vocabulaire)

*/
function gatherWords() {
  let mots = document.querySelectorAll('.words');
  const lsf = {};

  mots.forEach(item => {
    let mot = item.textContent;
    let cle = clean(mot);

    lsf[cle] = {
      label: mot,
      video: `http://lsf.education.fr/videos/${cle}.flv`
    };
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

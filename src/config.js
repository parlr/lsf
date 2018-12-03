const config = {
  cdn: 'https://parlr.github.io/lsf/',
  dataset: () => {
    let dataurl = `${config.cdn}/vocabulaire.json`;
    if (process.env.NODE_ENV === 'dev') {
      dataurl = `./vocabulaire.json`;
    }

    return dataurl;
  }
};

module.exports = config; // so we can self-reference

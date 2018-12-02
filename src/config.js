const config = {
  cdn: 'https://raw.githubusercontent.com/parlr/lsf-data/master',
  dataset: () => {
    let dataurl = '/vocabulaire.json';
    if (process.env.NODE_ENV === 'production') {
      dataurl = `${config.cdn}/vocabulaire.json`;
    }
    dataurl = `./vocabulaire.json`;

    return dataurl;
  }
};

module.exports = config; // so we can self-reference

export default {
  dataset: function () {
    let dataurl = '/dist/vocabulaire.json'
    if (process.env.NODE_ENV === "production") {
      dataurl = "https://raw.githubusercontent.com/parlr/lsf-data/master/src/assets/vocabulaire.json"
    }
    return dataurl
  }
};

export default {
  dataset: function () {
    let dataurl = "/vocabulaire.json";
    if (process.env.NODE_ENV === "production") {
      dataurl = "https://raw.githubusercontent.com/parlr/lsf-data/master/vocabulaire.json"
    }
    return dataurl
  }
};

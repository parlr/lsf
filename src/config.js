export default {
  cdn: "https://raw.githubusercontent.com/parlr/lsf-data/master",
  dataset: function() {
    let dataurl = "/vocabulaire.json";
    if (process.env.NODE_ENV === "production") {
      dataurl = `${cdn}/vocabulaire.json`;
    }
    return dataurl;
  }
};

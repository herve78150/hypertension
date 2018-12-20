function loadjson(fichier) {
  const url = `./data/${fichier}.json`;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(mydata => {
      // Work with JSON data here
      const $titre = document.getElementById("titre");
      $titre.innerHTML = `<h3>${fichier}</h3>`;
      const $table = document.getElementById("mesures");
      $table.innerHTML = buildTable(mydata);
      dataMod = mydata.map(obj => {
        const newObj = [
          obj["date"],
          parseInt(obj["sys(mmHg)"], 10),
          parseInt(obj["dia(mmHg)"], 10),
          135,
          90
        ];
        return newObj;
      });
      google.charts.load("current", { packages: ["corechart", "line"] });
      google.charts.setOnLoadCallback(drawChart);
    })
    .catch(err => {
      const $titre = document.getElementById("titre");
      $titre.innerHTML = `<h3>${fichier} introuvable</h3>`;
      const $table = document.getElementById("mesures");
      $table.innerHTML = '';
      const $graph = document.getElementById("graph");
      $graph.innerHTML = '';
    });
}
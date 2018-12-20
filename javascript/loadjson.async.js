async function loadjson(fichier) {
  const $titre = document.getElementById("titre");
  const $table = document.getElementById("mesures");
  const $graph = document.getElementById("graph");
  const url = `./data/${fichier}.json`;
  try{
    const response = await fetch(url);
    if (response.ok){
      const mydata = await response.json();
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
    }else{
      console.log(response.status);
      $titre.innerHTML = `<h3>${fichier}: error ${response.status}= ${response.statusText}</h3>`;
      $table.innerHTML = '';
      $graph.innerHTML = '';
    }
  }catch(err){
      $titre.innerHTML = `<h3>${err}</h3>`;
  }
}

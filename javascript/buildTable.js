const buildTable = (data) => {
  const dataMesures = data.map(obj => {
    const newObj = {
      date: obj["date"],
      heure: obj["heure"],
      sys: obj["sys(mmHg)"],
      dia: obj["dia(mmHg)"]
    };
    return newObj;
  });
  const entete =
    "<tr><th>Date</th><th>Heure</th><th>Sys</th><th>Dia</th></tr>";

  const corps = dataMesures.reduce((accu, mesures) => {
    accu =
      accu +
      "<tr>" +
      `<td>${mesures.date}</td>` +
      `<td>${mesures.heure}</td>` +
      `<td>${mesures.sys}</td>` +
      `<td>${mesures.dia}</td>` +
      "</tr>";
    return accu;
  }, "");

  const table = `<table>${entete}${corps}</table>`;

  return table;
};
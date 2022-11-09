function loadDocGame() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    TableGame(this);
  }
  xhttp.open("GET", "actividad.xml");
  xhttp.send();
}
function TableGame(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("game");
  let table="<tr><th>games</th><th>Industria</th><th>Estudio</th><th>Precio</th><th>Fecha</th></tr>";
  for (let i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("tittle")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("industry")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("study")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
    "</td>";
  }
  document.getElementById("demo").innerHTML = table;
}

function loadDocCard() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    TableCard(this);
  }
  xhttp.open("GET", "actividad2.xml");
  xhttp.send();
}
function TableCard(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("card");
  let table="<tr><th>Tarjeta</th><th>Industria</th><th>CPU</th><th>SSD</th><th>Precio</th><th>Fecha</th></tr>";
  for (let i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("tittle")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("industry")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("cpu")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ssd")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
    "</td>";
  }
  document.getElementById("demo").innerHTML = table;
  xhttp.close();
}


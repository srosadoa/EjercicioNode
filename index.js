//Importa el módulo para la manipulación de archivos
const fs = require('fs');
// Importa el módulo http para la creación del servidor
const http = require('http');
// Importa el módulo axios
const axios = require('axios');


function getDataProvedores() {
    axios.get('https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json')
        .then(p => {
            console.log(p)
        })
        .catch(e => console.error(e));
}
function getDataClientes() {
    axios.get('https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json')
        .then(p => {
            console.log(p)
        })
        .catch(e => console.error(e));
}
// Crea una nueva instancia del servidor
http
    .createServer(function (req, res) {

        console.log(getDataClientes());
        console.log(getDataProvedores());


        //Lee un archivo del sistema de archivos
        fs.readFile('index-test.html', 'utf8', (err, data) => {
            //const topSection = data.substring(0, data.indexOf('<table'))
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();

        });
    })
    .listen(8081); // Puerto que usará el servidor para escuchar las solicitudes


//Crea un archivo en el sistema de archivos
fs.writeFile('index-result.html', '<h1>Label</h1>', 'utf-8', (err) => {
    if (err) console.log('Error writing file');
});
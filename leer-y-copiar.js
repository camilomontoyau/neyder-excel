const XLSX = require('xlsx');
const wb = XLSX.readFile('./archivo-para-leer.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(ws, { header:1 });

// guarda un json con el nombre de la columna y su respectivo indice indice
const columnas = data[0].reduce((acc, nombreColumna, indice)=>({...acc, [nombreColumna]:indice}), {});

console.log(data[0])	
console.log(data[1])	
console.log({columnas});

const nuevaData = data.reduce((acc, fila)=>([
            ...acc,
            [
                fila[columnas['Cuenta']] ?? '', 
                fila[columnas['Referencia']] ?? '', 
                fila[columnas['Pagador']] ?? ''
            ], 
        ]), []);

// escribiendo

console.log('nuevaData[0]', nuevaData[0]);
console.log('nuevaData[1]', nuevaData[1]);

nuevaData[0] = ['mi titulo', 'neyder', 'murillo'];

let ws2 = XLSX.utils.json_to_sheet(nuevaData);
const wb2 = XLSX.utils.book_new();
ws2 = XLSX.utils.aoa_to_sheet([[2, 0]]);
XLSX.utils.book_append_sheet(wb2, ws2, "Sheet1");
XLSX.writeFile(wb2, "resultado.xlsx");


	
const XLSX = require('xlsx');
const wb = XLSX.readFile('./archivo-para-leer.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
console.log(
    {
        data: XLSX.utils.sheet_to_json(
            ws, 
            {
                header:1
            }
        )
    }
);

	
	

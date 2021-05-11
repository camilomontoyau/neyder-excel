const XLSX = require('xlsx');
    const n = 100;
    var aoo = [
        {"nombre a": 1, "nombre b": 2},
        {"nombre a": 21, "nombre b": 22},
        {"nombre a": 31, "nombre b": 32},
        {"nombre a": 41, "nombre b": 42},
        {"nombre a": 51, "nombre b": 52},
        {"otra": "xxxxxx"},
    ];
	var ws = XLSX.utils.json_to_sheet(aoo);
	var wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
	ws = XLSX.utils.aoa_to_sheet([[2, 0]]);
	XLSX.utils.sheet_set_array_formula(ws, "A1:B1", "LINEST(Sheet1!B2:B101,Sheet1!A2:A101)");
	XLSX.utils.book_append_sheet(wb, ws, "Sheet2");

	XLSX.writeFile(wb, "resultado.xlsx");
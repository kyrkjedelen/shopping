class Column {
    constructor(name, key, dataType, needValue) {
        this.name = name;
        this.key = key;
        this.dataType = dataType;
        this.needValue = needValue;
    }
}
const rowHasNeededColumn = (row, column) => {
    if(!row[column.name] && column.needValue) return false;
    return true;
}
const makeInsertIntoSqlCode = (table, columns, row) => {
    let sqlCode = `INSERT INTO ${table} (`;
    let lastInputColumnName = "";
    for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        if(!rowHasNeededColumn(row, column)) throw console.error(`You need to have a value in ${column.name}`);
        if(row[column.name]) {
            if(row[lastInputColumnName]) {
                sqlCode += ", ";
            }
            sqlCode += column.name;
            lastInputColumnName = column.name;
        }
    }
    sqlCode += ') VALUES (';
    const rowColumns = Object.keys(row);
    for (let i = 0; i < rowColumns.length; i++) {
        const rowIndex = rowColumns[i];
        sqlCode += row[rowIndex];
        if(i < rowColumns.length-1) {
            sqlCode += ", ";
        }
    }
    sqlCode += ")";
    return sqlCode;
}
// const proeving = async () => {
//     const kropp = new Sql('*');
//     console.log(JSON.stringify(kropp));
//     const svar = await fetch('/api', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(kropp)
//     });
//     const svarJson = await svar.json();
//     console.log(svarJson);
// }
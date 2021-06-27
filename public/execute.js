// const testSql = makeInsertIntoSqlCode('turer', turerColumns, testRows[0]);
// console.log(testSql);

const testForm = document.querySelector('#testForm');
const testInput = new Input('test', 'test', 'Test', 'text', '', '', true, true);

testForm.appendChild(testInput.makeInput());
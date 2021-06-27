const turerColumns = [
    new Column('id', 'primary', 'int', false),
    new Column('dato', null, 'date', false),
    new Column('Butikk', 'foreign', 'int', true),
    new Column('startTid', null, 'time', false),
    new Column('sluttTid', null, 'time', false)
];


var listStudents = ['nardella', 'monti', 'buttafoco', 'vitola', 'marinuzzi', 'desiderio', 'gavardi', 'repetto', 'barbulia', 'quarta', 'galàn', 'carbonare', 'santo', 'casineanu', 'mecchia', 'ferrauto', 'pollone', 'castillon', 'borsci', 'vavassori', 'mititelu', 'maruca', 'bumbello', 'scocco', 'catena', 'deliso', 'ferrari', 'beralso', 'minotti', 'casiraghi', 'mastrella', 'tafuri', 'matranga', 'battaglia'];
console.log(listStudents.length);
var listOrdered = listStudents.sort();
console.log(listOrdered);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var numeroEstratto = randomNumber(0, listOrdered.length);
console.log(numeroEstratto);
console.log(listOrdered[numeroEstratto]);

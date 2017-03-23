let rooms = [
  {
      'id': 'copy-room',
      'estatus': 'false'
  },
  {
    'id':'lobby',
    'estatus': 'false'
  },
  {
    'id':'main-office',
    'estatus': 'false'
  }
];

function setE(id){
  rooms.forEach((room) => {
    if(room.id === id){
      room.estatus = 'true';
      return;
    }
  });
}

function returnRooms(callback){
  let fn = typeof callback === 'function' ? callback : new Function(callback);
  fn(rooms);
}

module.exports = {
  'setE': setE,
  'returnRooms': returnRooms
}

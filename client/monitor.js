let currentRoomsArray = [];

//let currentRooms = //get array here

$(document).ready(() => {
  $('.alert').css('display', 'none');
  $('#yoyo').click(() => {
    $.get("http://127.0.0.1:8080/fire", (data) => {
      data = new Array(data);
      currentRoomsArray = data[0];
      currentRoomsArray.forEach((room) => {
        //room = JSON.parse(room);
        console.log(room);
        if(room.estatus){
          display(room.id);
        }
        else{
          hide(room.id);
        }
      });
    });
  });
});

function display(roomID){
  roomID = '#' + roomID;
  $(roomID).show();
}

function hide(roomID){
  roomID = '#' + roomID;
  $(roomID).hide();
}

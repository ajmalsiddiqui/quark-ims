let currentRoomsArray = [];

//let currentRooms = //get array here

function poster() {
  $.ajax({
                url: "http://localhost:8080/notify",
                type: "post",
                data: {"room":"lobby", "estatus":true},
                datatype: "json",
                success: function(d) {
                    alert(d);
                }
            });
}

$(document).ready(() => {
  $('.alert').css('display', 'none');
  $.get("http://quark-ims.herokuapp.com/fire", (data) => {
    data = new Array(data);
    currentRoomsArray = data[0];
    currentRoomsArray.forEach((room) => {
      //room = JSON.parse(room);
      console.log(room);
      if(room.estatus === 'true'){
        display(room.id);
      }
      else{
        hide(room.id);
      }
    });
  });
  //poster();
});

function display(roomID){
  roomID = '#' + roomID;
  $(roomID).show(500);
}

function hide(roomID){
  roomID = '#' + roomID;
  $(roomID).hide(500);
}

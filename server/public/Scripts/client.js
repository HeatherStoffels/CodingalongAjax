$(document).ready(onReady);

function onReady() {
  console.log("In Ready");
  getTestData();
  
  $("#addPerson").on('click', addPerson);

}
function addPerson(){
$.ajax({
    type: "POST",
    url: "/tester",
    data: { //will become req.body
        name: "Heather", 
    }
}).then(function(response){
    console.log(response);
    getTestData();
}).catch(function(error){
    alert(err);
})
}


function getTestData() {
  console.log("In getTestData");
  //ajax get call to /tester
  $.ajax({
    type: "GET",
    url: "/tester",
  }).then(function (response) {
      console.log("back form the server with:", response);

      //append to dom
      appendToDom(response);
    }).catch(function (err) {
      alert("problem");
      console.log(err);
    });
}
function appendToDom (listOfPeople){
    // target ul, add each person to dom
    $("#personList").empty();
    for (let person of listOfPeople){
    $("#personList").append(`<li>${person}</li>`)
}
}
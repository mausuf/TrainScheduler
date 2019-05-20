// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->
  
// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBJkA8g_cwEUfSw19b-S25ZoSbXSBpdb5c",
  authDomain: "trainscheduler-555.firebaseapp.com",
  databaseURL: "https://trainscheduler-555.firebaseio.com",
  projectId: "trainscheduler-555",
  storageBucket: "",
  messagingSenderId: "1060335798625"
};
firebase.initializeApp(config);

var trainData = firebase.database();

$("#addTrainBtn").on("click",function(){
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
  var frequency = $("#frequencyInput").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain, 
    frequency: frequency
  }

  trainData.ref().push(newTrain);

  alert("Train Added to Schedule!");

  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#firstTrainInput").val("");
  $("#frequencyInput").val("");

  console.log(firstTrain);
  return false;

})

trainData.ref().on("child_added",function(snapshot){
  var name = snapshot.val().name;
  var destination = snapshot.val().destination;
  var frequency = snapshot.val().frequency;
  var firstTrain = snapshot.val().firstTrain;

  var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
  var minutes = frequency - remainder;
  var arrival = moment().add(minutes,"m").format("hh:mm A");

  console.log(remainder);
  console.log(minutes);
  console.log(arrival);
  console.log(name);
  console.log(destination);

  $("#trainTable > tBody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");

});
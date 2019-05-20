// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->
  
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5UqWswE4zYQ9sQTehaW1GC9l0zZWLUng",
    authDomain: "traintimetablescheduler.firebaseapp.com",
    databaseURL: "https://traintimetablescheduler.firebaseio.com",
    projectId: "traintimetablescheduler",
    storageBucket: "traintimetablescheduler.appspot.com",
    messagingSenderId: "662671356543",
    appId: "1:662671356543:web:233e20187cc54c6a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var trainData = firebase.database();

$("#addTrainBtn").on("click",function(){
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
  var frequency = $("#frequencyInput").val().trim();

  console.log(firstTrain);
  return false;

})
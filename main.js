var firebaseConfig = {
    apiKey: "AIzaSyC_Clo6iB2eu6WbppSLNqSWiDFFU9hEJvo",
    authDomain: "apspr-1d7c3.firebaseapp.com",
    databaseURL: "https://apspr-1d7c3.firebaseio.com",
    projectId: "apspr-1d7c3",
    storageBucket: "apspr-1d7c3.appspot.com",
    messagingSenderId: "714934662916",
    appId: "1:714934662916:web:f8722b7664b2c8e47bc251",
    measurementId: "G-LQMZD2MCZM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

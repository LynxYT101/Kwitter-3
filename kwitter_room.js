
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEGJSzLXVjd7JxBYe84iFssUifDKIvd90",
  authDomain: "kwitter-f6b0d.firebaseapp.com",
  databaseURL: "https://kwitter-f6b0d-default-rtdb.firebaseio.com",
  projectId: "kwitter-f6b0d",
  storageBucket: "kwitter-f6b0d.appspot.com",
  messagingSenderId: "314558724967",
  appId: "1:314558724967:web:35014e9a9013f6d7c0cdc2",
  measurementId: "G-D6C0SZTBK5"
};


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome!  " + user_name;


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names" + Room_names);

      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
      
      document.getElementById("output").innerHTML =+ row;
      //End code
      });});}
getData();

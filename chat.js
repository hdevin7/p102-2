// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyCX-qXZ_SIqzyV7MrfsFLBwpVDiPPLR3_E",
    authDomain: "lets-chat-303be.firebaseapp.com",
    projectId: "lets-chat-303be",
    storageBucket: "lets-chat-303be.appspot.com",
    messagingSenderId: "404584829647",
    appId: "1:404584829647:web:38d047e10209224a71ddba",
    measurementId: "G-6R88JK4GY7"
  };
  

// Initialize Firebase
firebase.initializeApp(Config);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}




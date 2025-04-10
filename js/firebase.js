import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCuSnA1qdcz1gUtzxzl-xOjvdK83W_vurg",
    authDomain: "anotherpgdrug.firebaseapp.com",
    projectId: "anotherpgdrug",
    storageBucket: "anotherpgdrug.firebasestorage.app",
    messagingSenderId: "728385597814",
    appId: "1:728385597814:web:826229035cd31210c28a57"
};

const app = initializeApp(firebaseConfig);

console.log(app)

// let db = app.database()

// db.ref('data').once('value', function(snapshot) {
//     var data = snapshot.val();
//     console.log(data.name);
//     console.log(data.age);
//   });
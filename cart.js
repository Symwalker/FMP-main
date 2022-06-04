var firebaseConfig = {
    apiKey: "AIzaSyCbEQ6-mdgI4adk1YzKw-ZlY1ovSE8UUgE",
    authDomain: "contactform-2a2e4.firebaseapp.com",
    databaseURL: "https://contactform-2a2e4-default-rtdb.firebaseio.com",
    projectId: "contactform-2a2e4",
    storageBucket: "contactform-2a2e4.appspot.com",
    messagingSenderId: "886227387058",
    appId: "1:886227387058:web:15e480f7b8830d6fddffab"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
         
    var db = firebase.database().ref('mesg/')

    function add(){
        var name = document.getElementById('name').value
        var email = document.getElementById('e-mail').value
        var numb = document.getElementById('mynum').value
        var text = document.getElementById('txt').value
        var key = db.push().key

       db.child(key).set({
           name : name,
           email : email,
           number : numb,
           text : text,
           key : key
       })
       
    
    }


    function num(){
        var num= document.getElementById('mynum').value
        if(num.length<11){
           alert("enter your correct number")
        }
        else if(num.length>11){
           alert("enter your correct number")
        }
       //  console.log(num);
    }

function email(){
  var emails = document.getElementById('e-mail')
  var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
  if(!(emails.matches(regex))){
     alert("Invalid email address")
     return false;
  }
}
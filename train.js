console.log("THIS GOES HERE")


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBx4LgbvgO9ailu7tkeKzhsOYNfulm8LEY",
    authDomain: "train911-46889.firebaseapp.com",
    databaseURL: "https://train911-46889.firebaseio.com",
    projectId: "train911-46889",
    storageBucket: "train911-46889.appspot.com",
    messagingSenderId: "265947025820",
    appId: "1:265947025820:web:d4aa7ec98a99643b7e7859"
};
firebase.initializeApp(firebaseConfig);

function sendTrainData() {

    // validate that the inputs are not 
    // empty 

    firebase.database().ref().push().set({ 
        // the start of connecting to database. database instance. push() add new info instead of replacing the info
        name                : document.getElementById('formGroupExampleInput').value,
        destination         : document.getElementById('formGroupExampleInput2').value,
        first_train_time    : document.getElementById('formGroupExampleInput3').value,
        frequency           : document.getElementById('formGroupExampleInput4').value,
    })  // an object. this creates the database reference for certain key. object is put inside of set
}

function getTrainData(){

}

window.onload = function(){
    $('#btn').click( function(event){
        event.preventDefault()



    })
}






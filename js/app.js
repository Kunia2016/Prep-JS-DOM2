window.onload = function(){
  var myName = 'Jon';

  // function saySomeonesName(name, elementId){
  //   document.getElementById(elementId).innerHTML = name;
  // }

  // saySomeonesName(myName, 'myName');

  //THIS IS JUST AN EXAMPLE OF HOW TO CREATE ELEMENTS
  function generateDocument(){
    //1. document.createElement
    //2. element.appendChild

    var element = document.createElement('div');
    element.id = 'someId';
    document.body.appendChild(element);
    //<div id='someId'>TEST</div>

    var newElement = document.createElement('span');
    newElement.id = 'someOtherId';
    document.getElementById('someId').appendChild(newElement);
  }

  generateDocument();
};

function myAwesomeWebApp (){
var myName = Jason;
var yourName = Joe;
var neighborName = Victor;
document.createElement(myAwesomeWebApp);


}




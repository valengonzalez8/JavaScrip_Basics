//--------IIFE--------
//anonymous function that only needs to be called once, immediately after its creation

(function (){
    var abc = "ABC";
    console.log(abc);
})();

console.log(abc); //ReferenceError: abc is not defined

//Passing parameters to an IIFE
var external_variable = "ABC"
(function (internal_variable){
    console.log(internal_variable);
})(external_variable);


//We can also name the function and call it later -- not an IIFE
function ABC (){
    var abc = "ABC";
    console.log(abc);
}

ABC();
console.log(abc); //ReferenceError


//-------Module Pattern-------
//uses IIFE

var myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    return {
      publicMethod: function() {
        _privateMethod();
      }
    };
  })();
  
  myModule.publicMethod(); // outputs 'Hello World'
  console.log(myModule._privateProperty); // is undefined protected by the module closure
  myModule._privateMethod(); // is TypeError protected by the module closure

//-------Module Revealing Pattern------
//also uses IIFE
var myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
    var publicProperty = 'I am a public property';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    function publicMethod() {
      _privateMethod();
    }
  
    return {
      publicMethod: publicMethod,
      publicProperty: publicProperty
    };
  })();
  
  myModule.publicMethod(); // outputs 'Hello World'
  console.log(myModule.publicProperty); // outputs 'I am a public property'
  console.log(myModule._privateProperty); // is undefined protected by the module closure
  myModule._privateMethod(); // is TypeError protected by the module closure
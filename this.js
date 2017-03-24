"use strict";
var z = 10;
var obj = {};
function aa(func){
    console.log("this",this);//obj
    console.log("this.z1",this.z);//zz
    var z = 20;
    foo();

    function foo(){
        console.log("this",this);//obj
        console.log("this.z2",this.z);//zz
        console.log("z",z);//20
    }
}
obj.z = "zz";
obj.func = aa;
obj.func();
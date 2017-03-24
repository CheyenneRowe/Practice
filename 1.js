//undefined一般是索引不对，取到了边界值

/****************************Version3.0 顺序落子，二维数组存储*************************/
/************************************************************************/
var count = 0;//点击次数，判断是先手还是后手
var a = document.getElementsByTagName("a");

//将得到的a元素的nodelist对象存入一个二维数组
var arr = [];
var n = 0;
for(var i = 0;i < 3;i++){
	arr[i] = [];
	for(var j = 0;j < 3;j++){
		arr[i][j] = a[n];
		n++;
	}
}

//双方轮流落子
for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {
		arr[i][j].onclick = (function(indexi,indexj){
			return function(){//将函数体封装起来，否则随着外层立即执行函数执行在点击之前已经执行结束了
				if(!arr[indexi][indexj].innerHTML){             
					count++;
					if (count % 2 === 1) { 
						arr[indexi][indexj].innerHTML = "0";
					} else {
						arr[indexi][indexj].innerHTML = "1";
					}
				}

				//三个回合及以后每次落子后都判断是否有人胜出
				if(count>=5){
					// alert("111");

					if(winOrNot(indexi,indexj)){
						if(count % 2 === 1)
							alert("0 Win!");
						if(count % 2 === 0)
							alert("1 Win!");
						wipeAll();
						return;
					}
					else if(!winOrNot(indexi,indexj) && count==9){
						alert("tie");
						wipeAll();
					}
				}

			};
		})(i,j);
	}
}

function winOrNot(indexi,indexj){
	// alert("222");
	var flag = false;
	if(arr[indexi][0].innerHTML === arr[indexi][1].innerHTML && arr[indexi][1].innerHTML === arr[indexi][2].innerHTML && arr[indexi][0].innerHTML)
		flag = true;
	if(arr[0][indexj].innerHTML === arr[1][indexj].innerHTML && arr[1][indexj].innerHTML === arr[2][indexj].innerHTML && arr[0][indexj].innerHTML)
		flag = true;
	if(arr[0][0].innerHTML === arr[1][1].innerHTML && arr[1][1].innerHTML === arr[2][2].innerHTML && arr[0][0].innerHTML)
		flag = true;
	if(arr[0][2].innerHTML === arr[1][1].innerHTML && arr[1][1].innerHTML === arr[2][0].innerHTML && arr[0][2].innerHTML)
		flag = true;
	return flag;
}


function wipeAll(){
	for(let i = 0;i<3;i++){
		for(let j = 0;j<3;j++){
			arr[i][j].innerText = "";
		}
	}
}

/************************************************************************/
/************************************************************************/



/****************************Version2.0 顺序落子*************************/
/************************************************************************/
// var count = 0;//点击次数，判断是先手还是后手
// var a = document.getElementsByTagName("a");
// for (var i = 0; i < 9; i++) {
//  if(a[i].innerHTML===""){
//      a[i].onclick = (function(index){
//          return function(){//将函数体封装起来，否则随着外层立即执行函数执行在点击之前已经执行结束了
//              count++;
//              if(a[index].innerText!=="")
//                  return;
//              if (count % 2 === 1) { 
//                  a[index].innerHTML = "0";
//              } else {
//                  a[index].innerHTML = "1";
//              }

//              //每次点击后都判断是否有人胜出
//              // winOrNot(index);
//          };
//      })(i);
//  }
// }
/************************************************************************/
/************************************************************************/






//var a = document.getElementsByTagName("a");
// for (var i = 0; i < 9; i++) {
//  if(a[i].innerHTML===""){
//      a[i].onclick = (function(index){
//          return function(){
//              if (index % 2 === 0 && a[index].innerText==="") { 
//                  // a[index].firstChild.nodeValue = "0";//a标签无内容，子节点为null，null没有nodevalue
//                  a[index].innerHTML = "0";
//              } else {
//                  a[index].innerText = (a[index].innerText==="")?"1":a[index].innerText;
//                  // var txtnode = document.createTextNode("1");
//                  // a[index].appendChild(txtnode);
//              }
//          };
//      })(i);
//  }
// }






//========================================================================
// function AA(){
//  var result=[];
//  for (var i = 0; i <= 9; i++) {
//      result[i]=function(){
//          return i;
//      };
//  }
//  return result;
// }

// var arr = AA();
// alert(arr[0]());
// alert(arr[9]());

// function AA(){
//  var result=[];
//  for (var i = 0; i <= 9; i++) {
//      result[i]=(function(num){
//          return num;
//      })(i);
//  }
//  return result;
// }

// var arr = AA();
// console.log(arr.join());




// var arr = [];
// var index = 1;
// for (var i = 0; i < 3; i++) {
//  arr[i] = [];
//  for (var j = 0; j < 3; j++) {
//      arr[i][j] = index;
//      index++;
//  }
// }


	// var a = document.getElementsByTagName("a");
	// var funny = function(i) {
	//  a[i].onclick = function() {
	//      alert("第" + (i + 1) + "个");
	//  };
	// };
	// for (var i = 0; i < a.length; i++) {
	//  funny(i);
	// }
	


	// var a = document.getElementsByTagName("a");
	// for (var i = 0; i < a.length; i++) {
	//  a[i].onclick = function() {
	//      alert("第" + (i + 1) + "个");
	//  };
	// }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*function test(a,b,c){
	    Array.from(arguments).forEach(function(v,i){
	        console.log(v);
	    })
	}
	test(1,2,3);


	if (1) {//封闭作用域
	    let tmp = '123';
	    function gettmp() {
	        let tmp = 'abc';
	        console.log(tmp);
	        return tmp;
	    }
	}

	const t = 1;  //===window.t =1
	console.log(t);
	let arr = [1, 2, 3, 4, 5];
	arr.forEach(
	    (v, i) =>{
	    console.log('索引：' + i);
	    console.log(Math.pow(v, 2));
	})*/

	//function  默认值
	//解构赋值

	/*var [a,b,c] = [10,,21];

	console.log(a);
	console.log(b);
	console.log(c);*/
	"use strict";

/***/ }
/******/ ]);
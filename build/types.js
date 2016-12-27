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

	'use strict';

	var _obj;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	//Symbol  ES6引入了一种新的原始数据类型Symbol，表示独一无二的值
	//对象的属性名现在可以有两种类型，一种是原来的字符串，另一种就是Symbol类型。

	var s = Symbol('a');
	var s3 = Symbol('a');

	var s2 = Symbol('b');
	var obj = (_obj = {}, _defineProperty(_obj, s2, 'bbb'), _defineProperty(_obj, s, 'sda'), _obj);
	obj[s] = 'aaaaa';
	console.log(obj);

	var arr = [11, 2, 3, 2, 3, 43, 21, 11];
	function unique(arr) {
	    var _arr = [];
	    arr.forEach(function (value, index) {
	        if (_arr.indexOf(value) == -1) {
	            _arr.push(value);
	        }
	    });

	    return _arr;
	}
	console.log(unique(arr));
	//新集合类型 Set  Map  原始集合类型Array  Object
	var __arr = new Set(arr);
	__arr.add(21);
	__arr.add(12);
	console.log(__arr + '长度是:' + __arr.size);
	//Map
	var o = { name: 123 };
	var m = new Map();
	var el = document.createElement('div');
	m.set(o, [1, 2, 3]);
	m.set(el, function () {
	    console.log("qweqwe");
	});
	console.log(m.get(el));
	var m2 = new Map([['name', 'lisa'], ['title', 12312]]);
	console.log(m2.has('sad'));

	/*
	* keys()：返回键名的遍历器。
	 values()：返回键值的遍历器。
	 entries()：返回所有成员的遍历器。
	 forEach()：遍历Map的所有成员。*/

/***/ }
/******/ ]);
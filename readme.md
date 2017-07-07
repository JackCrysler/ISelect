使用方式：
 
 
 1.//可以通过回调来获取选择项
 
new ISelect('.i-select',function (data) {

    console.log('您选择的信息是：'+data);
    
});

2.//可以通过事件监听来获取选择项

var el = document.querySelector('.i-select');

el.addEventListener('selected',function (e) {

    console.log('\n'+e.value);
    
},false);


*************************************


object  js的基本数据类型之一

new Object()  var obj = { key:value };

函数 function(函数声明 、构造函数)

new关键词来时实例化一个函数=>面向对象

 c++ java

var abc = function(){
    var obj = {

    }

    return obj;
}

abc();

new abc()

1.构造函数模式 2.工厂模式  3.原型模式  4.混合模式（构造函数+原型模式）

结合this对象（指针）来定义  （全局性）

绑定事件时 this=>绑定元素

定时器 this=> window



Class 类（es6）





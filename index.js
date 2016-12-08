import ISelect from './ISelect.es6';

new ISelect('.i-select',function (data) {
    console.log('您选择的信息是：'+data);
});


var el = document.querySelector('.i-select');
el.addEventListener('selected',function (e) {
    console.log(e.value);
},false);
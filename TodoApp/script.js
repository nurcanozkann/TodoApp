﻿var items = ['item 1', 'item 2', 'item 3', 'item 4'];

var list = document.querySelector('#myList');

//listing made event
items.forEach(function (item) {

    CreateItem(item);


});

list.addEventListener('click',function (item) {

    if (item.target.tagName == "LI") {
        item.target.classList.toggle('checked');
        ToogleDeleteButton();
    }

  
});

document.querySelector('#deleteAll').onclick = function () {
    var element = document.querySelectorAll('.checked');

    element.forEach(function (item) {
        item.style.display = 'none';
    });
}


function ToogleDeleteButton() {
    var checkList = document.querySelectorAll('.checked');

    if (checkList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    }
    else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}


//deleting made event (1)

//var close = document.querySelector('.close');

// close.forEach(function (item) {

//    close[item].addEventListener('click', function (item) {

//        var li = this.parentElement;
//        li.style.display = 'none';
//    });

//});

//deleting made event (2)

var close = document.getElementsByClassName('close');

for (var i = 0; i < close.length; i++) {

    close[i].onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
    }
}

//creating made event
document.querySelector('#btnCreate').onclick = function (item) {
    var item = document.querySelector('#txtItem').value;

    if (item === '') {
        alert("Lütfen bir değer giriniz.");
        return;
    }

    CreateItem(item);
};


function CreateItem(item) {

    //li adın da bir element oluşturuldu.
    var li = document.createElement('li');
    //li nin içerisine yazılacak item iceriği olusturuldu.
    var t = document.createTextNode(item);
    //li nin class ı verildi
    li.className = 'list-group-item';
    //t yi linin içine attık 
    li.appendChild(t);
    //li yi listin içine attık 
    list.appendChild(li);


    //span elementi olusturuldu 
    var span = document.createElement('span');
    //spanın icine yazılacak x texti olusturuldu.
    var text = document.createTextNode('x');

    //spanın classı verildi
    span.className = 'close';
    //x yazısı spanın icine atıldı
    span.appendChild(text);
    //span li nin icine atıldı 
    li.appendChild(span);

    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }
    
}
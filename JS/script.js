var region = document.querySelector('.reg');
var category = document.querySelector('.category');
var france = document.querySelector('#france');
var France = document.querySelector('.fr');
var side1 = document.querySelectorAll('li');
var dataList = document.querySelector('#data-list');
var inactiveList = document.querySelector('#Inactive-data-list');
var inactiveShowLists = document.querySelector('.inactive-show');
var activeList = document.querySelector('#Active-data-list');
var activeShowLists = document.querySelector('.active-show');
var dataGrid = document.querySelector('#data-grid');
var dataCustom = document.querySelector('#data-custom');
var List = document.querySelector('#list-view');
var Custom = document.querySelector('#custom-view');
var Grid = document.querySelector('#grid-view');
var nRow = dataList.getElementsByTagName('tr').length;
var NRow = inactiveList.getElementsByTagName('tr').length;
var display1 = document.querySelector('#content');
var display2 = document.querySelector('#content2');
var next = document.querySelector('.enter');
var back = document.querySelector('.back');
var sidePanel = document.querySelector('#sidebar');
var data = document.querySelector('#Data');
var details= document.querySelector('.detail-data');
var detail= document.querySelector('.details-data');
//InnerHTML
var mailsList = document.querySelector('#list-View');
var listTime = document.querySelector('#list-time');
var inactiveTime = document.querySelector('#inactive-list-time');
var inactiveShow = document.querySelector('#inactive-list-View');
var activeTime = document.querySelector('#active-list-time');
var activeShow = document.querySelector('#active-list-View');
var time1= document.querySelector('.time');
var time2= document.querySelector('.time2');
//Views 
var list = document.querySelector('#List');
//Indicators
var Active = document.querySelector('#active-list-show');
var Inactive = document.querySelector('#inactive-list-show');
//Variables
var reg = 1;
var fr = 1;
var row;
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var setTime=today.getHours() + ":" + today.getMinutes();
time1.innerHTML=setTime;
time2.innerHTML=setTime;
//Default Properties
display2.style.display = "none";
// EFII to mark all Inactive Indicators
(function checkList() {
    for (let i = 0; i < nRow; i++)
        if (dataList.rows[i].cells[5].innerHTML == "?")
            dataList.rows[i].cells[5].style.backgroundColor = "Red";
    for (let i = 0; i < nRow; i++)
        if (dataList.rows[i].cells[6].innerHTML == "?")
            dataList.rows[i].cells[6].style.backgroundColor = "Red";

})();
// EFII to mark all Inactive Indicators in Inactive list
(function checkList2() {
    for (let i = 0; i < NRow; i++)
        if (inactiveList.rows[i].cells[5].innerHTML == "?")
            inactiveList.rows[i].cells[5].style.backgroundColor = "Red";
    for (let i = 0; i < NRow; i++)
        if (inactiveList.rows[i].cells[6].innerHTML == "?")
            inactiveList.rows[i].cells[6].style.backgroundColor = "Red";

})();
//Get Row Index
function getRow(x) {
    row = x.rowIndex;
    mailsList.style.fontWeight = "bold";
    mailsList.innerHTML = dataList.rows[row].cells[2].innerHTML;
    details.innerHTML=dataList.rows[row].cells[2].innerHTML;
    detail.innerHTML=dataList.rows[row].cells[2].innerHTML;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    listTime.style.fontWeight = "bold";
    listTime.innerHTML = time;
};
function getRowInactive(x) {
    row = x.rowIndex;
    inactiveShow.style.fontWeight = "bold";
    inactiveShow.innerHTML = inactiveList.rows[row].cells[2].innerHTML;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    inactiveTime.style.fontWeight = "bold";
    inactiveTime.innerHTML = time;
};
function getRowActive(x) {
    row = x.rowIndex;
    activeShow.style.fontWeight = "bold";
    activeShow.innerHTML = activeList.rows[row].cells[2].innerHTML;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    activeTime.style.fontWeight = "bold";
    activeTime.innerHTML = time;
};
//Sidebar hider
back.addEventListener("click", function () {
    sidePanel.style.width = "0vw";
    sidePanel.style.display = "none";
    data.style.width = "100vw";
});
inactiveShowLists.addEventListener("click", function () {
    Inactive.style.display = "block";
    Active.style.display = "none";
    display1.style.display = "none";
    display2.style.display = "flex";
    list.style.display = "none";
});
activeShowLists.addEventListener("click", function () {
    Inactive.style.display = "none";
    Active.style.display = "block";
    display1.style.display = "none";
    display2.style.display = "flex";
    list.style.display = "none";
});
// Jump to data display
next.addEventListener("click", function () {
    display1.style.display = "none";
    display2.style.display = "flex";
    Inactive.style.display = "none";
    Active.style.display = "none";
    list.style.display = "block";
});
category.addEventListener('click', function () {
    if (reg == 0) {
        reg = 1;
        region.style.display = "none";
    }
    else {
        reg = 0;
        region.style.display = "block";
    }
});
france.addEventListener('click', function () {
    if (fr == 0) {
        fr = 1;
        France.style.display = "none";
    }
    else {
        fr = 0;
        France.style.display = "block";
    }
});
List.addEventListener('click', function () {
    list.style.display = "block";
    dataGrid.style.display = "none";
    dataCustom.style.display = "none";
    Inactive.style.display = "none";
    Active.style.display = "none";
    List.style.border = "2px solid red";
    Grid.style.border = "none";
    Custom.style.border = "none";
});
Grid.addEventListener('click', function () {
    list.style.display = "none";
    dataGrid.style.display = "flex";
    dataCustom.style.display = "none";
    List.style.border = "none";
    Grid.style.border = "2px solid red";
    Custom.style.border = "none";
    Inactive.style.display = "none";
    Active.style.display = "none";
});
Custom.addEventListener('click', function () {
    list.style.display = "none";
    dataGrid.style.display = "none";
    dataCustom.style.display = "block";
    List.style.border = "none";
    Grid.style.border = "none";
    Custom.style.border = "2px solid red";
    Inactive.style.display = "none";
    Active.style.display = "none";
});
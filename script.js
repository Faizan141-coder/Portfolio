var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove('active-link')
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}     

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

function addStudent() { 
    var day=document.sample.day.value; 
    var time=document.sample.time.value; 
    var subject=document.sample.subject.value; 
    
    var tr = document.createElement('tr');
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));        
    
    td1.innerHTML=day;
    td2.innerHTML=time;
    td3.innerHTML=subject;
    td4.innerHTML='<input class="del" type="button" name="del" value="Delete" onclick="delStudent(this);">'

    document.getElementById("timetable").appendChild(tr);
}

function delStudent(Stud){
    var s=Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}
    

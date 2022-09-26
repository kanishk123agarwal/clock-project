
function clock(){
    var hours=document.getElementById('hours');
    var min=document.getElementById('mins');
    var sec=document.getElementById('second');
    var session = document.getElementById('AM');

    // create an object
    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();
    var d="AM";

    // convert the railway time to clock time
    if(a==0){
       a=12;
    }
    if(a>12){
        a=a-12;
        d="PM";
    }

    // print the value
    hours.innerHTML=a;
    min.innerHTML=b;
    sec.innerHTML=c;
    session.innerHTML=d;
}


setInterval(clock,1000);


function MakeDiv(){
    var container= document.createElement('div');
    container.className="grid-item";
    container.id="dynamic-block";

    // now access the left container in which we append
    document.getElementById('grid-container').appendChild(container);
    var i=document.getElementById('wakeTimeSelector');
    var value1 = i.options[i.selectedIndex].text;
    document.getElementById('dynamic-block').innerHTML="Wake up time" + " :- " + value1 + "<br>";
    // console.log(" ");

    // for second
    var j=document.getElementById('lunchTimeSelector');
    var value2=j.options[j.selectedIndex].text;
    document.getElementById('dynamic-block').innerHTML += "Lunch time" + " :- " + value2 + "<br>";

    // for third
    var k=document.getElementById('napTimeSelector');
    var value3=k.options[k.selectedIndex].text;
    document.getElementById('dynamic-block').innerHTML += " Nap time" + " :- " + value3;
}


function setTime(){
    var i = document.getElementById('wakeTimeSelector').value;
    var j=document.getElementById('lunchTimeSelector').value;
    var k=document.getElementById('napTimeSelector').value;
    var hour = new Date().getHours();

    if(i==hour){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assets/morning_time.png)";
        document.getElementById('text-container').innerHTML="Hope this is one of the best Mornings Ever.";
    }

    if(j==hour){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assets/lunch_img.png)";
        document.getElementById('text-container').innerHTML="Lunchtime can bring together like-minded people and form lifelong bonds.";
    }
    
    if(k==hour){
        document.getElementById('lunchbottom').style.backgroundImage="url(./assets/night_time.png)";
        document.getElementById('text-container').innerHTML="A beautiful sleep is the greatest gift you can ask for.";
    }

    MakeDiv();

}
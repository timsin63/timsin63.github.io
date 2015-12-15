/**
 * Created by tim on 06.12.2015.
 */

window.onload = function(){

    if (localStorage.getItem("name") == null) {
        var name = prompt("Enter your name");
        localStorage.setItem("name", name);
        document.getElementById('hi').innerHTML = '<h1>Hi,' +  localStorage.getItem("name") + ', let\'s start</h1>';
    }
    else {
        document.getElementById('hi').innerHTML = '<h1>Hi, ' + localStorage.getItem("name") + ', prodolghim. FUCKING TRANSLIT</h1>';
    }


    if (localStorage.getItem("index") == null){
        var i = 0;
        localStorage.setItem("index", i);
    }


    var lessonname = new Array();
    lessonname[0] = "Lesson 0: Vvodnoe zanyatie. Protokoli i servera";
    lessonname[1] = "Lesson 1: Bezopasnost v veb";
    lessonname[2] = "Lesson 2: HTML";
    lessonname[3] = "Lesson 3: CSS";
    lessonname[4] = "Lesson 4: Osnovi verstki";
    lessonname[5] = "Lesson 5: Verstka s maketa";
    lessonname[6] = "Lesson 6: JavaScript";
    lessonname[7] = "Lesson 7: JS. Pravila horoshego tona";
    lessonname[8] = "Lesson 8: JS: DOM & Post, Get";
    lessonname[9] = "Lesson 9: Ajax";
    lessonname[10] = "Lesson 10: LocalStorage and more";

    //обнул€лка на вс€кий случай
    //localStorage.clear();

    var videos = new Array();
    videos[0] = "https://www.youtube.com/embed/shggxCMp8NQ";
    videos[1] = "https://www.youtube.com/embed/LNnSUULfu7M";
    videos[2] = "https://www.youtube.com/embed/qNd7aq59w-o";
    videos[3] = "https://www.youtube.com/embed/AbXX102HXms";
    videos[4] = "https://www.youtube.com/embed/4Bnk0A98D28";
    videos[5] = "https://www.youtube.com/embed/Bc_mCjo1uSc";
    videos[6] = "https://www.youtube.com/embed/RSAj4lOZQAs";
    videos[7] = "https://www.youtube.com/embed/h0iaWwvRmRA";
    videos[8] = "https://www.youtube.com/embed/7Ua0mAVoVpQ";
    videos[9] = "https://www.youtube.com/embed/WDcVWxAYG8M";
    videos[10] = "https://www.youtube.com/embed/RD-gKih0eKY";

    if (videos.length > localStorage.getItem("index")) {
        document.getElementById('name').innerHTML = '<h1>' + lessonname[localStorage.getItem("index")] + '</h1>';
        document.getElementById('vidos').innerHTML = '<iframe width="560" height="315" src="' + videos[localStorage.getItem("index")] + '" frameborder="0" allowfullscreen></iframe>';

    }
    else {
        document.getElementById('vidos').innerHTML = '<h1>∆дите новых уроков</h1>';
        document.getElementById('hi').innerHTML = '<h1>ѕривет, ' + localStorage.getItem("name") + ', к сожалению, на данный момент уроков больше нет';
    }

    document.getElementById('butup').onclick = function(i){
        var i = localStorage.getItem("index");
        i++;
        localStorage.setItem("index", i);
        location.reload();
    }

    document.getElementById('butback').onclick = function(i){
        var i = localStorage.getItem("index");
        i--;
        localStorage.setItem("index", i);
        location.reload();
    }

}
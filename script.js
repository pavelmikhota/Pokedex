var n = 0;
function NewLoad(){
    request = new XMLHttpRequest();
    adr = 'http://pokeapi.co/api/v1/pokemon/?limit=9&offset='+n;
    request.open("GET", adr, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
        parse = JSON.parse(request.responseText);

        for(var i = 0; i<9; i++){
            document.getElementsByClassName('block')[i].style.border = "1px solid black";
            document.getElementsByClassName('block')[i].style.backgroundColor = "#DDDDDD";
            document.getElementsByClassName('name')[i].innerHTML= parse.objects[i].name;
            document.getElementsByClassName('id')[i].innerHTML = ' '+'#'+parse.objects[i].pkdx_id;
            document.getElementsByClassName('id')[i].style.border = "1px solid black";
            document.getElementsByClassName('id')[i].style.backgroundColor = "white";
            document.getElementsByClassName('img')[i].innerHTML = '<center><img src="http://pokeapi.co/media/img/'+parse.objects[i].pkdx_id+'.png"></center>';
            document.getElementsByClassName('img')[i].style.backgroundColor = "white";
            document.getElementsByClassName('img')[i].style.border = "1px solid black";

            if(parse.objects[i].types[1] == undefined){
                document.getElementsByClassName('type')[i].innerHTML = '<p id="'+ parse.objects[i].types[0].name+'" class="typ">'+parse.objects[i].types[0].name+'</p>';
            }
            else{
                document.getElementsByClassName('type')[i].innerHTML = '<p id="'+ parse.objects[i].types[0].name+'" class="typ">'+parse.objects[i].types[0].name+'</p>';
                document.getElementsByClassName('type2')[i].innerHTML = '<p id="'+ parse.objects[i].types[1].name+'" class="typ">'+parse.objects[i].types[1].name+'</p>';
            }
        }
    };
    n = n+9;
    request.send(null);
}

function Pokemon(){
    document.getElementById('informer').style.border = "1px solid black";
    document.getElementById('informer').style.backgroundColor = "#DDDDDD";
    document.getElementById('informername').innerHTML = parse.objects[x].name;
    document.getElementById('informerid').innerHTML = '#'+parse.objects[x].pkdx_id;
    document.getElementById('informerid').style.border = "1px solid black";
    document.getElementById('informerid').style.backgroundColor = "white";
    document.getElementById('informerimage').innerHTML = '<center><img src="http://pokeapi.co/media/img/'+parse.objects[x].pkdx_id+'.png">';
    document.getElementById('informerimage').style.backgroundColor = "white";
    document.getElementById('informerimage').style.border = "1px solid black";

    if(parse.objects[x].types.length == 2){
        tp = parse.objects[x].types[0].name;
        tp2 = parse.objects[x].types[1].name;
        type = '<tr><td class="column">Type</td><td id="type"><p id="'+ parse.objects[x].types[0].name+'" class="intype">'+parse.objects[x].types[0].name+'</p><p id="'+ parse.objects[x].types[1].name+'" class="intype">'+parse.objects[x].types[1].name+'</p></td></tr>';
    }
    else{
        tp = parse.objects[x].types[0].name;
        type = '<tr><td class="column">Type</td><td id="type"><p id="'+ parse.objects[x].types[0].name+'" class="intype">'+parse.objects[x].types[0].name+'</p></td></tr>';
    }

    attack = '<tr><td class="column">Attack</td><td id="attack">'+parse.objects[x].attack+'</td></tr>';
    defense = '<tr><td class="column">Defense</td><td id="defense">'+parse.objects[x].defense+'</td></tr>';
    hp = '<tr><td class="column">HP</td><td id="hp">'+parse.objects[x].hp+'</td></tr>';
    spattack = '<tr><td class="column">SP Attack</td><td id="spattack">'+parse.objects[x].sp_atk+'</td></tr>';
    spdefense ='<tr><td class="column">SP Defense</td><td id="spdefense">'+parse.objects[x].sp_def+'</td></tr>';
    speed = '<tr><td class="column">Speed</td><td id="speed">'+parse.objects[x].speed+'</td></tr>';
    weight = '<tr><td class="column">Weight</td><td id="weight">'+parse.objects[x].weight+'</td></tr>';
    tmoves = '<tr><td class="column">Total moves</td><td id="tmoves">'+parse.objects[x].moves.length+'</td></tr>';

    document.getElementById('table').innerHTML='<table id="tab" border="1" cellpadding="1" cellspacing="0">'+type+attack+defense+hp+spattack+spdefense+speed+weight+tmoves+'</table>';
}
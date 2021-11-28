let knight = {
        name: '',
        hunger: 0,
        fatigue: 0,
        skill: 100,
        age: 1,
        
        feed() {
            this.hunger = this.hunger - 5;
        },
        sleep() {
            this.fatigue = this.fatigue - 5;
        },
        practice() {
            this.skill = this.skill + 3;
        }
}

let $hungerProgress = $('#hungerProgress');
let $fatigueProgress = $('#fatigueProgress');
let $swordProgress = $('#swordProgress');
let $age = $('#age');
let $body = $('body');

let hungerIntervalId = '';
let fatigueIntervalId = '';
let swordIntervalId = '';
let ageIntervalId = '';



$('#submitname').click(function () {
    knight.name = $("#namebox2").val();
    $('#namebox1').html("Knight " + knight.name);
});


//Start Game and Intervals

$('#startgame').click(function() {
    $('.select').fadeOut();
    $('.main').fadeIn();
    startIntervals();      

});

function gameOver() {
    $('.main').fadeOut();
    $('img').fadeOut();
    $('.petbox').fadeOut();
    $('.end').fadeIn();
    
}

function restartGame() {
    $('.end').fadeIn();
    $('.main').fadeIn();
    $('img').fadeIn();
    $('.petbox').fadeIn();
    startIntervals();
}

function shine(){
    $body.css('background-color', '#7a665d');
}

function dimLight(){
    $body.css('background-color', '#7c142c')
}


function startIntervals() {
    hungerIntervalId = setInterval(function() {
        if(knight.hunger >= 100) {
            clearInterval(hungerIntervalId);
            $('#gameover').html('You have failed to sustain your hunger...')
            gameOver();

        } else {
            knight.hunger = knight.hunger + 6;
            $hungerProgress.css('width', knight.hunger + '%');
        }
    }, 1000);

    fatigueIntervalId = setInterval(function() {
        if(knight.fatigue >= 100) {
            clearInterval(fatigueIntervalId);
            $('#gameover').html('You have failed to sustain your stamina...')
            gameOver();
            
        } else {
            knight.fatigue = knight.fatigue + 7;
            $fatigueProgress.css('width', knight.fatigue + '%');
        }
    }, 1500);

    swordIntervalId = setInterval(function(){
        if(knight.skill <= 0) {
            clearInterval(swordIntervalId);
            $('#gameover').html('You have failed because your sword has grown weak and dull...')
            gameOver();
            
        } else {
            knight.skill = knight.skill - 8;
            $swordProgress.css('width', knight.skill + '%');
        }
    }, 3000);

    ageIntervalId = setInterval(function(){
        if(knight.hunger >=100 || knight.fatigue >= 100 || knight.skill <= 0) {
            clearInterval(ageIntervalId);
        } else {
            knight.age++;
            $age.html('Days Survived: ' + knight.age);
        }        
    }, 5000)

}


    //action buttons
        $('#feed').click(function(){
            knight.feed();
        });

        $('#sleep').click(function(){
            knight.sleep();
        });

        $('#practice').click(function(){
            knight.practice();
        });

        $('#brighten').click(shine);

        $('#darken').click(dimLight);

        $('#restart').click(restartGame);


    
   

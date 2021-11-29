let knight = {
        name: '',
        hunger: 0,
        fatigue: 0,
        skill: 100,
        age: 1,
        
        feed() {
            this.hunger = this.hunger - 4;
        },
        sleep() {
            this.fatigue = this.fatigue - 4;
        },
        practice() {
            this.skill = this.skill + 2;
        }
}

let $hungerProgress = $('#hungerProgress');
let $fatigueProgress = $('#fatigueProgress');
let $swordProgress = $('#swordProgress');
let $age = $('#age');
let $body = $('body');
let form1 = "images/redknight.png";
let form2 = "images/redknightbuff.png";

let hungerIntervalId = '';
let fatigueIntervalId = '';
let swordIntervalId = '';
let ageIntervalId = '';

let feedSound = new Audio("sounds/zapsplat_catoon_bite_munch_single_002_56564.mp3");
let sleepSound = new Audio("sounds/zapsplat_human_female_snore_single_002_13484.mp3");
let swordSound = new Audio("sounds/zapsplat_warfare_sword_medieval_heavy_draw_scabbard_001_12088.mp3");


$('#submitname').click(function () {
    knight.name = $("#namebox2").val();
    $('#namebox1').html("Knight " + knight.name);
});


//Start Game and Intervals

$('#startgame').click(function() {
    $('.select').fadeOut();
    $('.main').fadeIn();
    startIntervals();
    $('#pet').attr("src", form1);   

});

function gameOver() {
            $('.main').fadeOut();
            $('img').fadeOut();
            $('.petbox').fadeOut();
            $('.end').fadeIn();
            clearAllInterval();
        knight.hunger = 0;
        knight.fatigue = 0;
        knight.skill = 100;
        knight.age = 1;
}

function restartGame() {
    setTimeout (() => {
        $('.main').fadeIn();
        $('img').fadeIn();
        $('.petbox').fadeIn();
        $('.end').fadeOut();
    }, 1000)
   startIntervals();
}

function shine(){
    $body.css('background-color', '#7a665d');
}

function dimLight(){
    $body.css('background-color', '#7c142c')
}

function clearAllInterval () {
    clearInterval(hungerIntervalId);
    clearInterval(fatigueIntervalId);
    clearInterval(swordIntervalId);
}

function startIntervals() {
    hungerIntervalId = setInterval(function() {
        if(knight.hunger >= 100) {
            clearInterval(hungerIntervalId);
            $('#gameover').html('You have failed to sustain your hunger...')
            gameOver();

        } else {
            knight.hunger = knight.hunger + 3;
            $hungerProgress.css('width', knight.hunger + '%');
        }
    }, 1000);

    fatigueIntervalId = setInterval(function() {
        if(knight.fatigue >= 100) {
            clearInterval(fatigueIntervalId);
            $('#gameover').html('You have failed to sustain your stamina...')
            gameOver();
            
        } else {
            knight.fatigue = knight.fatigue + 2;
            $fatigueProgress.css('width', knight.fatigue + '%');
        }
    }, 1500);

    swordIntervalId = setInterval(function(){
        if(knight.skill <= 0) {
            clearInterval(swordIntervalId);
            $('#gameover').html('You have failed because your sword has grown weak and dull...')
            gameOver();
            
        } else {
            knight.skill = knight.skill - 3;
            $swordProgress.css('width', knight.skill + '%');
        }
    }, 3000);

    ageIntervalId = setInterval(function(){
        if(knight.hunger >=100 || knight.fatigue >= 100 || knight.skill <= 0) {
            clearInterval(ageIntervalId);
        }  
        else if (knight.age >= 10) {
            $('#pet').attr("src", form2);  
        }  
        else {
            knight.age++;
            $age.html('Days Survived: ' + knight.age);
        }

    }, 5000)

   

};

 

    //action buttons
        $('#feed').click(function(){
            knight.feed();
            feedSound.play();
        });

        $('#sleep').click(function(){
            knight.sleep();
            sleepSound.play();
        });

        $('#practice').click(function(){
            knight.practice();
            swordSound.play();
        });

        $('#brighten').click(shine);

        $('#darken').click(dimLight);

        $('#restart').click(restartGame);


    
   

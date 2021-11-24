let knight = {
        name: '',
        hunger: 0,
        fatigue: 0,
        skill: 100,
        age: 1,
        
        feed() {
            this.hunger--;
        },
        sleep() {
            this.fatigue--;
        },
        practice() {
            this.skill++;
        }
}

let $hungerProgress = $('#hungerProgress');
let $fatigueProgress = $('#fatigueProgress');
let $swordProgress = $('#swordProgress');
let $age = $('#age');

$('#submitname').click(function () {
    knight.name = $("#namebox2").val();
    $('#namebox1').html("Knight " + knight.name);
});


//PLAY GAME! and status intervals

$('#startgame').click(function() {
    $('.select').fadeOut();
    $('.main').fadeIn();

    setInterval(function() {
            
        if(knight.hunger >= 100) {
            clearInterval(setInterval($hungerProgress.css('width') = 0));

        } else {
            knight.hunger++;
            $hungerProgress.css('width', knight.hunger + '%');
        }
    }, 1000);

    setInterval(function() {
        
        if(knight.fatigue >= 100) {
            clearInterval(setInterval($fatigueProgress.css('width') = 0));

        } else {
            knight.fatigue++;
            $fatigueProgress.css('width', knight.fatigue + '%');
        }
    }, 1500);

    setInterval(function() {
        
        if(knight.skill <= 0) {
            clearInterval(setInterval($fatigueProgress.css('width') = 0));

        } else {
            knight.skill--;
            $swordProgress.css('width', knight.skill + '%');
        }
    }, 3000);

    setInterval(function (){
        knight.age++;
        $age.html('Days Survived: ' + knight.age);
    }, 5000)
      
});

        $('#feed').click(function(){
            knight.feed();
        });

        $('#sleep').click(function(){
            knight.sleep();
        });

        $('#practice').click(function(){
            knight.practice();
        });

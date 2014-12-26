/**
 * A collection of functions which can be called
 * to get some sound effects.
 *
 *@author Junior, Lekane Nimpa (JLN)
 */
var backgroundSound;
var sCharacter;
var conToPlay;

/**
 * Don't call this function directly.
 * 
 * @param url   the URL of the sound to play
 * @param param if true, sound will be looped 
 */
function play(url, param){
	var sound = new Howl({
		urls: [url],
		volume: 0.7,
		autoplay: true,
		loop : param,
		
	}).play();
	return sound;
}

// I proposed 4 background sounds during fights
function playBackgroundSound1(){
	pauseBackgroundSound();
	backgroundSound = play('sound/backgroundsound1.mp3',true);
}

function playBackgroundSound2(){
	pauseBackgroundSound();
	backgroundSound = play('sound/backgroundsound2.mp3',true);
}

function playBackgroundSound3(){
	pauseBackgroundSound();
	backgroundSound = play('sound/backgroundsound3.mp3',true);
}

function playBackgroundSound4(){
	pauseBackgroundSound();
	backgroundSound = play('sound/backgroundsound4.mp3',true);
}

function pauseBackgroundSound(){
	if(backgroundSound != null ){
		backgroundSound.pause();
		backgroundSound.pause();
	}
}

/**
 * When user selects his/her character
 */
function selectCharacter(){
	if(sCharacter == null){
		sCharacter = play('sound/SelectCharacterScreen.mp3',true);
	}else{
		sCharacter.play();
	}
	
}

function pauseSelectCharacter(){
	if(sCharacter != null){
		sCharacter.pause();
		sCharacter.pause();
	}
}

/**
 * When the user want to continue playing
 * after the previous round is finished.
 */
function continueToPlay(){
	if(conToPlay == null){
		conToPlay = play('sound/ContinueScreen.mp3',true);
	}else{
		conToPlay.play();
		
	}
	
}


function pauseContinueToPlay(){
	if(conToPlay != null){
		conToPlay.pause();
		conToPlay.pause();	
	}
}

/**
 * When the game is over
 */
function gameOver(){
	play('sound/GameOver.mp3',false);
}

/******************************************************************************************************  
 *                                          Some fight effects
 ******************************************************************************************************/
function slap(){
	play('sound/BananaSlap.mp3',false);
}

function jab(){
	play('sound/Jab.mp3',false);
}

function kick(){
	play('sound/Kick.mp3',false);
}

function punch(){
	play('sound/RealisticPunch.mp3',false);
}

function strongPunch(){ 
	play('sound/StrongPunch.mp3',false);
}

function punches(){
	play('sound/ManyPunches.mp3',false);
}

function upperCut(){
	play('sound/UpperCut.mp3',false);
}

function boom(){
	play('sound/SonicBoom.mp3',false);
}

function bang(){
	play('sound/LoudBang.mp3',false);
}
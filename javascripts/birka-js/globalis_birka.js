var flowerId = 0;
var gomb, outputContainer;
var rndx, rndy;
var sheep;

//--- Event

function newFlower()
{
	rndx=Math.floor(Math.random() * 600) + 200;
	rndy=Math.floor(Math.random() * 300) + 300;

	var img = document.createElement('img');
	img.src = '../images/Sheeps/flower.gif';
	img.id = flowerId;
	flowerId += 1;
	img.style.position = "absolute";
	img.style.left = rndx + "px";
	img.style.top = rndy + "px";
	document.body.appendChild(img);

}

function runSheep()
{
	sheep = document.getElementById('sheepId');
	sheep.src = '../images/Sheeps/sheep-looprun.gif';
}

function jumpSheep()
{
	rndx=Math.floor(Math.random() * 600) + 200;
	rndy=Math.floor(Math.random() * 300) + 300;

	sheep = document.getElementById('sheepId');
	sheep.src = '../images/Sheeps/sheep-looprun.gif';
	sheep.style.position = "absolute";
	sheep.style.left = rndx + "px";
	sheep.style.top = rndy + "px";
}

function eatSheep()
{
	sheep = document.getElementById('sheepId');
	sheep.src = '../images/Sheeps/sheep-eat.png';	
}

function sitSheep()
{
	sheep = document.getElementById('sheepId');
	sheep.src = '../images/Sheeps/sheep-sit.gif';	
}

function playSheep()
{
	sheep = document.getElementById('sheepId');
	sheep.src = '../images/Sheeps/sheep-random.gif';	
}

function sleepSheep()
{
	sheep = document.getElementById('sheepId');
	sheep.src = '../images/Sheeps/sheep-sleep.gif';	
}

//--- SetButton

function setButtonSleepSheep()
{
	gomb = document.getElementById('sleep');
	outputContainer = document.getElementById('field');
	gomb.addEventListener('click', sleepSheep);
}


function setButtonPlaySheep()
{
	gomb = document.getElementById('play');
	outputContainer = document.getElementById('field');
	gomb.addEventListener('click', playSheep);
}

function setButtonSitSheep()
{
	gomb = document.getElementById('sit');
	outputContainer = document.getElementById('field');
	gomb.addEventListener('click', sitSheep);
}

function setButtonEatSheep()
{
	gomb = document.getElementById('eat');
	outputContainer = document.getElementById('field');
	gomb.addEventListener('click', eatSheep);
}

function setButtonJumpSheep()
{
	gomb = document.getElementById('jump');
	outputContainer = document.getElementById('field');
	gomb.addEventListener('click', jumpSheep);
}

function setButtonRunSheep()
{
	gomb = document.getElementById('run');
	outputContainer = document.getElementById('field');
	gomb.addEventListener('click', runSheep);
}

function setButtonFlower()
{
	gomb = document.getElementById('new-flower');
	outputContainer = document.getElementById('field');
	gomb.addEventListener('click', newFlower);
}


//--- addEventListener

document.addEventListener('DOMContentLoaded', setButtonFlower);
document.addEventListener('DOMContentLoaded', setButtonRunSheep);
document.addEventListener('DOMContentLoaded', setButtonJumpSheep);
document.addEventListener('DOMContentLoaded', setButtonEatSheep);
document.addEventListener('DOMContentLoaded', setButtonSitSheep);
document.addEventListener('DOMContentLoaded', setButtonPlaySheep);
document.addEventListener('DOMContentLoaded', setButtonSleepSheep);

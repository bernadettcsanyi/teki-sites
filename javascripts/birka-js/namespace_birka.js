var myHandler =
{
	
	flowerId: 0,
	outputContainer: null,
	gomb: null,
	rndx: Math.floor(Math.random() * 600) + 200,
	rndy: Math.floor(Math.random() * 300) + 300,
	sheep: null,

//--- Event

	rndxy: function()
	{
		myHandler.rndx = Math.floor(Math.random() * 600) + 200;
		myHandler.rndy = Math.floor(Math.random() * 300) + 300;
	},

	getSheep: function()
	{
		myHandler.sheep = document.getElementById('sheepId');
	},

	

	newFlower: function()
	{
		myHandler.rndxy();
		var img = document.createElement('img');
		img.src = '../images/Sheeps/flower.gif';
		img.id = myHandler.flowerId;
		myHandler.flowerId += 1;
		img.style.position = "absolute";
		img.style.left = myHandler.rndx + "px";
		img.style.top = myHandler.rndy + "px";
		document.body.appendChild(img);
	},

	runSheep: function()
	{
		myHandler.getSheep();
		myHandler.sheep.src = '../images/Sheeps/sheep-looprun.gif';
	},

	jumpSheep: function()
	{
		myHandler.rndxy();
		myHandler.getSheep();
		myHandler.sheep = document.getElementById('sheepId');
		myHandler.sheep.src = '../images/Sheeps/sheep-looprun.gif';
		myHandler.sheep.style.position = "absolute";
		myHandler.sheep.style.left = myHandler.rndx + "px";
		myHandler.sheep.style.top = myHandler.rndy + "px";
	},

	eatSheep: function()
	{
		myHandler.getSheep();
		myHandler.sheep.src = '../images/Sheeps/sheep-eat.png';	
	},

	sitSheep: function()
	{
		myHandler.getSheep();
		myHandler.sheep.src = '../images/Sheeps/sheep-sit.gif';	
	},

	playSheep: function()
	{
		myHandler.getSheep();
		myHandler.sheep.src = '../images/Sheeps/sheep-random.gif';	
	},

	sleepSheep: function()
	{
		myHandler.getSheep();
		myHandler.sheep.src = '../images/Sheeps/sheep-sleep.gif';	
	},

//--- SetButton

	setButtonSleepSheep: function()
	{
		myHandler.gomb = document.getElementById('sleep');
		myHandler.outputContainer = document.getElementById('field');
		myHandler.gomb.addEventListener('click', myHandler.sleepSheep);
	},

	setButtonPlaySheep: function()
	{
		myHandler.gomb = document.getElementById('play');
		myHandler.outputContainer = document.getElementById('field');
		myHandler.gomb.addEventListener('click', myHandler.playSheep);
	},

	setButtonSitSheep: function()
	{
		myHandler.gomb = document.getElementById('sit');
		myHandler.outputContainer = document.getElementById('field');
		myHandler.gomb.addEventListener('click', myHandler.sitSheep);
	},

	setButtonEatSheep: function()
	{
		myHandler.gomb = document.getElementById('eat');
		myHandler.outputContainer = document.getElementById('field');
		myHandler.gomb.addEventListener('click', myHandler.eatSheep);
	},

	setButtonJumpSheep: function()
	{
		myHandler.gomb = document.getElementById('jump');
		myHandler.outputContainer = document.getElementById('field');
		myHandler.gomb.addEventListener('click', myHandler.jumpSheep);
	},

	setButtonRunSheep: function()
	{
		myHandler.gomb = document.getElementById('run');
		myHandler.outputContainer = document.getElementById('field');
		myHandler.gomb.addEventListener('click', myHandler.runSheep);
	},

	setButtonNewFlower: function()
	{
		myHandler.gomb = document.getElementById('new-flower');
		myHandler.outputContainer = document.getElementById('field');
		myHandler.gomb.addEventListener('click', myHandler.newFlower);
	}
}

document.addEventListener('DOMContentLoaded', myHandler.setButtonNewFlower);
document.addEventListener('DOMContentLoaded', myHandler.setButtonRunSheep);
document.addEventListener('DOMContentLoaded', myHandler.setButtonJumpSheep);
document.addEventListener('DOMContentLoaded', myHandler.setButtonEatSheep);
document.addEventListener('DOMContentLoaded', myHandler.setButtonSitSheep);
document.addEventListener('DOMContentLoaded', myHandler.setButtonPlaySheep);
document.addEventListener('DOMContentLoaded', myHandler.setButtonSleepSheep);



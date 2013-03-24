var id = 0;
function Event()
{
}

Event.prototype =
{
	x: 0,
  	y: 0,
	sheep: null,

	changeCoord: function()
	{
    		x = Math.floor(Math.random() * 600) + 200;
   		y = Math.floor(Math.random() * 300) + 300;
  	},

  	newFlower: function()
	{
		Event.prototype.changeCoord();
    		var img = document.createElement('img');
		img.src = '../images/Sheeps/flower.gif';
		img.id = id;
		id += 1;
		img.style.position = "absolute";
		img.style.left = x + "px";
		img.style.top = y + "px";
		document.body.appendChild(img);
  	},

	getSheep: function()
	{
		sheep = document.getElementById('sheepId');
	},

	runSheep: function()
	{
		Event.prototype.getSheep();
		sheep.src = '../images/Sheeps/sheep-looprun.gif';
	},

	jumpSheep: function()
	{
		Event.prototype.changeCoord();
		Event.prototype.getSheep();
		sheep = document.getElementById('sheepId');
		sheep.src = '../images/Sheeps/sheep-looprun.gif';
		sheep.style.position = "absolute";
		sheep.style.left = x + "px";
		sheep.style.top = y + "px";
	},	

	eatSheep: function()
	{
		Event.prototype.getSheep();
		sheep.src = '../images/Sheeps/sheep-eat.png';	
	},

	sitSheep: function()
	{
		Event.prototype.getSheep();
		sheep.src = '../images/Sheeps/sheep-sit.gif';	
	},

	playSheep: function()
	{
		Event.prototype.getSheep();
		sheep.src = '../images/Sheeps/sheep-random.gif';	
	},

	sleepSheep: function()
	{
		Event.prototype.getSheep();
		sheep.src = '../images/Sheeps/sheep-sleep.gif';	
	}
};

var eId, e;
function Set(elementId, event)
{
	this.elementId = elementId;
	eId = elementId;
	this.event = event;
	e = event;
	var self = this;
};

Set.prototype= 
{
	eId: this.elementId,
	e: this.event,

	setButton: function(elementId, event)
	{
		this.elementId = elementId;
		this.event = event;
	
		
		var self = this;
		
		gomb = document.getElementById(eId);
		outputContainer = document.getElementById('field');
		gomb.addEventListener('click', e);		
	}
};
var obj = new Event();
obj.changeCoord;

var draw1 = new Set('new-flower', obj.newFlower);
document.addEventListener('DOMContentLoaded', draw1.setButton);

var draw2 = new Set('run', obj.runSheep);
document.addEventListener('DOMContentLoaded', draw2.setButton);

var draw3 = new Set('jump', obj.jumpSheep);
document.addEventListener('DOMContentLoaded', draw3.setButton);

var draw4 = new Set('eat', obj.eatSheep);
document.addEventListener('DOMContentLoaded', draw4.setButton);

var draw5 = new Set('sit', obj.sitSheep);
document.addEventListener('DOMContentLoaded', draw5.setButton);

var draw6 = new Set('play', obj.playSheep);
document.addEventListener('DOMContentLoaded', draw6.setButton);

var draw7 = new Set('sleep', obj.sleepSheep);
document.addEventListener('DOMContentLoaded', draw7.sleepButton);

console.info ("Sajnos mindig csak a legutóbb létrehozott objektumpeldany-hoz tartozo gomb mukodik.");


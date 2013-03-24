var itemNr;

function gen(itemNr){
	var a=0;
	var b=1;
	var k;
	if (itemNr < 0)
	{
		var p=document.createElement("p");
		var node=document.createTextNode("Negatív számmal nem tudok számolni!");
		p.appendChild(node);

		var element=document.getElementById("fibgensz");
		element.appendChild(p);
	} else if (itemNr == "") {
		var p=document.createElement("p");
		var node=document.createTextNode("Nem kaptam sorszámot!");
		p.appendChild(node);

		var element=document.getElementById("fibgensz");
		element.appendChild(p);
	} else {
		 if ((0 <= itemNr) && (itemNr < 2))
		{	
			k=itemNr;
		} else {
			for (i=1; i<itemNr; i++)
			{
				k=a+b;
				a=b;
				b=k;
			}
		}
		var p=document.createElement("p");
		var node=document.createTextNode("Az " + itemNr + ". elem értéke: " + k);
		p.appendChild(node);

		var element=document.getElementById("fibgensz");
		element.appendChild(p);
	}
}



function fizzbuzz(nr)
{
	var kiir;
	var ret = "";
	if(nr<1)
	{
		ret="Csak 0-nál nagyobb számot kérek!";
	} else {
		for(i=1; i<=nr; i=i+1)
		{
		
			if(((i%3)==0) && ((i%5)==0) && ((i%7)==0))
			{
				kiir="FizzBuzzBazz";
				//console.info("Oszthato3al es 5el");
			}else if(((i%3)==0) && ((i%5)==0))
			{
				kiir="FizzBuzz";
				//console.info("Oszthato3al es 5el");
			} else if((i%3)==0){
				kiir="Fizz";
				//console.info("Oszthato3al");
			} else if ((i%5)==0){
				kiir="Buzz";
				//console.info("Oszthato5el");
			} else if ((i%7)==0){
				kiir="Bazz";
				//console.info("Oszthato5el");
			} else {
				kiir=i;
				//console.info(i);
			}

			ret= ret + kiir + ", ";
		}
		
	}
	var p=document.createElement("li");
	var node=document.createTextNode(ret);
	p.appendChild(node);

	var element=document.getElementById("wrapper");
	element.appendChild(p);	

	return ret;
}

//fizzbuzz();

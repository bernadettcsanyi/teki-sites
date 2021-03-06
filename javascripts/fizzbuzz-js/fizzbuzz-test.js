(function(){

	test("-1==Negatív!", function()
	{
		return equal(fizzbuzz("-1"), "Csak 0-nál nagyobb számot kérek!");
	});

	test("0==Kisebb, mint 1!", function()
	{
		return equal(fizzbuzz("0"), "Csak 0-nál nagyobb számot kérek!");
	});

	test("1==1", function()
	{
		return equal(fizzbuzz("1"), "1, ");
	});

	test("2==2", function()
	{
		return equal(fizzbuzz("2"), "1, 2, ");
	});

		test("3==Fizz", function()
	{
		return equal(fizzbuzz("3"), "1, 2, Fizz, ");
	});

	test("4==4", function()
	{
		return equal(fizzbuzz("4"), "1, 2, Fizz, 4, ");
	});

	test("5==Buzz", function()
	{
		return equal(fizzbuzz("5"), "1, 2, Fizz, 4, Buzz, ");
	});

	test("6==Fizz", function()
	{
		return equal(fizzbuzz("6"), "1, 2, Fizz, 4, Buzz, Fizz, ");
	});

	test("7==Bazz", function()
	{
		return equal(fizzbuzz("7"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, ");
	});

	test("8==8", function()
	{
		return equal(fizzbuzz("8"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, ");
	});

	test("9==Fizz", function()
	{
		return equal(fizzbuzz("9"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, ");
	});
		
	test("10==Buzz", function()
	{
		return equal(fizzbuzz("10"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, ");
	});

	test("11==11", function()
	{
		return equal(fizzbuzz("11"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, ");
	});

	test("12==Fizz", function()
	{
		return equal(fizzbuzz("12"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, ");
	});

	test("13==13", function()
	{
		return equal(fizzbuzz("13"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, ");
	});

	test("14==Bazz", function()
	{
		return equal(fizzbuzz("14"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, ");
	});	
	
	test("15==FizzBuzz", function()
	{
		return equal(fizzbuzz("15"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, FizzBuzz, ");
	});

	test("16==16", function()
	{
		return equal(fizzbuzz("16"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, FizzBuzz, 16, ");
	});

	test("17==17", function()
	{
		return equal(fizzbuzz("17"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, FizzBuzz, 16, 17, ");
	});

	test("18==Fizz", function()
	{
		return equal(fizzbuzz("18"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, FizzBuzz, 16, 17, Fizz, ");
	});

	test("19==19", function()
	{
		return equal(fizzbuzz("19"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, FizzBuzz, 16, 17, Fizz, 19, ");
	});
	
	test("20==Buzz", function()
	{
		return equal(fizzbuzz("20"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, FizzBuzz, 16, 17, Fizz, 19, Buzz, ");
	});


	test("100==Buzz", function()
	{
		return equal(fizzbuzz("100"), "1, 2, Fizz, 4, Buzz, Fizz, Bazz, 8, Fizz, Buzz, 11, Fizz, 13, Bazz, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, Bazz, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz, 46, 47, Fizz, Bazz, Buzz, Fizz, 52, 53, Fizz, Buzz, Bazz, Fizz, 58, 59, FizzBuzz, 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz, 76, Bazz, Fizz, 79, Buzz, Fizz, 82, 83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz, Bazz, 92, Fizz, 94, Buzz, Fizz, 97, Bazz, Fizz, Buzz, ");
	});

}).call(this);

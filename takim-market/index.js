var allProducts = [{
	name : '농구공',
	price : 100000,
	seller : '조던',
	imageUrl: 'images/products/basketball1.jpeg'
},{
	name : '축구공',
	price : 50000,
	seller : '메시',
	imageUrl: 'images/products/soccerball1.jpg'
},{
	name : '키보드',
	price : 10000,
	seller : '그랩',
	imageUrl: 'images/products/keyboard1.jpg'
}];

tempString = "";

for (let i = 0; i < allProducts.length; i++)
{
	tempString += '<div class="product-card">' + 
	'<img class="product-img" src="'+ allProducts[i].imageUrl+ '"/>' + 
	'<div class="product-contents">'+
	  '<span class="product-name">'+ allProducts[i].name+ '</span>'+
	  '<span class="product-price">'+ allProducts[i].price+'</span>'+
	  '<div class="product-seller">'+
		  '<img class="product-avatar"src="images/icons/avatar.png">'+
		  '<span>'+allProducts[i].seller+'</span>'+
	  '</div>'+
	'</div>'+
	'</div>';
}

document.querySelector("#product-list").innerHTML=tempString;
//smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 57.5
        }, 1000);
        return false;
      }
    }
  });
});

//navigation
function showNavigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//form
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function validateForm() {
	var name = document.forms["contact-form"]["name"].value;
	var email = document.forms["contact-form"]["email"].value;
	var message = document.forms["contact-form"]["comment"].value;
	validateEmail(email);
	if (!(name == null || name == "" || email == null || email == "" || message == null || message == "")) {
		alert("Message successfully sent!");
	}
}

// Modal Image Gallery
function onClick(element, painter, price) {
  document.getElementById("img-container").src = element.src;
  document.getElementById("modal-container").style.display = "block";
  document.getElementById("painting").innerHTML = element.alt;
  document.getElementById("desc").innerHTML = getDesc(element.alt);
  document.getElementById("painter").innerHTML = painter;
  document.getElementById("price").innerHTML = 'Price: $' + price;
}

function exitModal() {
	document.getElementById("modal-container").style.display='none';
}

function getDesc(painting) {
	var paintings = [
		//French Collection
		[ 'The Sanctuary of Hercules', '1884 <br/> oil on wood' ],
		[ 'Woman with a Parasol - Madame Monet and Her Son', '1875 <br/> oil on canvas' ],
		[ 'A View near Volterra', '1838 <br/> oil on canvas' ],
		[ 'The Peppermint Bottle', '1893/1895 <br/> oil on canvas' ],
		[ 'Fatata te Miti (By the Sea)', '1892 <br/> oil on canvas' ],
		[ 'Haystacks in Brittany', '1890 <br/> oil on canvas' ],
		//Intimate Impressions
		[ 'Horses in a Meadow', '1871 <br/> oil on canvas' ],
		[ 'Flowers in a Crystal Vase', 'c. 1882 <br/> oil on canvas' ],
		[ 'Child Wearing a Red Scarf', 'c. 1891 <br/> oil on cardboard' ],
		[ 'Vase of Flowers on a Mantelpiece', 'c. 1900 <br/> oil on cardboard' ],
		[ 'The Artist\'s Studio', 'c. 1868 <br/> oil on wood' ],
		[ 'The Battle of Love', 'c. 1880 <br/> oil on canvas' ],
		//McCrindle Collection
		[ 'A Peasant Family Cooking over a Campfire', 'watercolor over graphite on wove paper' ],
		[ 'A Seated Male Nude', 'red chalk on brown laid paper' ],
		[ 'Interior of the Colosseum', 'oil on canvas' ],
		[ 'Cairo', 'c. 1891 <br/> oil, canvas' ],
		[ 'Interior of an Ancient Egyptian Temple', 'c. 1888 <br/> watercolor and gouache with pen and brown ink over graphite on thick wove paper' ],
		[ 'Stage Set Consisting Of Painted Panels, Fabrics, And Fans', '1870/1890 <br/> watercolor and gouache, graphite, black ink, and metallic gold paint with collage of colored velvets and watercolored paper cutouts on wove paper' ],
		//Music Collection
		[ 'A Concert', 'c. 1518-1520 <br/> oil on canvas' ],
		[ 'The Old Musician', '1862 <br/> oil on canvas' ],
		[ 'Bagpipe Player', '1624 <br/> oil on canvas' ],
		[ 'The Dancing Couple', '1663 <br/> oil on canvas' ],
		[ 'Orpheus', 'c. 1515 <br/> oil on panel transferred to canvas' ],
		[ 'The Old Violin', '1886 <br/> oil on canvas' ]
	];
	var i = 0;
	for (i=0; i<paintings.length; i++)
		if (paintings[i][0] == painting) return paintings[i][1];
}

function transaction() {
	alert('You have checked out!');
}

var num = 0, items = [];

function addToCart() {
	var painting = document.getElementById("painting").innerHTML;
	var painter = document.getElementById("painter").innerHTML;
	items.push([painting, painter]);
	num++; //add count
	alert('Added to cart: \"' + painting + '\" by ' + painter + '.');
	for (i=0; i < items.length; i++) {
		for (j=0; j < 1; j++);
			//alert(items[i][j] + ' ' + items[i][j+1]);
	}
	if (num > 0)
		$('.transaction').css('display', 'inline-block');
}

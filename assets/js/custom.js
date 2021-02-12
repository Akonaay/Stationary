$(document).ready(function () {
	const navLinks = [
		{
			title: 'Office Furniture',
			url: 'http://127.0.0.1:5502/office-furniture.html',
		},
		{
			title: 'Office Machine',
			url: 'http://127.0.0.1:5502/office-machine.html/',
		},
		{
			title: 'Desk Accessories',
			url: 'http://127.0.0.1:5502/desk-accessories.html/',
		},
		{
			title: 'Paper Products',
			url: 'http://127.0.0.1:5502/paper-products.html/',
		},
		{
			title: 'School Stationery',
			url: 'http://127.0.0.1:5502/school-stationery.html/',
		},
		{
			title: 'Exercise Books',
			url: 'http://127.0.0.1:5502/exercise-books.html/',
		},
		{
			title: 'Computer Accessories',
			url: 'http://127.0.0.1:5502/computer-accessories.html/',
		},
		{
			title: 'Art & Crafts',
			url: 'http://127.0.0.1:5502/art&crafts.html/',
		},
		{
			title: 'Files',
			url: 'http://127.0.0.1:5502/files.html/',
		},
		{
			title: 'Conference Equipment',
			url: 'http://127.0.0.1:5502/conference-equipment.html/',
		},
		{
			title: 'Tapes',
			url: 'http://127.0.0.1:5502/tapes.html/',
		},
		{
			title: 'Boards',
			url: 'http://127.0.0.1:5502/boards.html/',
		},
		{
			title: 'Personalised Printed Product',
			url: 'http://127.0.0.1:5502/printed-product.html/',
		},
		{
			title: 'Network Products',
			url: 'http://127.0.0.1:5502/network-products.html/',
		},
		{
			title: 'Glues & Adhesives',
			url: 'http://127.0.0.1:5502/glues&adhesives.html/',
		},
		{
			title: 'Mailing & Packaging',
			url: 'http://127.0.0.1:5502/mailing-packaging.html/',
		},
		{
			title: 'Inks & Toners',
			url: 'http://127.0.0.1:5502/inks.html/',
		},
	]

	const treads = [
		{
			id: 1,
			title: 'Notebooks',
			img: '/assets/images/Stationery Items/d-notebooks.jpg',
			description: 'Make working at home a breeze with one of our notebooks',
		},
		{
			id: 2,
			title: 'Pens',
			img: '/assets/images/Stationery Items/d-pens.jpg',
			description: 'From brilliant ballpoints to magic midliners',
		},
	]

	const products = [
		{
			id: 1,
			title: 'Pens',
			img: '/assets/images/Stationery Items/d-pens.jpg',
			description: '',
			rate: 3.5
		},
		{
			id: 2,
			title: 'Notebooks',
			img: '/assets/images/Stationery Items/d-notebooks.jpg',
			description: '',
		},
		{
			id: 3,
			title: 'Pencil Cases',
			img: '/assets/images/Stationery Items/d-pencilcases.jpg',
			description: '',
		},
		{
			id: 4,
			title: 'Scrapbooks',
			img: 'assets/images/Stationery Items/d-scrapbooks.jpg',
			description: '',
		},
		{
			id: 5,
			title: 'Anniversary',
			img: '/assets/images/Stationery Items/d-anniversary.jpg',
			description: '',
		},
		{
			id: 6,
			title: 'Postcards',
			img: '/assets/images/Stationery Items/d-postcards.jpg',
			description: '',
		},
		{
			id: 7,
			title: 'Leverarches',
			img: '/assets/images/Stationery Items/LEVERARCHES.jpg',
			description: '',
		},
		{
			id: 8,
			title: 'Padfolios',
			img: '/assets/images/Stationery Items/PADFOLIOS.jpg',
			description: '',
		},
		{
			id: 9,
			title: 'Desk Storage',
			img: '/assets/images/Stationery Items/DESKSTORAGE.jpg',
			description: '',
		},
		{
			id: 10,
			title: 'Envelopes',
			img: '/assets/images/Stationery Items/Envelopes/34302207.jpeg',
			description: '',
		},
		{
			id: 11,
			title: 'Craft Scissors & Cutters',
			img: '/assets/images/Stationery Items/Craft Scissors & Cutters/10000248.jpeg',
			description: '',
		},	
	]

	products.map((v, k) => {
		$('#sliders').append('<div class="box-wrap border"><img src = "'+ v.img +'" class= "rounded d-block" /> <div class="body"><h5>'+ v.title +'</h5><p>'+ v.description +'</p><div class="d-flex justify-content-between"><span><i class="far fa-heart"></i></span><a data-key="' + k + '" class="openModal"><i class="fas fa-info"></i></a></div></div></div > ')
	})
	 
    $(document).on('click', 'a.openModal', function () {
		var productKey = $(this).data('key');
		var product = products[productKey];
		if(product){
			$('#exampleModal').modal('toggle');
			$('#exampleModal #exampleModalLabel').html(product.title);
			var content = '<div>Title: '+ product.title + '</div> <div>Description: ' + product.description+'</div> <div>Rate: '+product.rate+'</div>';
			
			$('#exampleModal .modal-body').html(content);
		}
	})    
	
	function showNav(link) {
		return `
			<div class="d-flex">
				<ul class="nav">
					<li class="nav-item">
						<a class="nav-link btn-grad" href="${link.url}">${link.title}</a>
					</li>
				</ul>
			</div>
		`
	}

	function displayMenuList() {
		document.getElementById('categories').innerHTML = `
		<div class="owl-carousel">
		  ${navLinks.map(showNav).join('')}
		</div>
	  `
	}

	displayMenuList()

	$('.owl-carousel').owlCarousel({
		autoWidth: true,
		margin: 5,
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
	})

})

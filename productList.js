(function(){

    var mockData = [
        { name: 'Backlit Keyboard', category: 'Keyboards', price: '34.99' , image: 'https://infinitediaries.net/wp-content/uploads/2019/11/wwwA7RII_19_11_07_03853_2000px-Pietrusiewicz.jpg'},
        { name: 'Mechanical Keyboard', category: 'Keyboards', price: '19.99' , image: 'https://infinitediaries.net/wp-content/uploads/2019/06/wwwA7RII_19_05_16_03542_2000px-Pietrusiewicz.jpg'},
        { name: 'Membrane Keyboard', category: 'Keyboards', price: '14.99' , image: 'https://gamecrate.com/sites/default/files/background_image/Logitech-G513-Carbon-review-1_1.jpg'},
        { name: 'Wireless Mouse', category: 'Mice', price: '11.99' , image: 'https://image.freepik.com/free-vector/illustration-black-color-shiny-modern-computer-mouse-view-with-realistic-shadow-white-background_251819-1993.jpg'},
        { name: 'Old Wired Mouse', category: 'Mice', price: '4.99' , image: 'https://images.summitmedia-digital.com/esquiremagph/images/2021/02/19/computer-mouse-03.jpg'},
        { name: 'Wireless Headphones', category: 'Headphones', price: '74.99' , image: 'https://assets.sennheiser.com/images/3296/all/square/10319/square_list_zoom_HD_4_40_AE_BT-sennheiser-02-600.jpg'},
        { name: 'Wireless Headset', category: 'Headphones', price: '12.99' , image: 'http://www.stagedrop.com/images/oklahoma-sound/stagedrop-LWM-7.jpg'},
        { name: 'Wireless Microphone', category: 'Microphones', price: '39.99' , image: 'http://www.stagedrop.com/images/oklahoma-sound/OS-LWM-5-vert.jpg'},
        { name: 'Desk Microphone', category: 'Microphones', price: '64.99' , image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Yeti-USB-Microphone.jpg'},
        { name: 'Wired Microphone', category: 'Microphones', price: '17.99' , image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/USB-Microphone.jpg'},
    ];

    function renderList(data){
        var itemSet = document.querySelector('#holder');
		// clear out inner HTML to get rid of any older results
		itemSet.innerHTML = '';
		// Map each database record to a string containing the HTML for it's row
		var item = data.map(function (data) {
			return (
                '<div class="square">' +
                    '<img src="' + data.image + '" width="200" height="200"/>' +
                    '<div class="desc">' + data.name + '</div>' + 
                    '<div class="desc">$' + data.price + '</div>' +
                 '</div>'
            );
		});
		// Set the contents of the table body to the new set of rendered HTML rows
		item.forEach(function (text) {
			itemSet.innerHTML += text; // += adds to HTML instead of overwriting it entirely.
		});
    }

    renderList(mockData);

    function sortBy(sortValue){
        var sortedResults = (sortValue === 'name') ?
			mockData.sort(function (a, b) {
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				if (nameA < nameB) {
				    return -1;
				}
				if (nameA > nameB) {
				    return 1;
				}
			}) : 
			mockData.sort(function (a, b) { 
				return a[sortValue] - b[sortValue];
			});
		renderList(sortedResults);
    }
    document.querySelector('#sort-by').addEventListener('change', function(event){
        sortBy(event.target.value);
	});

    function toggleCat(catValue){
        var catResults = mockData.filter(function(result){
            //return based on what the choice is
            if(catValue === 'Keyboards'){
                return result.category === 'Keyboards';
            } else if(catValue === 'Mice'){
                return result.category === 'Mice';
            } else if(catValue === 'Headphones'){
                return result.category === 'Headphones';
            } else if(catValue === 'Microphones'){
                return result.category === 'Microphones';
            } else {
                return true;
            }
        });
        renderList(catResults);
    }

    document.querySelector('#category').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean 
		var value = (event.target.value);
		toggleCat(value);
	});

    function togglePrice(priceValue){
        var priceResults = mockData.filter(function(result){
            console.log(priceValue);
            if(priceValue === 'Lowest'){
                return parseInt(result.price) < 10;
            } else if(priceValue === 'Low'){
                return parseInt(result.price) > 10 && parseInt(result.price) < 25;
            } else if(priceValue === 'Mid'){
                return parseInt(result.price) > 25 && parseInt(result.price) < 50;
            } else if(priceValue === 'High'){
                return parseInt(result.price) > 50;
            } else {
                return true;
            }
        });
        renderList(priceResults);
    }

    document.querySelector('#price-range').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean 
		var value = (event.target.value);
		togglePrice(value);
	});


})();
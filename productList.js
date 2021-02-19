(function(){

    var mockData = [
        { name: 'Backlit Keyboard', price: '$30.00' , image: 'https://infinitediaries.net/wp-content/uploads/2019/11/wwwA7RII_19_11_07_03853_2000px-Pietrusiewicz.jpg'},
        { name: 'Mechanical Keyboard', price: '$20.00' , image: 'https://infinitediaries.net/wp-content/uploads/2019/06/wwwA7RII_19_05_16_03542_2000px-Pietrusiewicz.jpg'},
        { name: 'Membrane Keyboard', price: '$15.00' , image: 'https://gamecrate.com/sites/default/files/background_image/Logitech-G513-Carbon-review-1_1.jpg'},
        { name: 'Wireless Mouse', price: '$12.00' , image: 'https://image.freepik.com/free-vector/illustration-black-color-shiny-modern-computer-mouse-view-with-realistic-shadow-white-background_251819-1993.jpg'},
        { name: 'Old Wired Mouse', price: '$5.00' , image: 'https://images.summitmedia-digital.com/esquiremagph/images/2021/02/19/computer-mouse-03.jpg'},
        { name: 'Wireless Headphones', price: '$75.00' , image: 'https://assets.sennheiser.com/images/3296/all/square/10319/square_list_zoom_HD_4_40_AE_BT-sennheiser-02-600.jpg'},
        { name: 'Wireless Headset', price: '$13.00' , image: 'http://www.stagedrop.com/images/oklahoma-sound/stagedrop-LWM-7.jpg'},
        { name: 'Wireless Microphone', price: '$23.00' , image: 'http://www.stagedrop.com/images/oklahoma-sound/OS-LWM-5-vert.jpg'},
        { name: 'Desk Microphone', price: '$64.00' , image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Yeti-USB-Microphone.jpg'},
        { name: 'Wired Microphone', price: '$18.00' , image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/USB-Microphone.jpg'},
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
                    '<div class="desc">' + data.price + '</div>' +
                 '</div>'
            );
		});
		// Set the contents of the table body to the new set of rendered HTML rows
		item.forEach(function (text) {
			itemSet.innerHTML += text; // += adds to HTML instead of overwriting it entirely.
		});
    }

    renderList(mockData);
})();
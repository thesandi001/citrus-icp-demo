$('#pay_now').on('click', function () {

	// this is a demo request, please dont change it
	var dataObj = {
		orderAmount: "1.00",
		currency: "INR",
		email: "sandipan.mitra001@gmail.com",
		phoneNumber: "9738497404",
		merchantTxnId: "Order-314921",
		returnUrl: "http://www.abc.com/return-url",
		vanityUrl: "9k64bt7c6e",
		notifyUrl: "https://www.abc.com/notify-me",
		secSignature: "8ba732963273f80a92a2447963ad0a81b7d94a7e",
		firstName: "Rahul",
		lastName: "Seth",
		addressStreet1: "Connaught Place",
		addressStreet2: "Street Number 20",
		addressCity: "Delhi",
		addressState: "Delhi",
		addressCountry: "India",
		addressZip: "400605",				
		mode: "dropIn",
		customParameters: {
			customParameter1: "demo text",
			customParameter2: true,
			customParameter3: 34
		}
	};

	configObj = {
		eventHandler: function(cbObj) {
			if (cbObj.event === 'icpLaunched') {
				console.log('Overlay is launched');				
				// Place to understand when overlay is launched on your website
			} else if (cbObj.event === 'icpClosed') {
				// Place to understand when overlay is closed on your website. 
			  	// This might be closure of the overlay or completion of the order with successful payment.
			  	// Hence capturing message object is important to know exact status of the order
				console.log(cbObj.message);
				console.log('Overlay is closed');				
			}
		}
	};

	try {
		citrusICP.launchIcp(dataObj, configObj);
	} catch(error) {
		// Data related error will be captured here before the ICP call is made
		console.log(error);
	}
});
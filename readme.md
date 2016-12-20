This Library attempts to give a demo integration of Citrus ICP (In-Context Payment) integration

##Installation
Just a simple plug and play, open the index.html file in browser, click on the PAY NOW button to execute ICP

##Parameters to pass

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
mode: "dropIn"

##Custom Parameters (passed back in response)
customParameters: {
	customParameter1: "demo text",
	customParameter2: "true",
	customParameter3: "34"
}

*Note: customParameter1,customParameter2,customParameter3 are predefined variables via citrus merchant admin dashboard

##Success Response
{
  "TxGateway": "MIGS PG (Citrus Plus)",
  "TxId": "Order123",
  "TxMsg": "Transaction Successful",
  "TxRefNo": "CTX1612131032339672440",
  "TxStatus": "SUCCESS",
  "addressCity": "Bengaluru",
  "addressCountry": "India",
  "addressState": "Karnataka",
  "addressStreet1": "5th Cross Road",
  "addressStreet2": "Landmark - something",
  "addressZip": "560008",
  "amount": "1.00",
  "authIdCode": "507653",
  "cardCode": "",
  "cardHolderName": "sand man",
  "cardType": "VISA",
  "currency": "INR",
  "dccAmount": "",
  "dccCurrency": "",
  "dccOfferId": "",
  "eci": "",
  "email": "sandipan.mitra001@gmail.com",
  "encryptedCardNumber": "",
  "errorMsg": "",
  "exchangeRate": "",
  "expiryMonth": "",
  "expiryYear": "",
  "firstName": "sandipan",
  "impsMmid": "",
  "impsMobileNumber": "",
  "isCOD": "",
  "isSuccess": "true",
  "issuerRefNo": "634821507653",
  "lastName": "mitra",
  "maskedCardNumber": "412345XXXXXX2349",
  "mcpAmount": "",
  "mcpCurrency": "",
  "mobileNo": "9738497404",
  "offerExchangeRate": "",
  "paymentMode": "CREDIT_CARD",
  "paymentSource": "",
  "pgRespCode": "0",
  "pgTxnNo": "2000017031",
  "pgUsed": "",
  "requestedAmount": "",
  "requestedCurrency": "",
  "signature": "75043338a794d37d8489256624f1550866c34adc",
  "sourceType": "",
  "transactionId": "1142722",
  "txn3DSecure": "",
  "txnDateTime": "2016-12-13 15:13:23",
  "txnType": "SALE",
  "vanity": "9k64bt7c6e",
  "walletAddress": "",      
}

##Failure Response
{
	"NitroForward":"true"
	"ReturnUrl":"http:/abc.com/returnUrl"
	"TxId":"Order123"
	"TxMsg":"Overlay closed by consumer"
	"TxRefNo":"CTX1612200703573640631"
	"TxStatus":"CANCELED"
	"amount":"1"
	"authIdCode":""
	"currency":"INR"
	"email":"jhsbd@AD.COM"
	"impsMmid":""
	"impsMobileNumber":""
	"isCOD":false
	"issuerRefNo":""
	"mobileNo":"9876543210"
	"pgRespCode":"3"
	"pgTxnNo":""
	"signature":"ee431792a724963c720eab7445580f2697d4e6b3"
	"txnDateTime":"2016-12-20 10:30:50"
}
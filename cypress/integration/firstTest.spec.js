///<reference types="Cypress"/>
import { mobileReplenishment } from "..//support/pages/mobileReplenishment"
import { transfers } from "..//support/pages/transfers"
import { basePage } from "..//support/pages/basePage"


it('Replenishment of Ukraine mobile phone number',() => {
   basePage.open('https://next.privat24.ua/mobile?lang=en')
   mobileReplenishment.typePhoneNumber('686979712')
   basePage.typeAmount(1)
   basePage.typeDebitCardData('4552331448138217','0524','111')
   basePage.submitPayment()
   mobileReplenishment.checkDebitCard('4552 **** **** 8217')
   cy.wait(2000)
   mobileReplenishment.checkDebitAmount('1','UAH')
   mobileReplenishment.checkDebitAmountCommission('2')
   mobileReplenishment.checkPaymentCurrency('UAH')
   cy.contains('Pay').click()
})

it('Money transfer between foreign cards',() => {
   basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
   cy.wait(1000)
   basePage.typeDebitCardData('4552 3314 4813 8217','0524','111')
   transfers.typeDebitNameAndSurname('Shayne','McConnell')
   transfers.typeDebitReceiverCard('5309233034765085')
   basePage.typeAmount('500')
   transfers.typeComment('Cypress Test')
   basePage.submitPayment()
   transfers.checkDebitAndReceiverCard('4552 3314 4813 8217','5309 2330 3476 5085')
   transfers.checkDebitAmountandTotal('500 UAH','598.59')
   transfers.checkDebitCommission('98.59 UAH')
   transfers.checkReceiverName('UNDEFINED UNDEFINED')
   transfers.checkReceiverAmount('500 UAH')
   transfers.checkComment('Cypress Test')   
})


//Example HTTP GET Request
it('Example sending the GET request',() => {
   cy.request('https://next.privat24.ua')
      .then((response) => {
         console.log(response)
      });
});


//Example HTTP GET Request with EXPECT verification of Response
it('Example sending the POST request',() => {

   const requestBody = {
      action:"info",
      phone:"+380686979712",
      amount:50,
      currency:"UAH",
      cardCvv:"111",
      card:"4552331448138217",
      cardExp:"0526",
      xref:"2408e61d4af92112c167028baf952812",
      _:1650539472078
   }

   const headersData = {
      cookie: 
      "_ga=GA1.2.1098993894.1649770114; _gid=GA1.2.837322655.1650463714; pubkey=3ad8bcb7ada62ed5ddfa68bf5543e4dd; lfp=4/12/2022, 3:28:46 PM; pa=1650129205588.72580.12617870224446492next.privat24.ua0.9164022743298901+13; fp=45"
   };

   cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: headersData,
   }).then((response) => {
      expect(response).to.have.property('status').to.equal(200)
      expect(response.body).to.have.property('status').to.equal("success")
      expect(response.body.data).to.have.property('amount').to.equal("50.0")
      console.log(response)
   });
});


//Example HTTP GET Request with SHOULD verification of Response
it('Example sending the POST request',() => {

   const requestBody = {
      action:"info",
      phone:"+380686979712",
      amount:50,
      currency:"UAH",
      cardCvv:"111",
      card:"4552331448138217",
      cardExp:"0526",
      xref:"2408e61d4af92112c167028baf952812",
      _:1650539472078
   }

   const headersData = {
      cookie: 
      "_ga=GA1.2.1098993894.1649770114; _gid=GA1.2.837322655.1650463714; pubkey=3ad8bcb7ada62ed5ddfa68bf5543e4dd; lfp=4/12/2022, 3:28:46 PM; pa=1650129205588.72580.12617870224446492next.privat24.ua0.9164022743298901+13; fp=45"
   };

   cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: headersData,
   }).its('body').should('contain', {
         status: "success"
   }).its('data').should('contain', {
         amount:"50.0"
   })
});



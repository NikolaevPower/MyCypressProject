export class MobilePhoneReplenishment {
   typePhoneNumber(PhoneNumber) {
      cy.get('[data-qa-node="phone-number"]')
         .type(PhoneNumber)
   }

   typeAmount(amount) {
      cy.get('[data-qa-node="amount"]')
         .type(amount)
   }

   typeDebitCardData(cardNumber, expDate, cvv) {
      cy.get('[data-qa-node="numberdebitSource"]')
         .type(cardNumber)
         .get('[data-qa-node="expiredebitSource"]')
         .type(expDate)
         .get('[data-qa-node="cvvdebitSource"]')
         .type(cvv)
   }

   submitPayment() {
      cy.get('button[type="submit"]')
         .click()
   }

   checkDebitCard(debitCard) {
      cy.get('[data-qa-node="card"]')
         .should('have.text', debitCard)
   }

  checkDebitAmount(debitAmount) {
   cy.get('[data-qa-node="amount"]')
      .should('contain.text', debitAmount)
  }

  checkDebitAmountCommission(debitCommission) {
   cy.get('span[data-qa-node="commission"]')
      .should('have.text', debitCommission)
  }

  checkPaymentCurrency(paymentCurrency) {
   cy.get('span[data-qa-node="commission-currency"]')
      .should('contain.text', paymentCurrency)
  }
}

export const mobileReplenishment = new MobilePhoneReplenishment()

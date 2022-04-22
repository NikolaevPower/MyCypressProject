export class Transfers {

   typeDebitNameAndSurname(name, surname) {
      cy.get('[data-qa-node="firstNamedebitSource"]')
         .type(name)
         .get('[data-qa-node="lastNamedebitSource"]')
         .type(surname)
   }

   typeDebitReceiverCard(receiverCard) {
      cy.get('[data-qa-node="numberreceiver"]')
         .type(receiverCard)
   }

   typeComment(comment) {
      cy.get('[data-qa-node="toggle-comment"]')
      .click()
      .get('[data-qa-node="comment"]')
      .type(comment)
   }

   checkDebitAndReceiverCard(debitCard, receiverCard) {
      cy.get('[data-qa-node="payer-card"]')
         .should('have.text', debitCard)
         .get('[data-qa-node="receiver-card"]')
         .should('have.text', receiverCard)
   }

   checkDebitAmountandTotal(debitAmount, totalAmount) {
      cy.get('[data-qa-node="payer-amount"]')
         .should('have.text', debitAmount)
         .get('.total_Gep8WAZQ3T > .sc-chPdSV')
         .should('contains.text', totalAmount)
   }

   checkDebitCommission(commission) {
      cy.get('[data-qa-node="payer-currency"]')
         .should('have.text', commission)
   }
   
   checkReceiverName(receiverName) {
      cy.get('[data-qa-node="receiver-name"]')
         .should('have.text', 'UNDEFINED UNDEFINED')
   }

   checkReceiverAmount(receiverAmount) {
      cy.get('[data-qa-node="receiver-amount"]')
         .should('have.text', receiverAmount)
   }

   checkComment(comment) {
      cy.get('[data-qa-node="comment"]')
         .should('have.text', comment)
   }
}

export const transfers = new Transfers()
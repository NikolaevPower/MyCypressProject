export class ArchivePage {
   selectAchiveMenu() {
      cy.get('[data-qa-node="menu"]')
         .eq(2)
         .click()
   }
}

export const archivePage = new ArchivePage
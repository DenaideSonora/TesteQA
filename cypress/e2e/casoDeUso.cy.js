describe('Acesso ao E-Inscrição', () => {
  beforeEach(() => {
    cy.visit('https://checkout.einscricao.app//?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev')
    cy.contains("Inscrições")
  })  
    
    it('Preenchimento dos Campos', () => {
        cy.get('[tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.get('.MuiButton-label').click()
        cy.get(':nth-child(4) > .MuiButtonBase-root-279 > .MuiButton-label-253').click()
        cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').click().type("Denaide Sonora")
        cy.get('.MuiSelect-root').select("CPF")
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click().type("024.922.380-59")
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').click().type("denysonora@gmail.com")
        cy.get('.MuiButton-label').click()
        cy.get('[style="position: relative; display: inline-block; width: auto;"] > .MuiButtonBase-root > .MuiButton-label').click()

    })

    })
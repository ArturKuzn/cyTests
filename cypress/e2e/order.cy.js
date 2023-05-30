/// <reference types="cypress"/>
import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";


describe('Purchase test', () => {

      it('Order test', () => {
        
        function orderProduct (product) {

            homePage.visit();
            cy.log(`Order: ${product}`)

            cy.get('.search-query')
            .type(product)
            .siblings('div')
            .click();
    
            cy.get('.breadcrumb')
            .should('contain' , product);
    
            cy.contains('Add to Cart').click();
    
            cy.get('.topcart .label')
            .should('contain' , '1');
    
            cy.get('#cart_checkout2').click();
    
            loginPage.submitLoginForm('testusernew1234567', 'verySecurePassword');
    
            cy.get('.confirm_products')
            .should('contain' , product);
    
            cy.get('#checkout_btn').click();
    
            cy.get('.topcart .label')
            .should('contain' , '0');
    
            cy.get('.breadcrumb')
            .should('contain' , 'Success');
    
            cy.get('.maintext')
            .should('contain', ' Your Order Has Been Processed!')
            .children()
            .should('have.class', 'fa-thumbs-up');
        }

      orderProduct('Acqua Di Gio Pour Homme')


      })


    })
///<reference types="cypress"/>

import user from '../fixtures/user.json'
import homePage from "../support/pages/HomePage";
import {loginViaApi} from '../support/helper'

beforeEach('Login', () => {
    loginViaApi(user)

})

describe('Purchase test', () => {

    it('Order test', () => {
      
     const product = 'Acqua Di Gio Pour Homme'

          homePage.visit();
        
          cy.get('div.menu_text').should('contain', `Welcome back ${user.firstName}`)
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


    })


  })



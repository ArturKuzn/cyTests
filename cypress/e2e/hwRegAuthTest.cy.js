/// <reference types="cypress"/>

import {faker} from "@faker-js/faker"

import {login} from '../support/helper.js'

describe('Registration and authorization tests', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('#customer_menu_top a').click();
      })
  
  
      it('Registration negative test', () => {
  
        cy.get('[title="Continue"]').click();
        cy.get('[title="Continue"]').click();
        cy.get('.alert-danger')
        .should('contain', 'Error: You must agree to the Privacy Policy!')
        .and('have.css', 'background-color', 'rgb(242, 222, 222)');
      
  
        function checkRequiredFields(fieldName, id, errorMessage, color = 'rgb(169, 68, 66)', color2 = 'rgb(255, 0, 0)') {
          cy.get(`div.form-group.has-error:contains("${fieldName}")`)
            .should('contain', errorMessage)
            .find(`.control-label:contains("${fieldName}")`)
            .should('have.css', 'color', color)
            .siblings()
            .children(`#${id}`)
            .should('have.css', 'border-color', color)
            .siblings()
            .should('have.css', 'border-color', color)
            .children()
            .should('have.class', 'required')
            .and('have.css', 'color', color2);
        }
  
        const requiredFields = [
            { fieldName: 'First Name', id : 'AccountFrm_firstname', errorMessage :'First Name must be between 1 and 32 characters!' },
            { fieldName: 'Last Name', id : 'AccountFrm_lastname', errorMessage : 'Last Name must be between 1 and 32 characters!' },
            { fieldName: 'E-Mail', id : 'AccountFrm_email', errorMessage : 'Email Address does not appear to be valid!' },
            { fieldName: 'Address 1', id : 'AccountFrm_address_1', errorMessage : 'Address 1 must be between 3 and 128 characters!' },
            { fieldName: 'City', id : 'AccountFrm_city', errorMessage : 'City must be between 3 and 128 characters!'},
            { fieldName: 'Region / State:', id : 'AccountFrm_zone_id', errorMessage :'Please select a region / state!' },
            { fieldName: 'ZIP Code:', id : 'AccountFrm_postcode', errorMessage :'Zip/postal code must be between 3 and 10 characters!' },
            { fieldName: 'Login name:', id : 'AccountFrm_loginname', errorMessage :'Login name must be alphanumeric only and between 5 and 64 characters!' },
            { fieldName: 'Password:', id : 'AccountFrm_password', errorMessage :'Password must be between 4 and 20 characters!' }
      
  
        ]
        requiredFields.forEach(({fieldName, id, errorMessage }) => {
            checkRequiredFields(fieldName, id, errorMessage);
        });
      }) 
  
      const user = [
        { locator: '#AccountFrm_firstname', value: faker.person.firstName() },
        { locator: '#AccountFrm_lastname', value: faker.person.lastName() },
        { locator: '#AccountFrm_email', value: faker.internet.email() },
        { locator: '#AccountFrm_address_1', value: faker.location.street() },
        { locator: '#AccountFrm_city', value: faker.location.city() },
        { locator: '#AccountFrm_postcode', value: faker.location.zipCode()},
        { locator: '#AccountFrm_loginname', value: faker.internet.userName() },
        { locator: '#AccountFrm_password', value: faker.internet.password({ length: 20 }) },
      ]; 
  
      it.skip('Registration positive test', () => {
  
        cy.get('[title="Continue"]').click();
       
        function fillFields(locator, value) {
          cy.get(locator).type(value);
        }
        
  
        user.forEach(({locator, value }) => {
            fillFields(locator, value);
        });
        cy.get('#AccountFrm_confirm').type(user[7].value)
        cy.get('#AccountFrm_zone_id').select('3522')
        cy.get('#AccountFrm_agree').check();
        cy.get('[title="Continue"]').click();
  
        cy.get('.maintext')
        .should('contain', ' Your Account Has Been Created!')
        .children()
        .should('have.class', 'fa-thumbs-up');
  
        cy.get('.mb40')
        .should('contain', 'Congratulations! Your new account has been successfully created!'); 
  
        cy.get('[title="Continue"]').click();
  
  
        cy.get('.subtext')
        .should('contain', user[0].value);


        cy.clearAllCookies();

        login(user)
  
      })
  
  
      it.skip('Authorization test', () => {
  
        cy.get('#loginFrm_loginname').type(user[6].value);
        cy.get('#loginFrm_password').type(user[7].value);
  
        cy.get('[title="Login"]').click();
  
        cy.get('.maintext')
        .should('contain', ' My Account')
        .children()
        .should('have.class', 'fa-user');
  
        cy.get('.subtext')
        .should('contain', user[0].value);
      
      })
  
  
  }) 
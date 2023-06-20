/// <reference types="cypress"/>

describe('Search/navigation test', () => {

        
     


    it.skip('Search test', () => {
      cy.visit('/');
      cy.get('[placeholder="Search Keywords"]').type('E');
      cy.get('.fa-search').click();


     

    //   function findNewProd(product) {
    //     cy.get('ul.pagination a').then(pages => {
    //       for(let i = 1; i < pages.length, i++;) {
    //         cy.location().then( location => {
    //             if (!location.search.includes('product/product')){
    //                 cy.get('body').then(body => {
    //                     if (body.find(`.prdocutname[title="${product}`).length > 0){
    //               cy.get(`.prdocutname[title="${product}`).click()
    //                     } else {
    //               cy.get('ul.pagination a').contains('>').click()
    //                     }
    //                   })
    //             }
    //         })
          
    //       }
    
    //     })
    //   }

      
    //   findNewProd('The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life')
  
    function searchProduct (product) {
        
        for (let page = 2; page <= 5; page++) {
            cy.location().then( location => {
                if (!location.search.includes('product/product')){
                    cy.get('.fixed').then (element => {
                        if(element.find(`a:contains(${product})`).length != 0 ) {
                          cy.get(`.fixed a:contains(${product})`).click();
                          cy.get('.breadcrumb').should('contain' , product); 
                        } else {
                          cy.get('ul.pagination').contains(page).click()
                        } 
                         })
                }})
         
    }

      }

      
searchProduct('Men+Care Clean Comfort Deodorant')
  




    })





})
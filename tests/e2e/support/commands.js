Cypress.Commands.add('submitSearchForm', (searchTerm) => {
    if (searchTerm) {
        cy.get('[data-test="search_form_input"]').type(searchTerm);
    }
    cy.get('[data-test="search_form"]').submit();
});

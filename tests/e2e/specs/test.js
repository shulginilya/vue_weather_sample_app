describe("Weather app e2e", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("check if error handling works::empty search", () => {
		cy.submitSearchForm();
		cy.get('[data-test="error_block"]').should('be.visible');
	});
	it("check if error handling works::invalid geo location", () => {
		cy.fixture('config').then(c => {
			cy.submitSearchForm(c.failingSearchTerm);
			cy.get('[data-test="error_block"]').should('be.visible');
		});
	});
	it("check if geo valid location gives back forecast data", () => {
		cy.submitSearchForm('Berlin');
		cy.get('[data-test="weather_info_headline"]').should('be.visible').get('[data-test="weather_info_body"]').should('be.visible');
	});
});

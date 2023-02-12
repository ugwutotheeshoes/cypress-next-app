describe("End to end Testing", () => {
  it("should navigate to the about page", () => {
    cy.visit("https://localhost:3000");
    cy.get('a[href*="about"]').click();
  });

  it("should include '/about' route", () => {
    cy.visit("https://localhost:3000");
    cy.url().should("include", "/about");
  });
});

//end to end is like the interaction with the app like if i click a button or what path it will give


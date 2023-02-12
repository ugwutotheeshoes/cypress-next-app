describe("Unit Testing", () => {
  it("finds the baseUrl", () => {
    cy.visit("http://localhost:3000/");
  });

  it("to compare different baseUrls", () => {
    expect("baseUrl      http://localhost:3000/").to.not.equal(
      "http://localhost:3000/"
    );
  });
});

describe("Integration Testing", () => {
  it("the link should have a classname of 'btn-primary'", () => {
    cy.get('a[href*="about"]').should("have.class", "btn-primary");
  });

  it("to compare different baseUrls", () => {
    cy.get('a[href*="about"]').contains("Click here to go to the About page");
  });
});


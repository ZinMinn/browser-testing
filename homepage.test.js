const puppeteer = require("puppeteer");

//tet pageHeaderValue
test("Confirm text on page", async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();

    await page.goto("http://localhost:9000");

    let pageHeader = await page.$("#pageTitle");
    let pageHeaderValue = await pageHeader.evaluate((el) => el.textContent);

    expect(pageHeaderValue).toContain("Welcome to the demo Web Page");

    let pageParagraph = await page.$("#pageParagraph");
    let pageParagraphValue = await pageParagraph.evaluate(
      (el) => el.textContent
    );

    expect(pageParagraphValue).toContain(
      "This is a sample text in a paragraph on the page"
    );
  } finally {
    await browser.close();
  }
}, 120000);

//test case to test the form behavior
test("Confirm form submission output", async () => {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
  
      await page.goto("http://localhost:9000");
  
      await page.type("#userEmail", "test@company.com");
      await page.click("#submitButton");
  
      let emailContainer = await page.$("#infoDisplay");
      let value = await emailContainer.evaluate((el) => el.textContent);
  
      expect(value).toContain("test@company.com");
    } finally {
      await browser.close();
    }
  }, 120000);
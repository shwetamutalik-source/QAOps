const {test} = require('@playwright/test');

test.only('My first Playwright Test',async({browser})=>{

    const context= await browser.newContext()
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

});

test('page playwright test',async({page})=>{

await page.goto("https://google.com")

});
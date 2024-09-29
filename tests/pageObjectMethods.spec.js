import { expect, test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
  //goto https://practice.cydeo.com/
  await page.goto('https://practice.cydeo.com/');

  //get the title of the page
  let actualTitle = await page.title();

  console.log(actualTitle);

  //expect the title to be "Cydeo Practice"
  //expect(actualTitle).toBe("Cydeo Practice");
});

test("Getting the correct URL of the page", async ({ page }) => {
    //goto https://practice.cydeo.com/
    await page.goto('https://practice.cydeo.com/');

    //get the URL of the page
    let actualURL = page.url();

    console.log(actualURL);

  });

test("Set the window size", async ({ page }) => {
    
    await page.setViewportSize({ width: 1800, height: 1000 });

    await page.goto('https://practice.cydeo.com/');
    
  });  
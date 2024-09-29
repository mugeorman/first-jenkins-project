import { test } from '@playwright/test';

test.describe('@tagNameTest Group', () => {

    test.beforeEach( async ({ page }) => { 
        //goto https://practice.cydeo.com/
        await page.goto('https://practice.cydeo.com/');
    });

  
    test("Getting the title of the page", async ({ page }) => {
    //get the title of the page
    
    console.log(await page.title());
  });

  
    test("Getting the correct URL of the page", async ({ page }) => {
    //get the URL of the page
    
    console.log(page.url());
  });

});
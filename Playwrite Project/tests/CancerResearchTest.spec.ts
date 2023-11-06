import { test, expect, Page } from '@playwright/test';

import yourDonationPage from "../pages/yourDonationPage";
import detailsPage from "../pages/detailsPage";
import paymentPage from "../pages/paymentPage";

const testData = JSON.parse(JSON.stringify(require('../utils.ts/DataFile.json')));




test.use({
  // set the base site url from env
  baseURL: "https://" + process.env.CRUK_HOSTNAME as string,
 
});

test.describe.serial('User Account tests', () => {
  let page: Page;
  
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });
  
  test('welcome & tagline are displayed', async () => {
    //await page.goto('/');
    await page.goto("https://app.pws.int.cruk.org/support-us/your-donation");
  
   
  });

  test('Test to verify Donation Page ', async ()=> {
     
    //Donation Page
    const yourDonation = new yourDonationPage(page);
    await yourDonation.handleCookies();
    await page.waitForTimeout(5000);
    await yourDonation.TopHeader();
    await yourDonation.StepperBar();
    await yourDonation.Donationamount();
    await yourDonation.DonationType();
    await yourDonation.YourMotivation();
    await yourDonation.WhereYourDonationGoes();
    await yourDonation.Continue();

    const details = new detailsPage(page);
    await details.veirfyPageURLandDetails();
    await details.YourDetails();
    await details.continueOnDetailsPage();


    const payment = new paymentPage(page);
    await payment.veirfyPageURLandDetails();
    await payment.donationMode();
    await payment.Creditcardinfo();

   })




});
//Credit / Debit card

//await page.waitForTimeout(5000);
 //  "cardNumber":"4000000000001000",
  //  "cvv":"123",
  //  "cardExpiry":"1225",
  //  "giftaid":"yes"
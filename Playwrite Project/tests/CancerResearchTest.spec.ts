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
    await payment.Cerdeitcarinfo();

   })

//    test('Verify Header Text', async ()=>
// //Verify header text
//  {
//   const yourDonation = new yourDonationPage(page);
//   await yourDonation.TopHeader();

// });

// test('User verify Stepper Bar on Donation Page', async () => { 

//   const yourDonation = new yourDonationPage(page);
//   await yourDonation.StepperBar();
 
// });
  
// test('User choose £10 for Donation', async () => { 
//   //Donation amount header is visible

//   const yourDonation = new yourDonationPage(page);
//   await yourDonation.Donationamount();

// });
// test('User verify and choose type of donation', async () => { 

//   const yourDonation = new yourDonationPage(page);
//   await yourDonation.DonationType();
  
// });
//   test('User choose motivation behind donation', async () => { 
//     const yourDonation = new yourDonationPage(page);
//     await yourDonation.YourMotivation();

//   });
//   test('User verify where your donation goes', async () => { 

//     //verify Where your donation goes header
//     const yourDonation = new yourDonationPage(page);
//     await yourDonation.WhereYourDonationGoes();
    
//   });
    
//   test('User clicks on Continue button', async () => { 
//     //click on Continue button

//     const yourDonation = new yourDonationPage(page);
//     await yourDonation.Continue()
//   });
  
//   // Page 2 -  Detail Page
//   test('User verify URL & Header on Details Page', async () => {

//     // //verify user navigates to Details Page

//     const details = new detailsPage(page);
//     await details.veirfyPageURLandDetails()
    

//   });


//   test('User enters personal details', async () => { 

//     const details = new detailsPage(page);
//     await details.YourDetails()
  

   
//   });

//   test('Clicks on continue button on Details page', async () => { 

//     const details = new detailsPage(page);
//     await details.continueOnDetailsPage()
//   });
   
//          //PAYMENT PAGE

//     test('Verify url and donation amount on Payment Page ', async () => { 
//       const payment = new paymentPage(page);
//       await payment.veirfyPageURLandDetails()
    
//   });
   
//   test('Payment by credit card', async () => { 

   
//     await page.waitForTimeout(5000);
//     const payment = new paymentPage(page);
//     await payment.donationMode()
    
//   });


});
//Credit / Debit card

//await page.waitForTimeout(5000);
 //  "cardNumber":"4000000000001000",
  //  "cvv":"123",
  //  "cardExpiry":"1225",
  //  "giftaid":"yes"
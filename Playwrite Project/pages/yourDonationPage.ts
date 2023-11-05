import { expect,Page } from "@playwright/test";

export default class yourDonationPage {


    constructor(public page:Page){

    }

    async handleCookies ()
    {
    await expect(this.page.locator('#onetrust-policy-title').filter({hasText: 'How we use cookies'})).toBeVisible();
    await expect(this.page.locator('#onetrust-pc-btn-handler').filter({ hasText: '› Manage cookies' })).toBeVisible();
    await expect(this.page.locator('#onetrust-accept-btn-handler').filter({ hasText: '✓ OK, continue to site' })).toBeVisible();
    await this.page.getByRole('button', { name: '✓ OK, continue to site', exact: true }).click();
    }

    async TopHeader ()
    {
        await expect(this.page.locator('.sc-jdAMXn jgvmVh').filter({ hasText: 'Together we will beat cancerS' })).toBeVisible
        await expect(this.page.locator('.IntroBanner__IntroText-sc-q8n3f9-2 kdkWCH').filter({ hasText: 'You are doing something amazing.' })).toBeVisible
    }

    async StepperBar()
    {
        var headerSteps = await this.page.locator('.ProgressBar__StepContainer-sc-1qj8iat-1');

        await expect(headerSteps.locator(".sc-bZnhIo .sc-iTONeN  .sc-cTQhss")).toHaveCount(4);
      
        await expect(headerSteps.locator('.sc-cTQhss').nth(0)).toHaveText("Donation");
        await expect(headerSteps.locator('.sc-cTQhss').nth(1)).toHaveText("Details");
        await expect(headerSteps.locator('.sc-cTQhss').nth(2)).toHaveText("Payment");
        await expect(headerSteps.locator('.sc-cTQhss').nth(3)).toHaveText("Thank you");   
    }

    async Donationamount()
    {
         await expect(this.page.locator('.sc-jSMfEi').filter({ hasText: 'Donation Amount'})).toBeVisible;

        //User clicks on £10 for donation
        await this.page.locator('#amount10').click(); 
    }
    async DonationType()
    {
          //verify Donation type header
         expect(this.page.locator('.sc-jSMfEi kfhRUk').filter({ hasText: 'Donation type'})).toBeVisible
         //Click on I'm donating my own money
         await this.page.getByLabel('Please choose your donation type. (required)').locator('span').first().click();
    }


    async YourMotivation()
    {
        //Verify Your Motivation Header
        expect(this.page.locator('.sc-cxabCf cYrKJr').filter({ hasText: 'Your motivation'})).toBeVisible

        //Click dropdown 
        await this.page.locator('.sc-cxabCf').click();

       //motivation of donation "In memory of someone is selected"
       await this.page.locator(".sc-cxabCf").selectOption('In memory of someone');
    }

    async WhereYourDonationGoes()
    {
        expect(this.page.locator('.sc-jSMfEi kfhRUk').filter({ hasText: 'Where your donation goes'})).toBeVisible
        await this.page.locator('//*[@id="destinationRadioGroup"]/div[1]/label/div[2]/span').click();
    }

    async Continue()
    {
        await this.page. getByRole('button', { name: 'Continue' }).nth(0).click();
    }
}
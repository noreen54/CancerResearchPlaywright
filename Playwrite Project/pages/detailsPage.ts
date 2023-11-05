import { expect,Page } from "@playwright/test";
const testData = JSON.parse(JSON.stringify(require('../utils.ts/DataFile.json')));

export default class detailsPage {


    constructor(public page:Page){

    }
    async veirfyPageURLandDetails()
    {
            //verify user navigates to Details Page
            await expect(this.page, "Details page").toHaveURL('https://app.pws.int.cruk.org/support-us/details', { timeout: 10 * 1000 });           
    
            //verify Detail page header
            expect(this.page.locator('.sc-gsnTZi').filter({ hasText: 'Your details'})).toBeVisible
    }

    async YourDetails()
    {
            //select Title
            //Click dropdown 
            await this.page.locator('.sc-cxabCf').click();
            //select Title Dr
            await this.page.locator(".sc-cxabCf").selectOption('dr');
            //Enter firstname
            await this.page.locator('#forename').fill(testData.firstname);
            // Enter surname
            await this.page.locator('#surname').fill(testData.lastname); 
            //Enter Email ID
            await this.page.locator('#emailAddress').fill(testData.email);
            //Enter Telephone number
            await this.page.locator('#phoneNumber').fill(testData.phone);
            //click on find address
            await this.page. getByRole('button', { name: 'Enter address manually' }).click();
            //Enter 1st line of address
            await this.page.locator("//input[@name='addressLine1']").fill(testData.homeAddress.address1);           
            //Enter 2nd line of address - null
            await this.page.locator("//input[@name='addressLine2']").fill(testData.homeAddress.address2);
            //Enter 3rd line of address - null
            await this.page.locator("//input[@name='addressLine3']").fill(testData.homeAddress.address3);
            //Enter Town/City 
            await this.page.locator("//input[@name='city']").fill(testData.homeAddress.town);
            //Enter Postcode 
            await this.page.locator("//input[@name='postalCode']").fill(testData.homeAddress.postcode);

            //select country - UK

            //Click dropdown 
            await this.page.locator('#country').click();
            //select United Kingdom from the list
            await this.page.locator("#country").click(testData.homeAddress.country);
            //select Optin for marketing by Email 
            await this.page.locator(".sc-bBrHrO").first().click(testData.homeAddress.emailOptIn);
            //Change your mind text validation
            expect(this.page.locator('.OptIn__JoinUsText-sc-177kya2-2').filter({ hasText: 'Change your mind at any time'})).toBeVisible
    }


    async continueOnDetailsPage()
    {
        await this.page.waitForTimeout(5000);
        //click on Continue button
        await this.page.getByRole('button', { name: 'Continue' }).click(); 
        await this.page.waitForTimeout(5000);
    }
}
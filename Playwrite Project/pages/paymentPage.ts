import { expect,Page } from "@playwright/test";
const testData = JSON.parse(JSON.stringify(require('../utils.ts/DataFile.json')));

export default class paymentPage {


    constructor(public page:Page){
    }
    async veirfyPageURLandDetails()
    {
        //validate url of payment page
    await expect(this.page, "Payment page").toHaveURL('https://app.pws.int.cruk.org/support-us/payment', { timeout: 10 * 1000 }); 

    //Varify donation amount on Payment page
     expect(this.page.locator('.sc-jSMfEi').filter({ hasText: 'Donation amount'})).toBeVisible
     expect(this.page.locator('.PaymentSummary__PaymentAmount-sc-vm4e8v-3').filter({ hasText: 'Total: £10.00'})).toBeVisible
    }

    async donationMode()
    {
        
        //verify payment page url
        expect(this.page, "payment Page").toHaveURL('https://app.pws.int.cruk.org/support-us/payment'); 
        
        //Varify 'How would you like to donate?' text
        expect(this.page.locator('.sc-jSMfEi kfhRUk').filter({ hasText: 'How would you like to donate?'})).toBeVisible , {timeout: 10*1000};
        
        //click on credit card as mode of payment
        await this.page.locator('//*[@id="paymentRadioGroup"]/div[1]/label/div[2]/span').click();
        await this.page.waitForTimeout(3000);
    }

    async Creditcardinfo()
    {
        //enter credit card details
        await this.page.locator('#cardholderName').fill(testData.firstname +' '+ testData.lastname);
        //await this.page.waitForTimeout(3000);

         var stripeFrame = this.page.frameLocator('iframe').first();
         await stripeFrame.locator("id=credit-card-number").nth(0).fill((testData.cardNumber));
         //await stripeFrame.locator("id=braintree-hosted-field-expirationDate").nth(1).fill(testData.cardExpiry);

         const expiryDate = await this.page.frameLocator('#braintree-hosted-field-expirationDate').locator('#expiration');
         await expiryDate.fill(testData.cardExpiry);

         const cvv = await this.page.frameLocator('#braintree-hosted-field-cvv').locator('#cvv');
         await cvv.fill(testData.cvv);
         await this.page.waitForTimeout(5000);

          //click on "giftaid":"yes"
         await this.page.locator('#giftAid1').click();
         await this.page.waitForTimeout(5000);
         
         //Click on complete my donation 
         await this.page.getByRole('button', { name: 'Complete my donation' }).click();
         await this.page.waitForTimeout (15000);
         
        //Validate payment confirmation page
        const confirmationMsg = "Thank you"+testData.firstname +"for your donation of £dfghjhghjj"+testData.amount;
        await expect(this.page.getByRole('heading', { name: 'confirmationMsg' })).toBeVisible;
        

    }

}
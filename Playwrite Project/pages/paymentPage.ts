import { expect,Page } from "@playwright/test";

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

    async Cerdeitcarinfo()
    {
        

    }

}
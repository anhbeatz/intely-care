var dataGenerator = require('../utils/dataGenerator.js');
class IntelyCare_PO {
    get firstName() { return $("#input_2"); }
    get lastName() { return $("#input_3"); }
    get mobile() { return $("#input_4"); }
    get zip() { return $("#input_5"); }
    get password() { return $("#input_1"); }
    get email() { return $("#input_0"); }
    get button1() { return $("#AP_FirstPage_CreateAccount"); }
    get button2() { return $("#AP_Basic_Info_continue"); }
    get radio1() { return $("#radio_6"); }
    get radio2() { return $("#radio_7"); }
    get radio3() { return $("#radio_8"); }
    get radio4() { return $("#radio_9"); }
    get radio5() { return $("#radio_10"); }
    get radio6() { return $("#radio_11"); }
    get checkBox1() { return $("md-checkbox[aria-label='Day Checkbox']"); }
    get checkBox2() { return $("md-checkbox[role='checkbox']:nth-child(2)"); }
    get checkBox3() { return $("md-checkbox[role='checkbox']:nth-child(3)"); }
    get checkBox4() { return $("md-checkbox[role='checkbox']:nth-child(4)"); }
    get checkBox5() { return $("md-checkbox[role='checkbox']:nth-child(5)"); }
    get terms() { return $("md-checkbox[aria-label='Checkbox 1'] div[class='md-container md-ink-ripple']"); }
    get successful() { return $("div[class='noMargin'] h3") };

    submit = function(button) { button.click(); }

    async successfulSubmission() {
        await this.firstName.setValue(dataGenerator.generateRandomString());
        await this.lastName.setValue(dataGenerator.generateRandomString());
        await this.mobile.setValue("7589577506)");
        await this.zip.setValue("11212");
        await this.radio1.click();
        await this.radio2.click();
        await this.radio3.click();
        await this.checkBox1.click();
        await this.checkBox2.click();
        await this.checkBox3.click();
        await this.checkBox4.click();
        await this.checkBox5.click();
        await this.radio4.click();
        await this.radio5.click();
        await this.radio6.click();
        await this.terms.click();
        await expect(await this.button2.getAttribute("class")).to.equal("btn success_bttn ng-animate disabled-remove disabled-remove-active");
        await this.submit(this.button2);
        await expect(await this.successful.getText()).to.equal("Confirm your phone number");
    }


}

export default new IntelyCare_PO()
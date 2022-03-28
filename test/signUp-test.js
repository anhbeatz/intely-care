import IntelyCare_PO from '../page-objects/IntelyCare_PO.js';

var dataGenerator = require('../utils/dataGenerator.js');
describe("IntelyCare SingUp Test", () => {
    beforeEach("Should Register with Unique Email&Password, should pass", async function() {
        await browser.setWindowSize(1800, 1200);
        await browser.url("");
        await IntelyCare_PO.email.setValue(dataGenerator.generateRandomEmailAdress());
        await IntelyCare_PO.password.setValue("AlbiAlbi9898");
        await IntelyCare_PO.submit(IntelyCare_PO.button1);

    });

    it("HppyPath,Submit button should be enabled if all fields have values, Should pass", async() => {
        await IntelyCare_PO.successfulSubmission();
    });

    it("Button should be disabled if FirstName is empty, should pass", async() => {
        await IntelyCare_PO.lastName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.mobile.setValue("7589577506");
        await IntelyCare_PO.zip.setValue("11212");
        await IntelyCare_PO.radio1.click();
        await IntelyCare_PO.checkBox1.click();
        await IntelyCare_PO.radio4.click();
        await IntelyCare_PO.terms.click();
        await browser.pause(4000);
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });

    it("Button should be disabled if LastName is empty, should pass", async() => {
        await IntelyCare_PO.firstName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.mobile.setValue("7589577506");
        await IntelyCare_PO.zip.setValue("11212");
        await IntelyCare_PO.radio1.click();
        await IntelyCare_PO.checkBox1.click();
        await IntelyCare_PO.radio4.click();
        await IntelyCare_PO.terms.click();
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });
    it("Button should be disabled if Mobile is empty, should pass", async() => {
        await IntelyCare_PO.firstName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.lastName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.zip.setValue("11212");
        await IntelyCare_PO.radio1.click();
        await IntelyCare_PO.checkBox1.click();
        await IntelyCare_PO.radio4.click();
        await IntelyCare_PO.terms.click();
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });
    it("Button should be disabled if Zip is empty, should pass", async() => {
        await IntelyCare_PO.firstName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.lastName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.mobile.setValue("7589577506");
        await IntelyCare_PO.radio1.click();
        await IntelyCare_PO.checkBox1.click();
        await IntelyCare_PO.radio4.click();
        await IntelyCare_PO.terms.click();
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });
    it("Button should be disabled if none of the radioButtons are clicked, should pass", async() => {
        await IntelyCare_PO.firstName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.lastName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.mobile.setValue("7589577506");
        await IntelyCare_PO.zip.setValue("11212");
        await IntelyCare_PO.checkBox1.click();
        await IntelyCare_PO.radio4.click();
        await IntelyCare_PO.terms.click();
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });
    it("Button should be disabled if none of the CheckBoxes are clicked, should pass", async() => {
        await IntelyCare_PO.firstName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.lastName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.mobile.setValue("7589577506");
        await IntelyCare_PO.zip.setValue("11212");
        await IntelyCare_PO.radio1.click();
        await IntelyCare_PO.radio4.click();
        await IntelyCare_PO.terms.click();
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });
    it("Button should be disabled if none of the radioButtons are clicked, should pass", async() => {
        await IntelyCare_PO.firstName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.lastName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.mobile.setValue("7589577506");
        await IntelyCare_PO.zip.setValue("11212");
        await IntelyCare_PO.radio1.click();
        await IntelyCare_PO.checkBox1.click();
        await IntelyCare_PO.terms.click();
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });
    it("Button should be disabled if TermsAgreement is not checked, should pass", async() => {
        await IntelyCare_PO.firstName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.lastName.setValue(dataGenerator.generateRandomString());
        await IntelyCare_PO.mobile.setValue("7589577506");
        await IntelyCare_PO.zip.setValue("11212");
        await IntelyCare_PO.radio1.click();
        await IntelyCare_PO.checkBox1.click();
        await IntelyCare_PO.radio4.click();
        await expect(await IntelyCare_PO.button2.getAttribute("class")).to.equal("btn success_bttn disabled");
    });
});
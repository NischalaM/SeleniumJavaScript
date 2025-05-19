const{Builder,By,Key,until} = require("selenium-webdriver"); 
let chai = require("chai");
const { expect } = chai;
const { error } = require("console");

describe("Test cases for Windows Handling", () => { 
    let driver;
    before(async function () {
        driver = new Builder().forBrowser("chrome").build();
    });
    after(async function () {
        await driver.quit();
    });

    it("Windows Handling", async function () {
        try {
            await driver.manage().window().maximize();
            await driver.get("https://the-internet.herokuapp.com/");
            await driver.findElement(By.linkText("Multiple Windows")).click();
            await driver.wait(
              until.elementLocated(By.xpath("//div[@class='example']/h3")),
              10000
            );
            let text = await driver
              .findElement(By.xpath("//div[@class='example']/h3"))
              .getText();
            expect(text).to.equal("Opening a new window");
            console.log("'Opening a new window' page is displayed");
            await driver.findElement(By.linkText("Click Here")).click();
            let handles = await driver.getAllWindowHandles();
            // console.log(handles);
            // switch to the new window
            await driver.switchTo().window(handles[1]);
            let newWindowTitle= await driver.getTitle();
            console.log(newWindowTitle);
            expect(newWindowTitle).to.equal("New Window");
            console.log("New Window page is displayed");
        } catch (error) {
            console.error(error);
            throw error;
        }
    });
});
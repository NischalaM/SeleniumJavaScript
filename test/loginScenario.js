const { Builder, By, Key } = require('selenium-webdriver');
let assert = require('assert');
let chai = require('chai');
let should = chai.should();
const { error } = require('console');

async function browserInitialization() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.manage().window().maximize();
        await driver.get("https://practicetestautomation.com/practice-test-login/");
        await driver.sleep(2000);
        await driver.findElement(By.id("username")).sendKeys("student", Key.RETURN);
        await driver.findElement(By.id("password")).sendKeys("Password123", Key.RETURN);
        await driver.findElement(By.id("submit")).click();
        // built in  node assertions in JS
        let expectedresult = "Logged In successfully";
        let actualresult = await driver.findElement(By.xpath("//h1[@class='post-title']")).getAttribute("innerHTML");
        console.log(actualresult);
        assert.strictEqual(actualresult, expectedresult);
        // Using Chai Assertion Library
        if (actualresult.should.equal(expectedresult))
            console.log(" Login Successful");
        else
            console.log("Login Failed");
        if (await driver.findElement(By.xpath("//*[contains(text(),'Log out')]")).isDisplayed()) {
            console.log("Log out button is displayed");
            await driver.findElement(By.xpath("//*[contains(text(),'Log out')]")).click();
        } else {
            console.log("Log out button is not displayed");
        }
    }
    catch (error) {
        console.log("Error occurred: " + error);
    }
    finally{
        await driver.quit();
    }
    // driver.quit();
}

browserInitialization();
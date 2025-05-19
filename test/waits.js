const { Builder, By, Key } = require('selenium-webdriver');
let assert = require('assert');
let chai = require('chai');

async function initiationofBrowser() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        driver.manage().window().maximize();
        driver.get("https://practicetestautomation.com/practice-test-login/");
        await driver.manage().setTimeouts({ implicit: 1000 });
        await driver.findElement(By.id("username")).sendKeys("student", Key.RETURN);
        await driver.findElement(By.id("password")).sendKeys("Password123", Key.RETURN);
        await driver.findElement(By.id("submit")).click();
        let text = await driver.findElement(By.xpath("//h1[@class='post-title']")).getAttribute("innerHTML");
        // await driver.wait(until.elementisHig
    }


    catch (error) {
        console.error(error);
    }
    finally {
        await driver.quit();
    }
}
initiationofBrowser();
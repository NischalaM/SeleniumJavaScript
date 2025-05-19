const { Builder, By, Key, until } = require('selenium-webdriver');
let assert = require('assert');
let {expect} = require('chai');

describe("Test cases for Waits", ()=> {
   
        let driver;
        before(async function () {
            driver = new Builder().forBrowser("chrome").build();
        });
    after(async function () {
        await driver.quit();
    });
        it("Implicit Wait", async function () {
          try {
            console.log("wait file running");
            // driver.manage().window().maximize();
            driver.get(
              "https://practicetestautomation.com/practice-test-login/"
              );
              driver.manage().window().maximize();
            //   Using Implicit wait, which is set for the entire session
            await driver.manage().setTimeouts({ implicit: 1000 });
            await driver
              .findElement(By.id("username"))
              .sendKeys("student", Key.RETURN);
            await driver
              .findElement(By.id("password"))
              .sendKeys("Password123", Key.RETURN);
            await driver.findElement(By.id("submit")).click();
            let text = await driver
              .findElement(By.xpath("//h1[@class='post-title']"))
              .getText();
            expect(text).to.equal("Logged In Successfully");
            console.log("Login Successful");
          } catch (error) {
              console.error(error);
              throw error;
          }
        });
    it("Explicit Wait", async function () {
        try {
            console.log("Explicit wait test case running");
            // driver.manage().window().maximize();
            driver.get(
                "https://practicetestautomation.com/practice-test-login/"
            );
            driver.manage().window().maximize();
            await driver
                .findElement(By.id("username"))
                .sendKeys("student", Key.RETURN);
            await driver
                .findElement(By.id("password"))
                .sendKeys("Password123", Key.RETURN);
            await driver.findElement(By.id("submit")).click();
            // Using Explicit wait, which is set for a specific element
            // wait for the element to be present
            await driver.wait(until.elementLocated(By.xpath("//h1[@class='post-title']")), 10000);
            let text = await driver
                .findElement(By.xpath("//h1[@class='post-title']")).getText();
            expect(text).to.equal("Logged In Successfully");
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
    
});

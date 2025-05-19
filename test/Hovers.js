const { Builder, By, until } = require("selenium-webdriver");
let assert = require("assert");
let chai = require("chai");
const { error } = require("console");

describe("Test cases for Hovers", () => {
  let driver;
  before(async function () {
    driver = new Builder().forBrowser("chrome").build();
  });
  after(async function () {
    await driver.quit();
  });

  it("Hovers", async function () {
    try {
      await driver.manage().window().maximize();
      await driver.get("https://the-internet.herokuapp.com/");
      await driver.findElement(By.linkText("Hovers")).click();
      await driver.wait(
        until.elementLocated(By.xpath("//h3[contains(text(),'Hovers')]")),
        10000
      );

      let text = await driver
        .findElement(By.xpath("//h3[contains(text(),'Hovers')]"))
        .getText();
      // assert.strictEqual(text, "Hovers");
      chai.expect(text).to.equal("Hovers");
      console.log("Hovers page is displayed");

      let hoverElement = await driver.findElement(
        By.xpath("//*[@class='example']/div[2]")
      );
      const action = driver.actions({ async: true });
      await action.move({ origin: hoverElement }).perform();
      // await action.click().perform();
      await driver.wait(
        until.elementLocated(By.xpath("//h5[contains(text(),'name: user2')]")),
        10000
      );
      let username = await driver
        .findElement(By.xpath("//h5[contains(text(),'name: user2')]"))
        .getText();
      console.log(username);
      chai.expect(username).to.equal("name: user2");
      console.log("User2 is displayed");
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});

//Run this daily with Jenkins, can do it on their website.

// confirm website is up
var webdriver = require('selenium-webdriver')

function visitSoftwareFromMenu() {
  var driver = new webdriver.Builder().forBrowser('chrome').build();

  driver.get('https://media-route-store.com').then(function()
  {
    driver.findElement(webdriver.By.linkText('My account')).click().then(function()
    {
      //confirm the URL
      return driver.getCurrentUrl()
    }).then(function(currentUrl) {
      console.log('currentUrl: ', currentUrl)
      if (currentUrl === 'https://media-route-store.com/my-account/') {
        //web hook to Discord
        console.log('Website is up.')
      } else {
        //web hook to Discord
        console.log('Website is not up.')
      }
    })
  })
}

visitSoftwareFromMenu()
//web hook Discord notification, "Website is up." or "Website is not up."

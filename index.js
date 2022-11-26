//Run this daily with Jenkins, can do it on their website.

// confirm website is up
var webdriver = require('selenium-webdriver')
var axios = require('axios')
require('dotenv').config()

function visitSoftwareFromMenu() {
  var driver = new webdriver.Builder().forBrowser('chrome').build();

  driver.get('https://media-route-store.com').then(function()
  {
    driver.findElement(webdriver.By.linkText('My account')).click().then(function()
    {
      return driver.getCurrentUrl()
    }).then(function(currentUrl) {
      if (currentUrl === 'https://media-route-store.com/my-account/') {
        axios.post(`https://discord.com/api/webhooks/${process.env.DISCORDHANDLE}/${process.env.DISCORDTOKEN}`, {
          content: 'Website is up.'
        })
      } else {
        axios.post(`https://discord.com/api/webhooks/${process.env.DISCORDHANDLE}/${process.env.DISCORDTOKEN}`, {
          content: 'Website is not up.'
        })
      }
    })
  })
}

visitSoftwareFromMenu()
//web hook Discord notification, "Website is up." or "Website is not up."

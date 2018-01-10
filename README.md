# Owner's Edge Selenium/Nightwatch.js End to End testing
The set up was built based on the tutorial from link below. If you watch to build more complicated tests across many different environments, they have some useful notes on that
- https://github.com/dwyl/learn-nightwatch


## To Run Locally
1. Git clone and npm install
2. Make sure java is installed on your machine by doing 'java -version'. If not, install with the following command
```
brew cask install java
```
3. Make sure that Owners Edge App is running locally on localhost:7777
4. In e2e/index, replace 'username' and 'password' with your credentials
5. To run the test:
```
npm run e2e
```
6. Latest selenium logs after each test are located in root folder under selenium-debug.log
7. if you want to save screenshots and do additional reporting, you will have to adjust the nightwatch.conf.BASIC.js file

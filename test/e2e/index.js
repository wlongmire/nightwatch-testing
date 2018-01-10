var config = require('../../nightwatch.conf.BASIC.js');
const login = require('../utils/login');
const clearanceFormFillout = require('../utils/clearanceFormFillout');
const navToOcpClearance = require('../utils/navToOcpClearance');
const navToOiClearance = require('../utils/navToOiClearance');
const clearancePassAndContinue = require('../utils/clearancePassAndContinue');
const ocpFormFillout = require('../utils/ocpFormFillout');
const oiFormFillout = require('../utils/oiFormFillout');
const clearanceFail = require('../utils/clearanceFail');
const submitForm = require('../utils/submitForm');
const getToSubmissionsTable = require('../utils/getToSubmissionsTable');
const editSubmission = require('../utils/editSubmission')
const checkEditSubmission = require('../utils/checkEditSubmission')
const checkSaveSubmission = require('../utils/checkSaveSubmission');
const uid = require('uid-safe');

// enter your username and password here
const username = 'warrenlongmire@gmail.com'
const password = 'A0xt1982!'

const ocpPrimaryInsuredName = uid.sync(15) + 'Test';
const oiPrimaryInsuredName = uid.sync(15) + 'Test';
const randomTotalCost = Math.floor(Math.random() * 10000000);
const randomPhoneNumber = Math.floor(Math.random() * 10000000);
const editSearchValue = 'Kulak2XgNsptihDo';

module.exports = {
  'Test Assersion': function(browser) {
    login(browser, username, password)
    // navToOiClearance(browser)
    // clearanceFormFillout(browser, false)
    // clearanceFail(browser)
    .end()
  }
};
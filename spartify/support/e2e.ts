// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath';
import 'cypress-file-upload';
import '@mmisty/cypress-allure-adapter/support';
// Alternatively you can use CommonJS syntax:
// @ts-ignore
import registerCypressGrep from '@cypress/grep'
registerCypressGrep()
// require('./commands')
Cypress.Allure?.on('test:started', () => {
    Cypress.Allure.host('my-host');
    Cypress.Allure.thread(Cypress.env('thread') ?? '01');
    Cypress.Allure.parentSuite('cypress-ts');
})

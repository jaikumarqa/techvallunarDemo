# Introduction

Framework for the Techvallunar UI automation using playwright + typescript.

# Technology Overview

### versions

- Node v22.12.0
- NPM 11.00.0
- Playwright 1.49.1

# Environment Variable

BaseURL and run settings are configured in "**[playwright.config.ts]()**"

# Build and Test

Run the following to install the dependencies

- "**npm install**" - install the dependencies

To run the suite the following commands are configured in '[package.json]()', run the following in the CLI

- "**npm run allure-report**" - Execute all spec files and open the report
- **"npm run tests_chrome" -** Execute all spec files in chrome browser
- **"npm run tests_firefox" -** Execute all spec files in firefox browser

# Contribute

- Common functions have been defined in "**[utils]()**" folder
- Spec files are defined under "**[tests/**"

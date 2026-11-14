# Coffee Cart E2E Test Automation Framework

Hello! This is a foundational, junior-safe Playwright TypeScript framework for testing [Coffee Cart](https://coffee-cart.app/).

---

## Prerequisites
* **Node.js** (v18+ recommended)
* **npm** (comes with Node.js)

---

## Setup & Installation
1. Clone the repository and navigate to the project root folder:
   ```bash
   cd "Coffee Auto"

2. Install project dependencies in cmd:
   npm install

3. Install the required Playwright browser binaries in cmd:
   npx playwright install

## Project Directory
COFFEE AUTO/
├── fixtures/       # Custom Playwright test fixtures (e.g., base-test.ts)
├── pages/              # Page Object Models (BasePage, StorefrontPage)
├── test-data/          # Decoupled test datasets (e.g., checkout.json)
├── tests/              # End-to-end test spec files (*.spec.ts)
├── playwright.config.ts # Playwright global configuration & baseURL settings
├── tsconfig.json       # TypeScript compiler options & path configuration
└── package.json     # Project dependencies and script runner definitions


## Running Tests
In executing tests, use any of the following Playwright commands in the cmd:

1. npx playwright test
2. npx playwright test --headed 
    -> this is to watch the execution live
3. npx playwright test -- ui
    -> to use Playwright's Interative UI Mode
4. npx playwright test <file.ts>
    -> to run a specific file
5. npx playwright show-report
    -> view the HTML test execution report



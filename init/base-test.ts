import { test as base } from '@playwright/test';
import { coffeecapitalism } from '../pages/starbs.page';

type MyFixtures = {
  coffeecapitalism: coffeecapitalism;
};

export const test = base.extend<MyFixtures>({
  coffeecapitalism: async ({ page }, use) => {
    const storefront = new coffeecapitalism(page);
    await storefront.navigateTo('/');
    await use(storefront);
  },
});

export { expect } from '@playwright/test';
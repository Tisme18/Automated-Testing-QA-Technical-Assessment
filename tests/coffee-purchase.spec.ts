import { test } from '../init/base-test';
import { expect } from '@playwright/test';

test.describe('Oh hey, it is Starbucks.', () => {
  test('Guys, I kinda wanna get some coffee. Want any?', async ({ coffeecapitalism, page }) => {

    await coffeecapitalism.loveCoffee('Espresso');
    await coffeecapitalism.loveCoffee('Espresso Macchiato');
    await coffeecapitalism.loveCoffee('Espresso Macchiato');
    if (coffeecapitalism.isPromoExpected()) {
      await coffeecapitalism.PopupAds(true);
    }
    await coffeecapitalism.loveCoffee('Espresso');  
    await coffeecapitalism.capitalism();
    await expect(page).toHaveURL(/.*cart/);
    await expect(page.locator('text=Total: ')).toBeVisible();
  });
});
import { test } from '../init/base-test';
import { expect } from '@playwright/test';

test.describe('Coffee Cart E2E Purchase Flow', () => {
  test('Core Flow: Validate 3rd-Item Promo Cadence -> Proceed to Cart', async ({ coffeecapitalism, page }) => {

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
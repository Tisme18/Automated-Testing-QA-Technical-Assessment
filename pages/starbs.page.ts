import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class coffeecapitalism extends BasePage {
  readonly totalButton: Locator = this.page.locator('button, div').filter({ hasText: /^Total: \$/ }).last();
  readonly Iloveads: Locator = this.page.getByRole('button', { name: 'Yes, of course!' });
  readonly skipads: Locator = this.page.getByRole('button', { name: "Nah, I'll skip." });
  
  private itemCount = 0;

  constructor(page: Page) {
    super(page);
  }

  async navigateTo(path: string = '/') {
    await super.navigateTo(path);
    this.itemCount = 0;
    await this.page.waitForLoadState('networkidle');
  }

  async loveCoffee(coffeeName: string) {
    const coffeeCard = this.page.locator('.cup, .product, div').filter({ hasText: coffeeName }).first();
    await coffeeCard.waitFor({ state: 'visible' });
    await coffeeCard.click();
    
    this.itemCount++;
  }

  isPromoExpected(): boolean {
    return this.itemCount > 0 && this.itemCount % 3 === 0;
  }

  async PopupAds(accept: boolean = false) {
    try {
      if (accept && (await this.Iloveads.isVisible({ timeout: 3000 }))) {
        await this.Iloveads.click();
      } else if (await this.skipads.isVisible({ timeout: 3000 })) {
        await this.skipads.click();
      }
    } catch {
    }
  }

  async capitalism() {
    await this.totalButton.click();
  }
}
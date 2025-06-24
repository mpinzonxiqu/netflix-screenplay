import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Navigate {
  static async toSuspense(actor: any) {
    const page = BrowseTheWeb.as(actor).page;
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.click('text=TV Shows');
    await page.waitForTimeout(1000);
    await page.click('text=Suspense');
    await page.waitForTimeout(3000);
  }
}

import { selectors } from '../utils/selectors';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class Login {
  static async with(email: string, password: string, actor: any) {
    const page = BrowseTheWeb.as(actor).page;
    await page.goto('https://www.netflix.com/login');
    await page.fill(selectors.emailInput, email);
    await page.fill(selectors.passwordInput, password);
    await page.click(selectors.loginButton);
    await page.waitForLoadState('networkidle');
  }
}

    import { selectors } from '../utils/selectors';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class CaptureTitles {
  static async printThree(actor: any) {
    const page = BrowseTheWeb.as(actor).page;
    const titles = await page.locator(selectors.titleCards).allTextContents();
    console.log('🎬 Títulos de Suspenso:');
    titles.slice(0, 3).forEach((title, index) => {
      console.log(`${index + 1}. ${title}`);
    });
  }
}

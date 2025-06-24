import { Browser, Page } from '@playwright/test';

export class BrowseTheWeb {
  constructor(public page: Page) {}

  static using(page: Page) {
    return new BrowseTheWeb(page);
  }

  static assignTo(actor: any) {
    actor.BrowseTheWeb = this;
  }

  static as(actor: any): BrowseTheWeb {
    return actor.BrowseTheWeb;
  }
}

import { test, chromium } from '@playwright/test';
import { Actor } from '../actors/actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';
import { Login } from '../tasks/Login';
import { Navigate } from '../tasks/Navigate';
import { CaptureTitles } from '../tasks/CaptureTitles';

test('Actor puede iniciar sesión en Netflix y ver títulos de suspenso', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const user = new Actor('Usuario').whoCan(BrowseTheWeb.using(page));

  await Login.with('TU_CORREO', 'TU_CONTRASEÑA', user);
  await Navigate.toSuspense(user);
  await CaptureTitles.printThree(user);

  await browser.close();
});

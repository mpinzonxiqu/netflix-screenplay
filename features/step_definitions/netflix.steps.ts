import { Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { Ensure, isGreaterThan } from '@serenity-js/assertions';
import { NavigateToNetflix, CaptureTitles } from '../../tasks/CaptureTitles';

Given(/^que "(.*)" navega a la página de Netflix$/, (name: string) =>
    actorCalled(name).attemptsTo(
        NavigateToNetflix()
    )
);

When('captura los títulos de las películas', () =>
    actorCalled('Moises').attemptsTo(
        CaptureTitles()
    )
);

Then('debería ver al menos un título en la página', () =>
    actorCalled('Moises').attemptsTo(
        Ensure.that(CaptureTitles.lastCount(), isGreaterThan(0))
    )
);

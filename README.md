# netflix-screenplay

   

# Netflix Screenplay (Test Automation with Serenity/JS + Playwright + Cucumber)

Este proyecto automatiza la navegación y extracción de títulos desde la página de Netflix, utilizando la arquitectura Screenplay con Serenity/JS, Playwright y Cucumber.

---

## 🧩 Tecnologías utilizadas

- [Serenity/JS](https://serenity-js.org/) - Framework BDD orientado a actores
- [Playwright](https://playwright.dev/) - Automatización de navegadores
- [Cucumber](https://cucumber.io/) - Features en Gherkin para pruebas BDD
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático

---

## 📁 Estructura del proyecto

netflix-screenplay/
├── actors/ # Actor y sus habilidades
│ └── actor.ts
├── tasks/ # Acciones que ejecuta el actor
│ └── CaptureTitles.ts
├── utils/
│ └── selectors.ts # Selectores CSS centralizados
├── features/ # Features y steps en Gherkin
│ ├── netflix.feature
│ └── step_definitions/
│ └── netflix.steps.ts
├── cucumber.ts # Configuración de Serenity/JS
├── tsconfig.json # Configuración de TypeScript
├── package.json # Scripts y dependencias



---

## 🚀 Instalación

```bash
git clone https://github.com/tu-usuario/netflix-screenplay.git

cd netflix-screenplay

npm install

npx playwright install

---------------------------------
Ejecución de pruebas

npx playwright test
---------------------------------
feature: netflix.feature
gherkin

Feature: Acceder a Netflix y capturar títulos

  Scenario: Ver los títulos en la página principal
    Given que "Moises" navega a la página de Netflix
    When captura los títulos de las películas
    Then debería ver al menos un título en la página

✅ Script de test (package.json)
json

"scripts": {
  "test": "cucumber-js --require-module ts-node/register --require cucumber.ts --require features/**/*.ts"
}


✨ ¿Qué hace este proyecto?
✅ Abre la página de Netflix
✅ Espera a que carguen los títulos
✅ Captura los títulos de las películas
✅ Imprime los primeros 3 títulos en consola




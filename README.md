# netflix-screenplay

                                  #Estructura General del Proyecto 

proyecto realizado con Node.js y typeScript 

netflix-screenplay/
│
├── actors/                   # Define el actor y su habilidad
│   └── actor.ts
│
├── abilities/               # Habilidades como usar el navegador
│   └── BrowseTheWeb.ts
│
├── tasks/                   # Acciones del actor (Login, navegar, capturar)
│   ├── Login.ts
│   ├── Navigate.ts
│   └── CaptureTitles.ts
│
├── utils/
│   └── selectors.ts         # Selectores centralizados
│
├── tests/
│   └── netflix.spec.ts      # El test final
│
├── playwright.config.ts     # Config de Playwright
└── tsconfig.json            # Config de TypeScript



////////////////////   Comando para ejecutar Test Pruebas 

*npx playwright test




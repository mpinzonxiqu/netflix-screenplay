Feature: Acceder a Netflix y capturar títulos

  Scenario: Ver los títulos en la página principal
    Given que "Moises" navega a la página de Netflix
    When captura los títulos de las películas
    Then debería ver al menos un título en la página

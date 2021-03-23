# Eindopdracht

[Live Demo](https://BT2021.herokuapp.com)

# Inhoudsopgave

## Use Case

Ik heb gekozen voor de enquete als use case.
De enquete gaat over de minor Web Development van de Hogeschool van Amsterdam.

**Core Functionaliteit**: _"Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven."_

## Samenvatting

### Verificatie

De verificatie van een user vindt plaats in de volgende stappen:

1. Gebruiker vult basisgegevens in.
2. Gegevens worden vergeleken met reeds bekende informatie op de server.
3. Indien de gebruikersinput matched met de bekende gegevens gaat met door naar het enquete scherm. Indien de gebruikersinput niet matched met de bekende gegevens wordt de user doorverwezen naar een pagina waar hiervan feedback wordt getoont.

### De opdracht is gemaakt met de volgende technieken:

- NodeJS
- Express
- POST request
- Server Side Rendering
- Hidden Input Fields
- Progressive enhancement

# Browsers

#### De applicatie wordt getest in de volgende Browsers:

- Chrome, Desktop + Mobiel **Versie 89.0.4389.82 (Officiële build) (64-bits)**
- Firefox, Desktop **Versie 86.0.1 (64-bit)**
- Safari Ipad **Versie 14.0**
- Samsung Internet, Mobiel **Versie 13.2.3.2**

# Wireflow

![Wireflow](./assets/flow.png)

## CheckList

**Real Time Feedback**

[ ] - Progress Bar `"onScroll"` [Browser Support](https://caniuse.com/?search=onScroll)

[X] "save" progress using only HTML [Browser Support](https://caniuse.com/?search=autocomplete)

**Ui enhancements**

[ ] - Progressively enhance enquete UI with `<range>` with clear instructions. [Browser Support](https://caniuse.com/input-range). `<range>` elements are not very user friendly by nature. I will add them once JS is allowed.

[ ] Complete HTML

[ ] Add CSS

[ ] Add fallbacks for each browser

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Samsung Internet

# Lagen

## Functional

Doordat Server side rendering plaatsvind is de site te gebruiken vanaf de functional layer. Hierbij is dus GEEN CSS en JS toegepast.

## Useable

Wanneer CSS wel toegepast wordt is de site

### Progressive Enhancements

## Pleasureable

### Progressive Enhancements

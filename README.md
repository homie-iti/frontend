
# Homie 

Homie is an online rental accommodation platform for young professionals and international students who came to Egypt looking for apartment.
We allow users to rent a unit as agents and they are also allowed to rent their units as landlords.

A unit can be a whole apartment or just a room and you can filter the units to match what you want in a very specific way.

## Source Code Organization
- *src*: root of the source code
  - *app*: angular application
    - *models*: models used in the application
      - signUp model
      - auth model
      - city model
      - contract model 
      - favorite model
      - help question model
      - unit details model
      - unit review model
      - units model 
      - user model 

    - *modules*: angular modules
      - aboutUs modules: contain general information  about Homie website
        - aboutUS components: 
          - aboutCover
          - values 
      - admin module: control website page 
         - admin components:
           - cities
           - user
           - help question 
           - review
           - units
           - contract 
      - core module: contain fixed compnent in website
         - core components:
           - footer
           - navbar
      - contact-us module : contain ==> how to contact us? 
        - contact-us components:
          - contact
          - online contact
      - home page  module : contain home page website
        - home page components:
          - about-us
          - city-cards
          - homie-cover
          - homie-info
          - homie-search
      - not found module : contain not found page ==>appear when there is error in website
        - not found components:
          - not found
      - payment form module : contain the way to payment get way in Homie website
        - payment components:
          - payment 
      
      - shared module : contain shared  
      - units module : contain all units page & unit page & unit listing
        - units components:
          - all units page :
            - unit-card
            - unit-filter
            - unit-sorting
          - unit page :
            - landlords details
            - rating
            - unit description
            - unit gallery
            - unit info
            - unit review
            - unit page
          - unit-listing
      - units crud module : contain crud opration for units 
        - unit crud components :
          - add unit
          - edit unit 
      - user module : contain any thing belong user
        - user components:
          - registration pages
            - activation-page
            - forget password 
            - login
            - sign up 
            - log out
            - new password
          - user account
          - user profile page 
            - user-about
            - user-card
            - user unit listing
          - user wish list
    - *services*: services handling data flow
        - admin service
        - auth service  
        - getdata service
        - transfer-data service
  - *assets*: static assets ==>contain some static images
  - *environments*: definition of production or test environment
  - *styles*: CSS styles






# HomieFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

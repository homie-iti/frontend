
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
      - help-question module :
        - help-question components:
          - get all help question 
          - add help question
          - edit help question
          - delete help question 
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



## Screen shot
- home page ==>
![home page](https://i.postimg.cc/28Pq4jd6/Whats-App-Image-2022-08-12-at-5-15-51-PM.jpg)

- all units ==>
![all units](https://i.postimg.cc/t4TrV55y/Whats-App-Image-2022-08-12-at-5-17-46-PM.jpg)

- one unit ==>
![one  unit](https://i.postimg.cc/13rqsh63/Whats-App-Image-2022-08-12-at-5-28-37-PM.jpg)
-
- Sign Up ==>
![Sign up ](https://i.postimg.cc/2yWPBxF2/Whats-App-Image-2022-08-12-at-5-33-31-PM.jpg)

- login ==>
![login](https://i.postimg.cc/wTZQrpzy/Whats-App-Image-2022-08-12-at-5-34-16-PM.jpg)

-  contact us ==>
![ contact us](https://i.postimg.cc/q7HKycVg/Whats-App-Image-2022-08-12-at-5-43-46-PM.jpg)

-  about us ==>
![about us ](https://i.postimg.cc/VL4Xy0CV/Whats-App-Image-2022-08-12-at-5-41-57-PM.jpg)

- help question ==>
![help question](https://i.postimg.cc/P5SxrmXB/Whats-App-Image-2022-08-12-at-5-42-13-PM-1.jpg)

## Features

- filter units by ==>  gender type , estate type , price range , pets allowed
- search => cityName and find units in them 
- user => can be (landlord or agent)
- Admin :
   - user ==> add , delete , update ,get all 
   - unit ==> add ,delete , update , get all 
   - city ==> add , delete , update , get all
   - review ==> add ,delete , update , get all
   - contract ==> add , delete , update , get all
   - help question ==> add ,delete , update , get all
- account activetion
- forget and reset password 
- check avaliablity
- favorite list for every user



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| --bg-lightGray | ![#cfc2b3](https://via.placeholder.com/10/cfc2b3?text=+) #cfc2b3 |
|  --main-font-color | ![#28210c)](https://via.placeholder.com/10/28210c?text=+) rgb(34, 56, 63) |
| --hover-font-color | ![#988042](https://via.placeholder.com/10/988042?text=+) #988042 |
| --main-background-color | ![rgba(234, 209, 179, 0.265)](https://via.placeholder.com/10/ead1b3?text=+)rgba(234, 209, 179, 0.265) |
|    --addresses-color | ![rgb(155, 134, 109)](https://via.placeholder.com/10/9b866d?text=+) rgb(34, 56, 63) |
|   --color-search | ![rgb(225, 216, 205)](https://via.placeholder.com/10/e1d8cd?text=+) rgb(225, 216, 205) |
|  --section-color| ![rgba(177, 163, 145, 0.459)](https://via.placeholder.com/10/B1A591?text=+)rgba(177, 163, 145, 0.459) |




## HomieFrontend

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


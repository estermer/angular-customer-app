# [Angular Customer App](https://stermer-customer-app.herokuapp.com/)

a single page web application that allows a user to Create, List, Update and Delete customers.  A customer is made of up the following attributes:

- Name
- Email
- Telephone
- Address
 - Street
 - City
 - State
 - Zip

The web application should use .json files as the storage mechanism for each customer record.

### Data Model

```javascript
  CustomerModel: {
      name: String,
      email: String,
      telephone: String,
      address: {
        street: String,
        city: String,
        state: String,
        zip: String
      }
    }
```

Used the [AngularJS Styling guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) to write code according to best practice.

# Running the application locally

This angular application uses custom directives with templateUrl's and needs to be run
on a server in order to get around the CORS restrictions.

To do so, we you need to install the node package `http-server`.

run `npm install http-server` (if your on linux you may need to install with `sudo`).

next clone this repository to your local machine.

Then run `http-server *PATH*`

with `*PATH*` being your the full path to the repository's folder.

ex: `http-server /Desktop/programming/angular-customer-app/public/`

This should run the application on a local server.

The API for the JSON data can just run on `localhost:3000` with `nodemon server.js`

If there is any issues seeing the changes made to the app, you can always clear the browsers cache.

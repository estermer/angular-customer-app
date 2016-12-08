# angular-customer-app

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
 
### JSON Data Model
 
```json
 [
  {
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
 ]
```

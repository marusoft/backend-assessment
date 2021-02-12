## Contact/Address Book (Rest Backend)

## Decription

A nodejs based REST application which will serve as a data source for an existing Contact/Address book web and mobile application.
The application will expose two rest resources

- Auth Resource – This will handle endpoints for authentication which will include, login, signup etc
- Contact Resource – This will handle CRUD endpoints for managing a user’s contact list. All endpoints in this resource should only be accessed by an authenticated and authorized user.
  The project will persist data to a mongodb database.

## Installation

- Pull the repo

  - > `git clone https://github.com/marusoft/backend-assessment.git`

- Change to this directory

  - > `cd contact`

- Install the projects dependencies

  - > `npm install`

- Install mongodb database locally

  - > For [Mac user](https://zellwk.com/blog/install-mongodb), this is step by step instruction

  - > For [Window user](https://treehouse.github.io/installation-guides/windows/mongo-windows.html), this is step by step instruction

  - > For [Linux user](https://www.tutorialkart.com/mongodb/install-mongodb-on-ubuntu/), this is step by step instruction

- Verify mongodb installation
  - > `mongo --version`

- To start mongodb service
  - > `sudo service mongod start` - Linux user
  - > `brew services start mongodb-community` - Mac user
  - > `C:\mongodb\bin\mongod.exe` - Window user

- Create local mongoDb database  
  - > run `mongo` for mongoDB shell
  - > run `use contact` to create a new database

- Include the new database in the connection string
  - > `mongodb://localhost:27017/contact` in server.js

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.


## Start Development

- To build the project
  - > `npm run build`
- To continuously watch for changes
  - > `npm run watch`
- To run your app server
  - > `npm run start`


- To check collections in the database after data persistence
  - `db.users.find()`
  - `db.contacts.find()`


### API ENDPOINTS

#### Authentication

| URI                       | HTTP Method | Description       |
| --------------------------| ----------- | ----------------- |
| <code>/auth/signup</code> | `POST`      | Create an account |
| <code>/auth/login</code>  | `POST`      | Log-in to account |

#### API Routes

| URI                                       | HTTP Method | Description                      |
| ----------------------------------------- | ----------- | -------------------------------- |
| <code>/contact/createContact</code>       | `POST`      | Create contact address           |
| <code>/contact/getAllContact</code>       | `GET`       | Fetch all contact address        |
| <code>/contact/getAContact/{_id}</code>   | `GET`       | Fetch a single contact address   |
| <code>/contact/updateContact/{_id}</code> | `PATCH`     | Update a contact address         |
| <code>/contact/removeContact/{_id}</code> | `PATCH`     | Delete a single contact address  |


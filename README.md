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
  
- Setup local mongoDb database  
  - > `mongodb://localhost:27017/{db_name}` in server,js

## Start Development

- To build the project
  - > `npm run build`
- To continuously watch for changes
  - > `npm run watch`
- To run your app server
  - > `npm run start`
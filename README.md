# Brief

A web app that does three things:
- Insert/Update record.
- Search for a record.
- Delete a record.

## Problem Statement

1. Create a Web form which will takes input from user. The form fields are: a. User Name, b. Password, c. Email Id, d. Phone Number. Use input field validation.
2. Create a REST API which will take request from the HTML form and insert the data into MySQL database along with the current Date and Time.
3. The API should insert the record if it doesn‘t exist, else update the previous record.
4. Create a search bar which will take email id as input and show the respective record if exist, else show error with appropriate message.
5. MySQL Table Schema: userName varchar(25) NOT Null, emailId varchar(50) primary key, phoneNo varchar(10) Not Null, password varchar(50) Not Null, dateTime Timestamp.

## Built With
- NodeJS
- Express
- MySQL
- Bootstrap

## How to run
- Download/Clone the repo.
- Setup MySQL database server and table, per the given specs.
- Add Database connection details in app.js. Also add port number at bin/www.
- At the root, cmd: `npm run start`


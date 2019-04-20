# WebForm

A small REST API, and a webpage



## Problem Statement

1. Create a Web form which will takes input from user. The form fields are: a. User Name, b. Password, c. Email Id, d. Phone Number. Use input field validation.
2. Create a REST API which will take request from the HTML form and insert the data into MySQL database along with the current Date and Time.
3. The API should insert the record if it doesn‘t exist, else update the previous record.
4. Create a search bar which will take email id as input and show the respective record if exist, else show error with appropriate message.
5. MySQL Table Schema: userName varchar(25) NOT Null, emailId varchar(50) primary key, phoneNo varchar(10) Not Null, password varchar(50) Not Null, dateTime Timestamp.

## Doc

#### Steps followed

1. Create a barebones HTML-Bootstrap webform.
2. Setup a MySQL database as required, for testing.
3. Use Express to quickly create an app, also connecting the app to previously created database server.
4. Create a single webpage that performs insert as required. Test insert.
5. Modify insert form to handle updates. Test update.
6. At the front-end, create a navigation bar for the features required: insert, search, and delete.
7. Create a new page for search (a stripped down version of insert), adding appropriate back-end to handle search requests. Test search.
8. Create a new page for delete (a replica of search, mostly), adding appropriate back-end to handle delete requests. Test delete.
9. Re-test all features. Clean front-end.

#### References

- stackoverflow, codementor.io, scotch.io, docs of the tools used, etc.

#### Approach

- The first step was to create a webform, setup a datavase for testing, and setup a basic app.
- For the backend, I started with a simple insert feature, since it is the first requirement to fulfill the exercise.
- Once the insert was working as required, I moved to the next step. What if the record already exists in the database? So an update feature.
- I tested each feature as I was working on it.
- For the search feature, I added a navigation bar that would take the user to the page for search. Once the page was set, take the input from the user, and handle it appropriately.
- Search is already implemented in the update section, since update performs a search to see if the record exists. The addition here is retrieving the record, if found.
- Delete is an extension of search. If the record is found, remove it. If not, raise an error.

#### Learnings

- How NodeJS and MySQL work together.
- SQL injections in NodeJS.
- Parsing MySQL query results in NodeJS.
- Pug.

#### The challenging part

- Rendering results.
- Methods.

#### The fun part

- Handling database queries.
- Front-end.

#### To-do

- [] Alerts.
- [] Simplify.

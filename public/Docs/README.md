# Commons | Social Media for the Workplace

Commons is a social media platform that allows coworkers within the same company to remain connected with each other virtually. Through having an account on Commons they are able to interact with the platform and specify their hobbies and interests outside of the office in order to connect with peers with the same interests.

The application is mainly supported on desktop browsers, specifically google chrome or microsoft edge. However, the application 
can maintain its functionality on ios.

Developers manial can be found at the bottom half of this file.

# Developers Manual
Developer access to Commons will require downloading each file under this project directory to your local machine. However, it is suggested to create a duplicate local github repository to upload all of the programming files for easy access and updates. 

## Required Dependencies
In addition to the programming files, the developers will be required to download the following dependencies:
- Git --> to save changes on Github
- Supabase --> Database platform utilized
- Insomnia --> Check API functionality
- Node --> For REST APIs and Servers
- VSCode (Optional) --> code editior utilized

Each dependency listed above has a website associated with it that lists the installation requirements based on the operating system utilized. However, some of the dependencies have unique modifcations that need to be made in addition to the general installation insturctions. These modifications are in place to ensure the functionality of Commons is efficent and remains the same across all platforms. VSCode will require extensions to be added in order to properly view previews of the website. LiveServer is the preffered extension to be utilized. No other unique modifcations are required for the application or its additional dependencies.

## Server Infromation
In order to run this application on a server you must open the command prompt and verify you are in the directory with all of the Commons programming files. Next you will enter `node server.js` which runs the server associated with Commons. DO NOT modify server.js for the initial run. It is important that there is verification that the server works on the Developers application before making modifications. 

## Error Tests
Throughout the application, there are several tests written to catch errors that arised during development. These tests will run automatically and do not require additional instruction on how to run them. If any errors present themselves with or without the tests, refer to the test code or the console log to understand the meaning of the error.

## APIs
The application utilizes three API endpoints for the main functionality of the application. The API's functionality and purpose is listed below.

### `POST /api/users`
This endpoint is used by the frontend to add a new user to the database when entered in the connections.page of the application. The information entered in the database will include the name and interest(s). It functions by receieving the name and interests from the frontend application, converting the data into an array (as needed), inserts the data into Supabase and catches errors (as needed).

### `GET /api/matc/:name`
This endpoint matches users to other users that share the same interests. Essentially, it finds other users who share the same interests based on previously entered data. It functions by looking up the user that was entered, gets all other users, compares the users interests with the previously entered users and returns the users with shared interests. This function takes place on the connections page of the application.

### `GET /api/users`
This endpoint retrieves all users from the Supbase database and returns the list of users as an array. Although this endpoint does not currently interact with the frontend, there is opportunity to incorporate this function into future applicartions. This would require quering the supabase to select all rows from the user table. 

*This functionality was removed to allow Developers to design a better way to display all the user data in the application without it being impractical*

## Future Developmemnt
For future development, the developer is expected to utilize the console log and test cases to investigate discover new bugs and investigate known bugs. A common bug the developer may run into is error messages being displayed when a new user is entered as a connection. This entry will appear as an error to the developer but the user data is still being added to the database. Therefore it will be the developers responsibility to fix the code causing this false error. As of 05/17/2025, this error was fixed but it is uncertain whether it will arise again.

Additionally, it is expected of the developer to use the `GET /api/users` endpoint to create another page where all the users data is displayed. As previously mentioned this endpoint it not integrated with the frontend. Therefore This page should serve as front end integration by being an accessible database for users to find people with specificed interests that may not be similar to theirs. 

Additionally, there should be more fields added in the new user page to include information about the employees role at the company. This information should also be included on the accessible database page. Then, by including more distingusihing features for each user, the users can be sorted by category (ex. interests, role in company, hobbies etc.) in the database, allowing for users to filter when desired. 

Finally, consider incorporating a logout option that would appear globally on each global navigation similar to the comapny logo. This way users can return to the login page when they are finished.


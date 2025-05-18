# Commons | Social Media for the Workplace

Commons is a social media platform that allows coworkers within the same company to remain connected with each other virtually. Through having an account on Commons they are able to interact with the platform and specify their hobbies and interests outside of the office in order to connect with peers with the same interests.

The application is mainly supported on desktop browsers, specifically google chrome or microsoft edge. However, the application 
can maintain its functionality on ios.

Developers manial can be found at the bottom half of this file.



The audience of this document is future developers who will take over your system.

They know technical terms and have general knowledge about web applications, but do not have knowledge about your system design.

You need to provide a technical document so that future developers can start setting up the application on their local machines, and keep working on the system development after you leave the team.

# Developers Manual
Developer access to Commons will require downloading each file under this project directory to your local machine. However, it is suggested to create a duplicate local github repository to upload all od the programming files for easy access and updates. 

## Application Design

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

## APIs & Future Developmemnt
- The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do
- A clear set of expectations around known bugs and a road-map for future development.

Documentation needs to be written in Markdown (MD) files, nicely formatted
Documentation should be included in each team’s final code submission.
Documentation should be saved in your main project directory under "docs"


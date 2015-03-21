Goal Setting Software - V1
----------------------------------------

Purpose
The idea is to go away from the numerous project tracking software and to-do list and come up with a simple goal setting software.
We should be able to have some goals set . Rewarded if we achieve them and punished if we don't achieve them.

The application will primarily be on mobile as well as web. Syncronise the data for ease of use.
-----------------------------------------

How it works
----------------------------------------

1. Add goal
The idea is to add a goal, simple anf fun. Add a one liner, a date and time to complete it.
2. What happens when it is added
1. It will alert an user to complete it one hour before the due time.
2. It will alert an user to update it at the exact time when it was suppose to complete.
3. It will again alert 2 hours later with 1st warning.
4. It will again alert 5 hours later with 2nd warning.
5. It will start sending positive affirmations to the user to start thinking about how he can manage time and be realistic to complete it.
6. After 24 hrs. It will just send him negative messages to make sure he understands the real meaning of completion.

2. There are only 2 types of goals a person has
1. Personal
2. Business

We allow him to add them and show him the 2 types of goals.

-------------------------------------

Technology Used to developed. [ Target is to use the least possible technology. ]

1. Angularjs - Web
2. Firebase - free account.
3. Ionic for the mobile app.
4. Github
5. Grunt

Technical Log
1. Git - Init

2. Lets get the github for this project setup

3. package.json is added and is successfully called

npm install

Issues - We may get an issue when installing the package. This happens because a couple of npm packages
try to get installed in your root npm folder. Please do use sudo.


1. Setting Up Grunt

Why - We need to make build task so everything is easy and organise.


 bower - Simple task runner. Actually not doing anything at the moment.
 jslint - Checking the jscode for quality.
 karma - Test cycles for javascript. ( That's what got me interested)
 clean - This will clean up the directory.
 html2js - Simple way to convert a html to js. ( I am not a big fan of this)
 watch - A simple way to keep the server running and updating when changes are done.
 connect - a simple local web server. No need of an apache or anything.
 compress - Let's zip the package.





References -
---------------------
http://g00glen00b.be/angular-grunt/ - Angular build script information. Useful

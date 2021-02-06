# MNRD-star-board
Attendance Challenge Tracker for Minnesota Roller Derby

To spin upp this app for local development:
 1. open the nested folder called "mnrd-star-board" in your IDE (ope)
 2. Open a terminal window, navigate to the folder above and run `npm install`
 3. Create a local postgreSQL db called "star-board" - I used [Postico](https://eggerapps.at/postico/) - and run all the queries listed in the "database.sql" file
 4. In your terminal window, run `npm run server` to spin up a server on port 5000
 5. Open a new, additional terminal window, and run `npm run client` to spin up the client on port 3000
 6. The above command should open a browser window with the app, but you can also navigate to localhost:3000 to see the functioning app!

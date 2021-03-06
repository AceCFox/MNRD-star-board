-- create a postgreSQL database named "star-board" and run the following commands to build tables:

CREATE TABLE "team"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50),
	"color" VARCHAR (50) NOT NULL,
	"photo_URL" VARCHAR(500) );


CREATE TABLE "user"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"team_id" INT REFERENCES "team",
	"bio" VARCHAR(500),
	"photo_URL" VARCHAR(500),
	"visible" BOOLEAN DEFAULT TRUE,
	"password" VARCHAR(200),
    "pronouns" VARCHAR (50),
    "level" INT );

CREATE TABLE "entry" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"date" VARCHAR(150),
	"description" VARCHAR (500),
	"photo_URL" VARCHAR (500) );

--- Starting Data: teams and test user Minnie
INSERT INTO  "team" ("name", "color") VALUES 
	('Rockits', '#EF3340'),
	('Green', '#00AC4E'),
	('Orange', '#FF6900'),
	('Pink', '#D90E81'),
	('Officials', '#FFFFFF'),
	('Frostbite', '#6F519B'),
	('Windchill', '#65C0E5'),
	('All-Stars', '#00B6F1'),
	('Other', '#FFD700');

INSERT INTO "user" ("name", "team_id", "pronouns", "level") VALUES (
    'Minnie', 1, 'they/them/theirs', 10
);
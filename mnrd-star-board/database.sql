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
	"password" VARCHAR(200) );

CREATE TABLE "entry" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"date" VARCHAR(50),
	"description" VARCHAR (500),
	"photo_URL" VARCHAR (500) );
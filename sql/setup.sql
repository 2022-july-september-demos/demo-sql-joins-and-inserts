-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS owners_pets;

DROP TABLE IF EXISTS pets;

DROP TABLE IF EXISTS owners;

CREATE TABLE pets (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  TYPE VARCHAR NOT NULL
);

INSERT INTO
  pets (name, age, TYPE)
VALUES
  ('Archie', 2, 'dog'),
  ('Boomer', 7, 'cat'),
  ('Chuck', 14, 'cat'),
  ('Digger', 14, 'dog'),
  ('Eewok', 14, 'hamster'),
  ('Fluffy', 2, 'bunny'),
  ('Goofy', 2, 'goat');

CREATE TABLE owners (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL
);

INSERT INTO
  owners (name)
VALUES
  ('Anne'),
  ('Bob'),
  ('Carol'),
  ('Dave'),
  ('Erin'),
  ('Greg');

CREATE TABLE owners_pets(
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  owner_id BIGINT,
  pet_id BIGINT,
  FOREIGN KEY (owner_id) REFERENCES owners(id),
  FOREIGN KEY (pet_id) REFERENCES pets(id)
);

INSERT INTO
  owners_pets (owner_id, pet_id)
VALUES
  (1, 1),
  (2, 1),
  (2, 2),
  (3, 3),
  (4, 3),
  (5, 4);
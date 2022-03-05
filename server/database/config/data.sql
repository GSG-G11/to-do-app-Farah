

BEGIN;

DROP TABLE IF EXISTS users, tasks CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (200) NOT NULL
);

CREATE TABLE tasks(
        id SERIAL PRIMARY KEY,
    content VARCHAR (255) NOT NULL,
    type VARCHAR (255) NOT NULL,
   date DATE NOT NULL,
    userId INTEGER REFERENCES users(id) 
 
);
INSERT INTO users (username) VALUES ('farah'),('sara'),('aya');
INSERT INTO tasks (content, type, date, userId) VALUES('chapter 1','calculus','2022-3-5',1),
('chapter 1','cs','2020-3-6',1),
('chapter 1','physics','2020-3-7',1),
('chapter 1','physics','2020-3-8',2);

COMMIT;


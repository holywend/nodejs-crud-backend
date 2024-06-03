TRUNCATE TABLE tb_users;
TRUNCATE TABLE tb_employees;

INSERT INTO tb_users (username, email, password)
VALUES
  ('user1', 'user1@example.com', MD5('password1')),
  ('user2', 'user2@example.com', MD5('password2')),
  ('user3', 'user3@example.com', MD5('password3')),
  ('user4', 'user4@example.com', MD5('password4')),
  ('user5', 'user5@example.com', MD5('password5')),
  ('user6', 'user6@example.com', MD5('password6')),
  ('user7', 'user7@example.com', MD5('password7')),
  ('user8', 'user8@example.com', MD5('password8')),
  ('user9', 'user9@example.com', MD5('password9')),
  ('user10', 'user10@example.com', MD5('password10'));

INSERT INTO tb_employees (fullname, dob, sex, image) VALUES
  ('John Doe', '1990-01-01', 'Male', 'images/john_doe.jpg'),
  ('Jane Smith', '1995-02-15', 'Female', 'images/jane_smith.jpg'),
  ('Michael Lee', '1985-12-24', 'Male', 'images/michael_lee.png'),
  ('Olivia Jones', '2000-05-08', 'Female', 'images/olivia_jones.jpg'),
  ('William Brown', '1978-09-10', 'Male', 'images/william_brown.png'),
  ('Emily Garcia', '1982-03-21', 'Female', 'images/emily_garcia.jpg'),
  ('David Hernandez', '1992-07-04', 'Male', 'images/david_hernandez.png'),
  ('Sophia Davis', '1998-11-19', 'Female', 'images/sophia_davis.jpg'),
  ('Noah Miller', '2001-04-27', 'Male', 'images/noah_miller.jpg'),
  ('Ava Taylor', '1987-08-06', 'Female', 'images/ava_taylor.jpg');

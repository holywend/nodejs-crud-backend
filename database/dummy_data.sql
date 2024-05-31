TRUNCATE TABLE tb_users;

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

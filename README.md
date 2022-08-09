## About

Many to many relationship for users and roles using Sequelize.

users:
id username password createdAt updatedAt
1 Alex1 1234 2022-08-09 20:48:41 2022-08-09 20:48:41
2 Alex2 12345 2022-08-09 20:48:41 2022-08-09 20:48:41
3 Alex3 123456 2022-08-09 20:48:41 2022-08-09 20:48:41

roles:
role_id role_name createdAt updatedAt
1984 Editor 2022-08-09 20:48:41 2022-08-09 20:48:41
2001 User 2022-08-09 20:48:41 2022-08-09 20:48:41
5150 Admin 2022-08-09 20:48:41 2022-08-09 20:48:41

user_role (the junction table):
createdAt updatedAt user_id role_id
2022-08-09 20:48:41 2022-08-09 20:48:41 1 2001
2022-08-09 20:48:41 2022-08-09 20:48:41 2 1984
2022-08-09 20:48:41 2022-08-09 20:48:41 2 2001
2022-08-09 20:48:41 2022-08-09 20:48:41 3 5150

Based on tutorial by:
https://www.bezkoder.com/sequelize-associate-many-to-many/

## My Notes

First create database in MySQL Workbench.
use test_sequelize_m2m;

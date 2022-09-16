drop database AyurAroghya;
Create database AyurAroghya;
use AyurAroghya;
create table usertype(id int primary key not null auto_increment,fname varchar(50),lname varchar(50),
					  email varchar(50),password varchar(30),contact bigint,address text,usertype varchar(15));
desc usertype;
alter table usertype auto_increment 6;
insert into usertype(fname,lname,email,password,contact,address,usertype) values
("Bhanu Siva Prakash","Nagaraju","nagarajubhanuprakash@gmail.com","Bhanu@33",9885533414,"Vijayawada","admin");
insert into usertype(fname,lname,email,password,contact,address,usertype) values
("Samuel Mark","Gandham","samuelmark@gmail.com","samuel@143",9966004054,"Vijayawada","user");
select * from usertype;

create table category(id int primary key not null auto_increment, name varchar(25),
						 image varchar(150));
desc category;
alter table category auto_increment 1;
drop table category;
select * from category;

create table product(id int primary key not null auto_increment, name varchar(100),image varchar(150),
					 quantity int,drug varchar(100),mfg varchar(250),mfgdate date,usebefore date, mrp decimal(10,2),
                     discount int not null,cat_id int,foreign key(cat_id) references category(id));
desc product;
select name ,cat_id from product where cat_id='1' or cat_id='2';
select * from product where mrp>100;
alter table product auto_increment 1;
ALTER TABLE product ADD quantity int NOT NULL AFTER discount;

create table contact(id int primary key not null auto_increment,fname varchar(100),lname varchar(100),
					 email varchar(100),contact bigint,message text);
alter table contact auto_increment 1;
desc contact;

create table cart(id int primary key not null auto_increment, image varchar(150),name varchar(100),
					 quantity int, mrp decimal(10,2),discount int not null,p_id int,foreign key(p_id) references product(id));
alter table cart auto_increment 1;
drop table cart;
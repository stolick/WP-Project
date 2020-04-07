--Use absolute path if relative path doesn't work. This is a known bug in few versions of H2 database
insert into AIRPORTS (select * from CSVREAD('C:\Users\krist\Desktop\2020\project\src\main\resources\airports.dat'));

insert into ROUTES (select * from CSVREAD('C:\Users\krist\Desktop\2020\project\src\main\resources\routes.dat'));

insert into AIRLINES(select * from CSVREAD('C:\Users\krist\Desktop\2020\project\src\main\resources\airlines.dat'));

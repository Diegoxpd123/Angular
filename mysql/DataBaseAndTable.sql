create database if not exists db_pokemon;

use db_pokemon;

create table pokemon(
    id int not null auto_increment primary key,
    name varchar(50),
    img varchar(200),
    hp varchar(50),
    experiencia varchar(200),
    ataque varchar(50),
    defensa varchar(200),
    especial varchar(50)
);


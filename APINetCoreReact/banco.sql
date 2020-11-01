create database APINetCoreReact

use APINetCoreReact

create table tb_gestores
(
	Id integer identity(1,1) primary key not null,
	Nome varchar(100) not null,
	Lancamento integer not null,
	Desenvolvedor varchar(100) not null
)
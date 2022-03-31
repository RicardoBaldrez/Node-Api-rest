## REMOVE VERSÕES ANTERIORES DO DOCKER
-> sudo apt-get remove \
    docker \
    docker-engine \
    docker.io \
    containerd runc -y

-> sudo apt update

## INSTALA O DOCKER-CE
-> sudo apt install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y

-> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

-> sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" -y

-> sudo apt update

-> sudo apt install docker-ce docker-ce-cli containerd.io -y

## CRIANDO O CONTAINER DO MARIADB
-> sudo docker run --restart always -d --name bdmariadb1 -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=SUA_SENHA_FORTE mariadb

## INSTALAR O MYSQL WORKBENCH E INSOMNIA
### LINUX (UBUNTU)
-> sudo apt install mysql-workbench
-> sudo snap install insomnia
## FAÇA O DOWNLOAD PARA WINDOWS
https://dev.mysql.com/downloads/workbench/
https://insomnia.rest/download/


## Iniciando o projeto
-> sudo npm init -y (Criando o package.json)

## ESLINT
### Comando que instala
-> sudo npx eslint --init

## Nodemon
Monitora o sistema de arquivos e reinicia o processo automaticamente(reinicia o servidor automaticamente após uma alteração).

## Sucrase
Permiti que usemos o import e export dos módulos dentro do node
### Baixando sucrase
-> npm i sucrase

## .env
### Baixando
-> npm i dotenv
Após isso, pode-se usar as variáveis de ambiente do arquivo .env(file)

## Sequelize
O Sequelize é um ORM (Object-Relational Mapper) para Node. js, que tem suporte aos bancos de dados PostgreSQL, MariaDB, MySQL, SQLite e MSSQL, como ORM ele faz o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos Javascript.

### Baixando
-> npm install --save sequelize

#### MIGRATION
### Criando a tabela 'students' através de uma migration
-> npx sequelize-cli migration:generate --name=students
### Rodando o comando para criar a tabela
-> npx sequelize db:migrate
### Rodando o comando para desfazer a migrate
-> npx sequelize db:migrate:undo

#### SEED
### Criando a seed
-> npx sequelize seed:generate --name users-create
### Rodando o comando que executa a seed
-> npx sequelize db:seed:all

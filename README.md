# wtts?
Trabalho de desenvolvimento do Montanha.  
O trabalho visa criar uma API que faz o calculo de consumo energético de acordo com alguns parâmetros. 

# Dependências
Essas sao as dependencias do projeto atualmente

    express: uma dependência que oferece um conjunto de recursos para aplicações node / https://expressjs.com/;

    nodemon: uma dependência de desenvolvimento que facilita alterações na aplicação, nao sendo necessário roda-la novamente toda alteração que for realizada / https://nodemon.io/;

    jest: switch de testes unitários / https://jestjs.io/pt-BR/;

# Padrão de Branchs
Sempre que criar uma branch nova, seguir o seguinte padrao:
    
    feature/nome-da-tarefa-desenvolvida
    fix/nome-do-ajuste-realizado
    test/nome-do-teste-desenvolvido

Sempre para criar uma branch, seguir o seguinte fluxo:

    git checkout dev
    git pull
    git checkout -b feature/nome-da-tarefa (ou fix, ou test)
    ~~ desenvolvimento da tarefa ~~

# Como executar a aplicação?

Inicialmente se deve executar o npm install para instalar todas as dependências, em seguida:

    dev: npm run dev (executa a aplicação com o nodemon)
    padrão: npm start
    teste: npm test

# Padrao de push
Sempre que fizer uma tarefa, criar a branch conforme citado acima e seguir o seguinte fluxo para o push:
    
    (local) feature/sua-branch > **push** > (origin) feature/sua-branch > **pull request** > dev > **pull request** > main

Ou seja, a tarefa deve ser desenvolvida em uma branch local, subir para a branch com o mesmo nome no repositorio, ser feito um pull request dessa branch pra develop e apos ser feito um pull request da develop pra main.

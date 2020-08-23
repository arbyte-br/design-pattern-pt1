# Iniciando
* utilize a versão 10 ou superior do nodejs
* Após clonar o projeto, rode o comando `npm install` ou `yarn install`
* Configure um arquivo chamado .env, contendo as mesmas variaveis do arquivo .enx-example, com os valores corretos
* Rode a api com o comando `npm start` ou `npm run dev`, se estiver utilizando yarn, utilize os comandos `yarn start` ou `yarn run dev`

## Desing Patterns utilizados
# DDD (Domain-driven design)
* Trabalha com estruturas isoladas de dominios na aplicação: EX
    
      src
        controllers
            controller.js   
        database
            mongo
                index.js
                schemas
                    index.js
                    meuModel.js
        
        routes.js
        app.js    


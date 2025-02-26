# Cypress do Zero a Nuvem

Projeto criado a partir dos conhecimentos aprendidos durante o curso Cypress do Zero a Nuvem, onde aprendi do básico à gestão de testes na nuvem: aprenda a criar, executar e implementar testes automatizados em um pipeline de CI (Cypress versão 13.12.0).

## Pré condições

É necessário ter instalado o Node.js e o npm para executar este projeto.

> Eu usei a versão `v22.13.1` and `10.92` do Node.js e npm, respectivamente. Eu sugeriro que você use a mesma versão ou superior.

## Instalação

Rode o comando `npm install` (ou a versão curta `npm i`) para instalar as dependencias de desenvolvimento.

## Testes

Neste projeto, você pode executar os testes em viewports de desktop e mobile.

##### Desktop
Execute o comando `npx cypress run` para executar o teste em modo headless.     
Ou, execute o NPM Script já criado `cy:run` para executar o teste em modo headless.     

Execute o comando `npx cypress open` para executar o teste em modo interativo (UI).     
Ou, execute o NPM Script já criado `cy:open` para executar o teste em modo interativo (UI). 

##### Mobile
    
Use, o NPM Script `cy:open:mobile` para executar o teste em viewport mobile em modo interativo (UI).      

Use, o NPM Script `cy:run:mobile` para executar o teste em viewport mobile.    

___

Este projeto foi criado a partir do curso ["Cypress, do Zero à Nuvem"](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?referralCode=5E367E0C332F3B967B6C&couponCode=25BBPMXACCAGE1) da escola ["Talking About Testing"](https://talking-about-testing.vercel.app/)
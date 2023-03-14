# Robotica
Página web do grupo de robótica do IFPR Cascavel

## Acesso

Para acessar a página:

[https://ifpr-cascavel.github.io/robotica](https://ifpr-cascavel.github.io/robotica)

## Atualizações

Para alterar a página:

1. Clone o repositório
2. Entre no diretório
3. Crie o arquivo `.env` com os valores para as variáveis de ambiente necessárias:
```bash
GIT_MAIL=""
GIT_USER=""
GIT_NAME=""
GIT_PASS=""
CURRENT_BRANCH="main"
USE_SSH=false
```

Obs: GIT_PASS corresponde ao *token* de acesso ao github (e não à senha do usuário). 

4. Instale as dependencias do docusaurus
    - `docker compose up init`
5. Execute o servidor local
    - `docker compose up robotica`
    - servidor disponível para testes em `http://localhost:3030/robotica`
6. Edite os aquivos e teste
7. Faça o *deploy* para o github
    - `docker compose up deploy`
8. Acesse em [https://ifpr-cascavel.github.io/robotica](https://ifpr-cascavel.github.io/robotica)
    - O site não é atualizado imediatamente. Demora alguns minutos.

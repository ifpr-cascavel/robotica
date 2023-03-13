# robotica
Página web do grupo de robótica do IFPR Cascavel

Para alterar a página:

1. Clone o repositório
2. Entre no diretório
3. Crie o arquivo `.env` com os valores para de ambiente necessárias:
```bash
GIT_MAIL=""
GIT_USER=""
GIT_NAME=""
GIT_PASS=""
CURRENT_BRANCH="main"
USE_SSH=false
```

4. Instale as dependencias do docusaurus
    - `docker compose up init`
5. Execute o servidor local
    - `docker compose up robotica`
6. Edite os aquivos e teste
7. Faça o *deploy* para o github
    - `docker compose up deploy`

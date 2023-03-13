---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Funções básicas

## Entrada e saída de dados

Para que exista a interação do algoritmo desenvolvido com agentes externos - p.ex. usuário - é necessário a utilização de algumas funções específicas.

### Saída de dados

A saída de dados que utilizaremos aqui é a tela. Para mostrar uma mensagem na tela, utilizaremos a função `escreva()`, acompanhada do que queremos que seja apresentado na tela.


**Exemplos**  
- Para apresentar na tela a mensagem `Olá Mundo`:  


<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```java
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>


- Para apresentar a mensagem `Bom dia, José`:


<Tabs groupId="language">
  <TabItem value="portugol" label="Portugol" default>

  ```
  escreva("Bom dia, José");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```java
  System.out.println("Bom dia, José");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Bom dia, José")
  ```

  </TabItem>
</Tabs>


**Exemplo**
- Mostrando um valor na tela

<Tabs groupId="language">
  <TabItem value="portugol" label="Portugol" default>

  ```
  altura ← 50
  escreva(altura)
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```java
  int altura = 50;
  System.out.println(altura);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  altura = 50
  print(altura)
  ```

  </TabItem>
</Tabs>



Saída na tela:
```
50
```

É possível também apresentar diversos valores de uma única vez em uma única saída.

**Exemplo**  

<Tabs groupId="language">
  <TabItem value="portugol" label="Portugol" default>

  ```
  caractere: nome ← "Dunga";
  inteiro: idade ← 35;
  escreva(nome, "tem", idade, "anos de idade.");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```java
  String nome = "Dunga";
  int idade = 35;
  System.out.printf("%s tem %d anos de idade.\n", nome, idade)
  ```

  **Atenção** ao **f** no `printf`!

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  nome = Dunga
  idade = 35
  print(f"{nome} tem {idade} anos de idade")
  ```

  </TabItem>
</Tabs>


### Entrada de dados

**Exemplo**  
- Solicite ao usuário que digite seu nome

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  A entrada de dados é a maneira como o usuário pode inserir dados para dentro do algoritmo. Aqui utilizaremos a função `leia()`.

  ```parser
  inicio;
  //variáveis
  caractere: nome;

  //entrada
  // highlight-next-line
  leia(nome);

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  A entrada de dados é a maneira como o usuário pode inserir dados para dentro do algoritmo. Em Java utilizaremos um objeto da classe `Scanner` com seus métodos (`next`, `nextInt`..) .

  ```js
  //variaveis
  String nome;
  // highlight-next-line
  Scanner entrada;        //objeto que fará a leitura  

  //entrada
  // highlight-next-line
  entrada = new Scanner(System.in); //associa o objeto à entrada padrão
  // highlight-next-line
  nome = entrada.next()   //lê um dado
  // highlight-next-line
  entrada.close()         //finaliza a entrada de dados
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  A entrada de dados é a maneira como o usuário pode inserir dados para dentro do algoritmo. Em Python utilizaremos a função `input()`. 

  ```python
  nome = input()
  ```

  </TabItem>
</Tabs>

**Observação**  

Perceba que no exemplo, o nome do usuário será armazenado em uma variável chamada `nome`.

**Exemplo**
- Pergunte ao usuário seu nome e idade. Em seguida, mostre na tela as informações digitadas.

<Tabs groupId="language">
  <TabItem value="portugol" label="Portugol" default>

  ```
  inicio;

  //Variáveis
  caracterer nome;
  inteiro idade;

  //Entrada
  escreva("Nome: ");
  leia(nome);
  escreva("Idade: ");
  leia(idade);

  //Saída
  escreva(nome, " tem ", idade, " anos de idade.");

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  //Variáveis
  String nome;
  int idade;

  //Entrada
  Scanner entrada = new Scanner(System.in);

  System.out.println("Nome: ");
  nome = entrada.next();
  System.out.println("Idade: ");
  idade = entrada.nextInt();
  entrada.close()

  //Saída
  System.out.printf("%s tem %d anos de idade.\n", nome, idade);
  ```

  **Atenção** ao uso da função `printf`.

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  #Entrada
  nome = input("Nome: ")
  idade = input("Idade: ")

  #Saída
  print(f"{nome} tem {idade} anos de idade")
  ```

  </TabItem>
</Tabs>



No exemplo, o nome do usuário será armazenado em uma variável chamada `nome`. Na continuação do algoritmo, este valor pode ser utilizado, acessando o conteúdo da variável.

**Exemplo**  

- Solicite ao usuário que digite um número. Em seguida, mostre na tela o número digitado.

<Tabs groupId="language">
  <TabItem value="portugol" label="Portugol" default>

  ```
  inicio;
  //variaveis
  inteiro: valor;

  //entrada
  escreva("Digite um valor: ");
  leia(valor);

  //saida
  escreva("O valor digitado foi ", valor)

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  import java.util.Scanner;
  //variaveis
  int valor;
  Scanner entrada;

  //entrada
  entrada = new Scanner(System.in);
  System.out.print("Digite um valor: ");
  valor = entrada.nextInt();
  entrada.close();

  //saida
  System.out.printf("O valor digitado foi %d\n", valor);
  ```

  Observe que foi utilizado o método `nextInt()`, dado que é esperado que a entrada seja do tipo `int`.

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  valor = input("Digite um valor: ")
  print(f"O valor digitado foi {valor}")
  ```

  </TabItem>
</Tabs>

**Exercícios**  
- Desenvolva um algoritmo que pergunta ao usuário o nome do usuário, e em seguida responde "Boa noite, `user`", substituindo `user` pelo nome digitado.

<details>
  <summary>Resposta</summary>
<Tabs groupId="language">
  <TabItem value="portugol" label="Portugol" default>

  ```
  inicio;
  //variaveis
  caractere: nome;

  //entrada
  escreva("Seu nome: ");
  leia(nome);

  //saida
  escreva("Boa noite, ", nome)

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```java
  import java.util.Scanner;
  //variaveis
  String nome;

  //entrada
  Scanner entrada = new Scanner(System.in);
  System.out.print("Seu nome: ");
  nome = entrada.next();
  entrada.close();

  //saida
  System.out.printf("Boa noite %s\n", nome);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  #entrada
  nome = input("Seu nome: ")

  #saida
  print(f"Boa noite, {valor}")
  ```

  </TabItem>
</Tabs>
</details>

- Faça um algoritmo que pergunta ao usuário a sua idade, e em seguida informa a mensagem "Você tem `X` anos", substituindo `X` pela idade digitada.

- Faça um algoritmo que pergunta ao usuário um valor. Em seguida, mostra esse valor elevado ao quadrado.

- Desenvolva um algoritmo que calcula a média entre dois valores informados pelo usuário.

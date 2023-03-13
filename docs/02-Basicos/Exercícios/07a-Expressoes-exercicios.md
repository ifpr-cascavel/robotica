---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Expressões

- Faça um programa que pergunta um número ao usuário, e em seguida mostra o antecessor e o sucessor desse número.  

<details>
  <summary>Resposta</summary>
<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```
inicio;
//variaveis
inteiro valor;
inteiro antecessor, sucessor;

//entrada
escreva("Digite um número: ");
leia(valor);

//processamento
antecessor = valor -1;
sucessor   = valor +1

//saida
escreva("antecessor: ", antecessor);
escreva("sucessor  : ", sucessor);

fim;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```java
//Variáveis
int valor;
int antecessor, sucessor;
Scanner entrada;

//Entrada
System.out.println("Digite um número: ");
entrada = new Scanner(System.in);
valor = entrada.nextInt();
entrada.close();

//Processamento
antecessor = valor -1;
sucessor = valor +1;

//Saída
System.out.printf("O antecessor de %d é %d\n", valor, antecessor);
System.out.printf("O sucessor de %d é %d\n", valor, sucessor);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
#Entrada
print('Digite um número')
valor = input()
valor = int(valor)

#Processamento
antecessor = valor -1
sucessor = valor +1

#Saída
print(f'O antecessor de {valor} é {antecessor}', )
print(f'O sucessor de {valor} é {sucessor}', )
  ```

  </TabItem>
</Tabs>
</details>

1. Faça um programa que pergunta o nome do usuário, e em seguida mostra a frase "Boa tarde" seguida do nome do usuário.  

1. Pergunte um número ao usuário, e mostre o valor desse número ao cubo.

1. Pergunte três valores ao usuário, que correspondem às horas, minutos e segundos do horário atual. Calcule quantos segundos se passaram desde 00:00 horas.  
(Adaptado de MENEZES 2019, pg. 72)

1. Pergunte um número ao usuário, e em seguida mostre a raiz quadrada e a raiz cúbica desse número.

1. Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R\\$ 60,00 por dia e R\\$ 0,15 por km rodado.  
(Fonte: MENEZES 2019, pg. 72)

1. Escreva um programa para ler as dimensões de um retângulo, com o tamanho da base ($b$) e da altura ($h$). Calcule o mostre o perímetro ($p$) e área ($a$) desse retângulo.
$$p = 2(b+h)$$
$$a = bh$$

1. Pergunte ao usuário o valor do raio ($r$) de um círculo, e em seguida mostre o perímetro ($p$) e a área ($a$) desse círculo.
$$p = 2\pi r$$
$$a = \pi r^2$$

1. Faça  um  algoritmo  que  leia  três  notas ($N_1$, $N_2$ e $N_3$)  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno. Considerar que a média ($M$) é ponderada e que o peso das notas é 2, 3 e 5. A equação para o cálculo da média final é: 
$$M = \frac{N_1 \times 2 + N_2 \times 3 + N_3 \times 5}{2+3+5}$$  
(Fonte: CARVALHO, 2007)

1. Faça um programa que solicite o preço de uma mercadoria e o percentual de desconto. Exiba o valor do desconto e o preço a pagar.  
(Fonte: MENEZES 2019, pg. 72)

1. Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem de aumento. Exiba o valor do aumento e do novo salário.  
(Fonte: MENEZES 2019, pg. 72)

1. Peça ao usuário que informe o valor de um boleto, o percentual de juros cobrado e o número de dias em atraso. O programa deve calcular o valor total a ser pago, utilizando a fórmula 
$$Total = Valor + Valor \times \frac{Juros}{100} \times Dias $$  
(Adaptado de LOPES, 2011)

1. Considere que houve uma eleição, na qual três candidatos concorreram ($C_a$, $C_b$ e $C_c$). O usuário deve informar quantos votos cada candidato recebeu e quantidade de votos brancos e nulos. O programa deve calcular e mostrar a quantidade total de eleitores, o percentual de votos que cada candidato recebeu, o percentual de votos brancos e o percentual de votos nulos. O cálculo dos percentuais é dado em relação ao total de votos da eleição.  
(Adaptado de LOPES, 2011)

1. O  custo  de  um  carro  novo  ao  consumidor  é  a  soma  do  custo  de  fábrica  com a  porcentagem  do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja  de  28%  e  os  impostos  de  45%,  escrever  um  algoritmo  para  ler o  custo  de  fábrica  de  um  carro, calcular e escrever o custo final ao consumidor.  
(Fonte: CARVALHO, 2007)

1. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais  uma  comissão  também  fixa  para  cada  carro  vendido  e  mais  5% do  valor  das  vendas  por  ele efetuadas. Escrever um algoritmo que leia o número de  carros por  ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.  
(Fonte: CARVALHO, 2007).


## Exercícios externos



### Beecrowd
1. [Beecrowd 1003 - Soma Simples](https://www.beecrowd.com.br/judge/pt/problems/view/1003)
1. [Beecrowd 1004 - Produto Simples](https://www.beecrowd.com.br/judge/pt/problems/view/1004)
1. [Beecrowd 1007 - Diferença](https://www.beecrowd.com.br/judge/pt/problems/view/1007)
1. [Beecrowd 3055 - Nota Esquecida ](https://www.beecrowd.com.br/judge/pt/problems/view/3055)
1. [Beecrowd 2786 - Piso da Escola ](https://www.beecrowd.com.br/judge/pt/problems/view/2786)
1. [Beecrowd 1021 - Notas e Moedas ](https://www.beecrowd.com.br/judge/pt/problems/view/1021)

## Referências
MENEZES, N. N. C. Introdução à programação com Python: algoritmos e lógica de programação para iniciantes. 3.ed. São Paulo: Novatec, 2019.  

**Outras referências**  

[CARVALHO, F.P. Lógica de programação - Algoritmos: Notas de aula. FIT. Taquara, 2007 ](https://fit.faccat.br/~fpereira/apostilas/exerc_resp_alg_mar2007.pdf)  
[LOPES, A. Algoritmos: Notas de aula. Mossoró: IFRN, 2011](http://docente.ifrn.edu.br/abrahaolopes/semestre-2012.1/1.2411.1v-fundamentos-de-logica-e-algoritmos/lista-de-exercicios-2-operadores-matematicos/at_download/file)

  

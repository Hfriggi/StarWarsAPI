# StarWarsAPI

Este é o meu projeto para o desafio de entrada Equipe de Integração "Node" (Nivel junior)
Este projeto conta com uma página html siples para o usuário operar o programa.

Todos os gets são baseados em IDs, ou seja, para buscar um personagem ou um planeta da série Star Wars, deve preencher o campo com um número inteiro.
A api utilizada é a https://swapi.py4e.com/, ela é idêntica à API https://swapi.dev/, porém a .py4e tem desempenho melhor respondendo à gets.

![image](https://user-images.githubusercontent.com/91426980/169716490-1e7702f7-f9e8-4b5c-9ce8-40baa840bfa7.png)

Para Piloto e Copiloto, os gets procuram pelo parâmetro "people", que tem ao todo 87 personagens cadastrados de ID 1 até 87

Para planetas temos 60 dispostos com ID de 1 à 60

Para Naves, há cadastros nos seguintes IDs específicos= 2,3,5,9,10 (*Millenium Falcon*),11,12,13,15,17,19,21,22,23,27,28,29,31 e 32.

Caso tenha inserido IDs válidos nos campos, o box de informações irá se preencher com as informações da viagem.

![image](https://user-images.githubusercontent.com/91426980/169717129-501940b3-b690-41a3-a7bb-46c5bd0e7fe2.png)

IMPORTANTE: O site só permitirá você fazer download do arquivo JSON com as informações da viagem se um entre o piloto e copiloto for um Droid.


## 🛠️ Abrir e rodar o projeto

Para testar localmente este site, basta selecionar uma pasta de sua escolha no seu computador, clicar com botão direito e selecionar Abrir com VScode.

![image](https://user-images.githubusercontent.com/91426980/169716270-3c114410-da7f-4b72-a3f4-ca6b83a0479e.png)

Abrindo o VScode, basta rodar o seguinte comando no terminal do VScode:

```git clone https://github.com/Hfriggi/StarWarsAPI.git```

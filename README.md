# DesignPatternsJS
Projeto exemplificando padrões de desenvolvimento utilizando JavaScript
```
Obs.:
- A fim de isolar os padrões para facilitar o entendimento, foi criado em cada pasta de patterns um arquivo index.js implementando o exemplo de uso, que pode ser executado com o comando: "node index.js"

- Na pasta commum estão as classes utilizadas nos exemplos de implementação
```


# Padrões criacionais

## Singleton
 > Garante a existência de uma única instância de uma determinada classe dentro do sistema, mantendo um ponto global de acesso ao objeto.
>### Aplicabilidade
>> Utilize o padrão Singleton quando uma classe em seu programa deve ter apenas uma instância disponível para todos seus clientes; por exemplo, um objeto de base de dados único compartilhado por diferentes partes do programa.

## Factory Method
> O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.
> ### Aplicabilidade
>> Use o Factory Method quando não souber de antemão os tipos e dependências exatas dos objetos com os quais seu código deve funcionar.
>>
>> O Factory Method separa o código de construção do produto do código que realmente usa o produto. Portanto, é mais fácil estender o código de construção do produto independentemente do restante do código.
>>
>> Por exemplo, para adicionar um novo tipo de produto à aplicação, só será necessário criar uma nova subclasse criadora e substituir o método fábrica nela.

## Builder
> O Builder é um padrão de projeto criacional que permite a você construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção.
> ### Aplicabilidade
>> Use o padrão Builder quando você quer que seu código seja capaz de criar diferentes representações do mesmo produto (por exemplo, casas de pedra e madeira).
>>
 >> O padrão Builder pode ser aplicado quando a construção de várias representações do produto envolvem etapas similares que diferem apenas nos detalhes.
>>
>> A interface base do builder define todas as etapas de construção possíveis, e os buildrs concretos implementam essas etapas para construir representações particulares do produto. Enquanto isso, a classe diretor guia a ordem de construção.

## Prototype
> O Prototype é um padrão de projeto criacional que permite copiar objetos existentes sem fazer seu código ficar dependente de suas classes.
> ### Aplicabilidade
>>  Utilize o padrão quando você precisa reduzir o número de subclasses que somente diferem na forma que inicializam seus respectivos objetos. Alguém pode ter criado essas subclasses para ser capaz de criar objetos com uma configuração específica.
>>
 >> O padrão Prototype permite que você use um conjunto de objetos pré construídos, configurados de diversas formas, como protótipos.
>>
>> Ao invés de instanciar uma subclasse que coincide com alguma configuração, o cliente pode simplesmente procurar por um protótipo apropriado e cloná-lo.

## Abstract Factory
> O Abstract Factory é um padrão de projeto criacional que permite que você produza famílias de objetos relacionados sem ter que especificar suas classes concretas.
>
>Obs.: Devido ao JavaScript não implementar interfaces, não teremos exemplos neste repositório, sendo implementado posteriormente com TypeScript
>
> ### Aplicabilidade
>> Use o Abstract Factory quando seu código precisa trabalhar com diversas famílias de produtos relacionados, mas que você não quer depender de classes concretas daqueles produtos-eles podem ser desconhecidos de antemão ou você simplesmente quer permitir uma futura escalabilidade.
>>
>> O Abstract Factory fornece a você uma interface para a criação de objetos de cada classe das famílias de produtos. Desde que seu código crie objetos a partir dessa interface, você não precisará se preocupar em criar uma variante errada de um produto que não coincida com produtos já criados por sua aplicação.

# Padrões Estruturais

## Adapter
> O Adapter é um padrão de projeto estrutural que permite objetos com interfaces incompatíveis colaborarem entre si.
> ### Aplicabilidade
 >> Utilize a classe Adaptador quando você quer usar uma classe existente, mas sua interface não for compatível com o resto do seu código.
>>
 >> O padrão Adapter permite que você crie uma classe de meio termo que serve como um tradutor entre seu código e a classe antiga, uma classe de terceiros, ou qualquer outra classe com uma interface estranha.
>>
 >> Utilize o padrão quando você quer reutilizar diversas subclasses existentes que não possuam alguma funcionalidade comum que não pode ser adicionada a superclasse.
 >>
 >> Também pode ser utilizado ao realizar refatorações no código, quando você precisa que o código antigo continue funcionando apos a aplicação da nova interface.

 ## Bridge
 > O Bridge é um padrão de projeto estrutural que permite que você divida uma classe grande ou um conjunto de classes intimamente ligadas em duas hierarquias separadas—abstração e implementação—que podem ser desenvolvidas independentemente umas das outras.
 > ### Aplicabilidade
 >> Utilize o padrão Bridge quando você quer dividir e organizar uma classe monolítica que tem diversas variantes da mesma funcionalidade (por exemplo, se a classe pode trabalhar com diversos servidores de base de dados).

 ## Composite
 > O Composite é um padrão de projeto estrutural que permite que você componha objetos em estruturas de árvores e então trabalhe com essas estruturas como se elas fossem objetos individuais.
 > ### Aplicabilidade
 >>  Utilize o padrão Composite quando você tem que implementar uma estrutura de objetos tipo árvore.
 >>
 >>  Todos os elementos definidos pelo padrão Composite compartilham uma interface comum. Usando essa interface o cliente não precisa se preocupar com a classe concreta dos objetos com os quais está trabalhando.
 ## Decorator
 > O Decorator é utilizado para adicionar novas funcionalidades a uma classe, função ou componente sem a necessidade de altera-las.
 > ### Aplicabilidade
 >>  Utilize o padrão Decorator quando você precisa ser capaz de projetar comportamentos adicionais para objetos em tempo de execução sem quebrar o código que usa esses objetos.
>>
>> O Decorator lhe permite estruturar sua lógica de negócio em camadas, criar um decorador para cada camada, e compor objetos com várias combinações dessa lógica durante a execução. O código cliente pode tratar de todos esses objetos da mesma forma, como todos seguem a mesma interface comum.

# Referências:

- GAMMA, Eric; HELM, Richard; JOHNSON, Ralph; VLISSIDES, John. Design Patterns: Elements of Reusable Object-Oriented Software. Editora: Addison-Wesley Professional, 10/11/1994.

- https://www.dofactory.com/javascript/design-patterns/factory-method

- https://refactoring.guru/pt-br/design-patterns

- https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192

- https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s14.html
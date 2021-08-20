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
## Facade
> O Facade é um padrão de projeto estrutural que fornece uma interface simplificada para uma biblioteca, um framework, ou qualquer conjunto complexo de classes.
> ## Aplicabilidade
>> Utilize o padrão Facade quando você precisa ter uma interface limitada mas simples para um subsistema complexo.
>>
>> Com o passar do tempo, subsistemas ficam mais complexos. Até mesmo aplicar padrões de projeto tipicamente leva a criação de mais classes. Um subsistema pode tornar-se mais flexível e mais fácil de se reutilizar em vários contextos, mas a quantidade de códigos padrão e de configuração que ele necessita de um cliente cresce cada vez mais. O Facade tenta consertar esse problema fornecendo um atalho para as funcionalidades mais usadas do subsistema que corresponde aos requerimentos do cliente.
> ## Flyweight
> O Flyweight é um padrão de projeto estrutural que permite a você colocar mais objetos na quantidade de RAM disponível ao compartilhar partes comuns de estado entre os múltiplos objetos ao invés de manter todos os dados em cada objeto.
> ## Aplicabilidade
>> Utilize o padrão Flyweight apenas quando seu programa deve suportar um grande número de objetos que mal cabem na RAM disponível.
>>
 >> O benefício de aplicar o padrão depende muito de como e onde ele é usado. Ele é mais útil quando:
>>
>> - Uma aplicação precisa gerar um grande número de objetos similares (isso drena a RAM disponível no dispositivo alvo)
>> - Os objetos contém estados duplicados que podem ser extraídos e compartilhados entre múltiplos objetos
> ## Proxy
> O Proxy é um padrão de projeto estrutural que permite que você forneça um substituto ou um espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original, permitindo que você faça algo ou antes ou depois do pedido chegar ao objeto original.
> ## Aplicabilidade
>> Há dúzias de maneiras de utilizar o padrão Proxy. Vamos ver os usos mais populares.
>>
>> Inicialização preguiçosa (proxy virtual). Este é quando você tem um objeto do serviço peso-pesado que gasta recursos do sistema por estar sempre rodando, mesmo quando você precisa dele de tempos em tempos.
 >>  ```
 >> Ao invés de criar um objeto quando a aplicação inicializa, você pode atrasar a inicialização do objeto para um momento que ele é realmente necessário.
 >> ```
>> 
 >> Controle de acesso (proxy de proteção). Este é quando você quer que apenas clientes específicos usem o objeto do serviço; por exemplo, quando seus objetos são partes cruciais de um sistema operacional e os clientes são várias aplicações iniciadas (incluindo algumas maliciosas).
>> ```
>> O proxy pode passar o pedido para o objeto de serviço somente se as credenciais do cliente coincidem com certos critérios.
>> ```
 >> Execução local de um serviço remoto (proxy remoto). Este é quando o objeto do serviço está localizado em um servidor remoto.
 >> ```
 >> Neste caso, o proxy passa o pedido do cliente pela rede, lidando com todos os detalhes sujos pertinentes a se trabalhar com a rede.
 >> ```
 >> Registros de pedidos (proxy de registro). Este é quando você quer manter um histórico de pedidos ao objeto do serviço.
 >> ```
 >> O proxy pode fazer o registro de cada pedido antes de passar ao serviço.
 >> ```
 >> Cache de resultados de pedidos (proxy de cache). Este é quando você precisa colocar em cache os resultados de pedidos do cliente e gerenciar o ciclo de vida deste cache, especialmente se os resultados são muito grandes.
 >> ```
>> O proxy pode implementar o armazenamento em cache para pedidos recorrentes que sempre acabam nos mesmos resultados. O proxy pode usar como parâmetros dos pedidos as chaves de cache.
>> ```
 >> Referência inteligente. Este é para quando você precisa ser capaz de se livrar de um objeto peso-pesado assim que não há mais clientes que o usam.
 >> ```
 >> O proxy pode manter um registro de clientes que obtiveram uma referência ao objeto serviço ou seus resultados. De tempos em tempos, o proxy pode verificar com os clientes se eles ainda estão ativos. Se a lista cliente ficar vazia, o proxy pode remover o objeto serviço e liberar os recursos de sistema que ficaram empatados.
 >> ```
>> O proxy pode também fiscalizar se o cliente modificou o objeto do serviço. Então os objetos sem mudança podem ser reutilizados por outros clientes.
# Referências:

- GAMMA, Eric; HELM, Richard; JOHNSON, Ralph; VLISSIDES, John. Design Patterns: Elements of Reusable Object-Oriented Software. Editora: Addison-Wesley Professional, 10/11/1994.

- https://www.dofactory.com/javascript/design-patterns/factory-method

- https://refactoring.guru/pt-br/design-patterns

- https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192

- https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s14.html
# Picgram

> A ideia é fazeres um página que mostre as fotos dessas apis e quando clicas numa foto vais diretamente para outra página com o perfil do utilizador.

**Detalhes**

1. Duas páginas diferentes com routing em Angular 8 IVY
1. A página do Utilizador é um módulo á parte
1. A directiva `*ngFor` deverá ser usada para repetir pelas fotos
1. As fotos deverão apresentar o **thumbnailUrl e o title**; E deverão ser **um componente** á parte
1. **Quando se clica numa foto deverás usar um pipe em RXJS para fazeres o match entre a foto -> álbum -> user e de seguida carregares a informação utilizador na outra página**
1. A página das fotos deverá ter um filtro que filtra pelo title de cada foto
1. No entanto a query do filtro deverá ser guardada como parâmetro do URL e deverá ser aplicado cada vez que entras na página
1. A **página do user** deverá apenas mostrar as informação do utilizador e **ser possível voltar atrás**
1. A página user deverá ser um módulo
1. Deverás usar um **datepipe para mostrar a data atual cada vez que entrares na página das fotos**
1. Para layout podes usar bootstrap [Bootstrap](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css)
1. **Deverás fazer unit tests em Jasmine a todo o código que fizeres**

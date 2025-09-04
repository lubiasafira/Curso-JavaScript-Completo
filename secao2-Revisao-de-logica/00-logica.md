# Revisão de Lógica em JavaScript

## Declaração de Variáveis

```javascript
var   // escopo de função, pouco usado atualmente
let   // escopo de bloco, recomendado para variáveis mutáveis
const // escopo de bloco, usado para valores imutáveis (não podem ser reatribuídos)
```

## Tipos de Dados

### Primitivos

São imutáveis e armazenados diretamente na memória:

- **Boolean** → `true` ou `false`
- **Null** → valor nulo intencional (`null`)
- **Undefined** → valor não definido (ex.: variável declarada mas sem valor)
- **Number** → números inteiros ou decimais (`42`, `3.14`)
- **BigInt** → números inteiros muito grandes (`123n`)
- **String** → texto (`"Olá"`, `'Mundo'`, `Template`)
- **Symbol** → identificador único (`Symbol('id')`)

### Objetos

Coleções de pares chave-valor e estruturas mais complexas:

- **Object**, **Array**, **Function**, **Date**, etc.

---

📖 [Leia mais na MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Data_structures)

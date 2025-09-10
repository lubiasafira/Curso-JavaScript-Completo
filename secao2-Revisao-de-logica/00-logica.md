# 1. Revisão de Lógica em JavaScript

## 1.1. Declaração de Variáveis

```javascript
var   // escopo de função, pouco usado atualmente
let   // escopo de bloco, recomendado para variáveis mutáveis
const // escopo de bloco, usado para valores imutáveis (não podem ser reatribuídos)
```

## 1.2. Tipos de Dados

### 1.2.1. Primitivos

São imutáveis e armazenados diretamente na memória:

- **Boolean** → `true` ou `false`
- **Null** → valor nulo intencional (`null`)
- **Undefined** → valor não definido (ex.: variável declarada mas sem valor)
- **Number** → números inteiros ou decimais (`42`, `3.14`)
- **BigInt** → números inteiros muito grandes (`123n`)
- **String** → texto (`"Olá"`, `'Mundo'`, `Template`)
- **Symbol** → identificador único (`Symbol('id')`)

### 1.2.2. Objetos

Coleções de pares chave-valor e estruturas mais complexas:

- **Object**, **Array**, **Function**, **Date**, etc.

---

📖 [Leia mais na MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Data_structures)

## 1.3. Operadores

### Arimáticos

- `+` -> Soma
- `-` -> Subtração
- `/` -> divisão
- `*` -> Multiplicação
- `%` -> Resto da Divisão
- `**` -> Potenciação

### Atribuição

- `=` → atribuição simples
- `+=`→ soma e atribui
- `-=` → subtrai e atribui
- `*=` → multiplica e atribui
- `/=`→ divide e atribui
- `%=` → resto da divisão e atribui
- `**=` → potência e atribui

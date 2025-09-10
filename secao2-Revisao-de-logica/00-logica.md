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

### 1.3.1. Arimáticos

- `+` -> Soma
- `-` -> Subtração
- `/` -> divisão
- `*` -> Multiplicação
- `%` -> Resto da Divisão
- `**` -> Potenciação

### 1.3.2. Atribuição

- `=` → atribuição simples
- `+=`→ soma e atribui
- `-=` → subtrai e atribui
- `*=` → multiplica e atribui
- `/=`→ divide e atribui
- `%=` → resto da divisão e atribui
- `**=` → potência e atribui

### 1.3.3. 🔼 Incremento e Decremento

| Operador | Descrição | Exemplo | Resultado |
|----------|-----------|---------|-----------|
| `n++`    | Pós-incremento (usa depois soma +1) | `let n=5; console.log(n++)` | imprime 5, depois n=6 |
| `++n`    | Pré-incremento (soma +1 antes de usar) | `let n=5; console.log(++n)` | imprime 6 |
| `n--`    | Pós-decremento (usa depois subtrai -1) | `let n=5; console.log(n--)` | imprime 5, depois n=4 |
| `--n`    | Pré-decremento (subtrai -1 antes de usar) | `let n=5; console.log(--n)` | imprime 4 |

---

### 1.3.4. ⚖️ Comparação

| Operador | Significado | Exemplo | Resultado |
|----------|-------------|---------|-----------|
| `==`  | Igual (com conversão de tipo) | `10 == "10"` | true |
| `===` | Igual estrito (sem conversão) | `10 === "10"` | false |
| `!=`  | Diferente (com conversão de tipo) | `10 != "10"` | false |
| `!==` | Diferente estrito | `10 !== "10"` | true |
| `>`   | Maior que | `7 > 3` | true |
| `<`   | Menor que | `7 < 3` | false |
| `>=`  | Maior ou igual | `7 >= 7` | true |
| `<=`  | Menor ou igual | `3 <= 7` | true |

---

### 1.3.5. 🔗 Lógicos

| Operador | Nome | Exemplo | Resultado |
|----------|------|---------|-----------|
| `&&` | AND (E) | `true && false` | false |
| `\|\|` | OR (OU) | `true \|\| false` | true |
| `!`  | NOT (NÃO) | `!true` | false |

---

### 1.3.6. 💡 Exemplo prático

```javascript
let x = 5
let y = 10

console.log(x < y && y < 20)  // true
console.log(x > y || y == 10) // true
console.log(!(x == 5))        // false
```

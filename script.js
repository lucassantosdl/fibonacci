function fibonacci(limite) {
  let a = 0, b = 1;
  const sequencia = [a, b];
  while (b <= limite) {
    let c = a + b;
    a = b;
    b = c;
    sequencia.push(b);
  }
  return sequencia;
}

// Função para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
  const sequencia = fibonacci(numero);
  if (sequencia.includes(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
  }
}

// Exemplo de uso
verificaFibonacci(13); // Saída: 13 pertence à sequência de Fibonacci.
verificaFibonacci(15); // Saída: 15 não pertence à sequência de Fibonacci.
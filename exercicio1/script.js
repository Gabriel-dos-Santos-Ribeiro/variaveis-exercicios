// PARTE 1.


/*let nome 
let idade 

// apareceu UNDEFINED, pois é um valor INDEFINIDO, ou seja, que não foi atribuido a nenhum valor !

nome = prompt('qual é o seu nome ?')
console.log(nome)

idade = Number(prompt('qual é a sua idade ?'))
console.log(idade)

console.log('Tipo da vzriavel nome :', typeof nome)
console.log('tipo da variável idade:', typeof idade)

// variavel nome = string
// variavel idade = string, pois o prompt só nos retorna em string

console.log('Olá,', nome,' você tem', idade,' anos.')
*/
// PARTE 2.

/*let tenis = prompt ('você gosta de tênis ?')


let futebol = prompt ('você gosta de futebol ?')


let doce = prompt ('você gosta de chocolate ?' )

console.log(tenis , futebol , doce)*/


let p1 = 'você gosta de gatos ?'
let p2 = 'você gosta de criançãs ?'
let p3 = 'você gosta de conversar ?'

let resp1 = prompt(p1)
let resp2 = prompt(p2)
let resp3 = prompt(p3)

console.log(resp1, resp2, resp3)
console.log(`
${p1} - ${resp1}
${p2} - ${resp2}
${p3} - ${resp3}
`)
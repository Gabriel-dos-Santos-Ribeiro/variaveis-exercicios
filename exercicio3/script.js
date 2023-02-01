let nomeCompleto = prompt('Digite seu nome completo :')
let dataNasci = prompt ('Em que ano você nasceu ?')
let endereco = prompt ('Digite seu endereço :')
let cpf =Number(prompt ('digite seu CPF :'))
let escolaridade = prompt('Digite sua escolaridade:')
let cnh = confirm ('você possui CNH ?')
let filhos = Number(prompt('você tem filhos ? se sim, qunatos?'))
let cargoAtual = prompt('Digite seu cargo atual :')
let salario = prompt('Digite seu salario :')
let comissao = Number(prompt('Você recebe comissão ? Se sim, informe a porcentagem, caso não, responda com zero'))
let admissao = prompt('Informe a data da sua admissao')

console.log(typeof nomeCompleto, typeof dataNasci, typeof endereco, typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, typeof cargoAtual, typeof salario, typeof comissao, typeof admissao )

// Imprima no console um relatório da pessoa colaboradora.

console.log(`Nome Completo : ${nomeCompleto} 
dataNasci : ${dataNasci}
endereco : ${endereco}
cpf : ${cpf}
escolaridade : ${escolaridade}
cnh : ${cnh}
filhos : ${filhos}
cargo atual : ${cargoAtual}
salario : ${salario}
comissao : ${comissao}
admissao : ${admissao}
`  )
const contato = require( './modelo' );
const readline = require('readline-sync');

const contatos = [];

function adicionarContato(){
    const nome = readline.question('Informe o nome: ');
    const telefone = readline.question('Informe o telefone: ');
    const email = readline.question('Informe o e-mail: ');

    const novoContato = new contato(nome, telefone, email);
    contatos.push(novoContato);

    readline.question('\nPressione enter para continuar...\n');
}

function listarContatos(){
    contatos.forEach(contato => console.log(contato.nome,  '-', contato.telefone, '-', contato.email));
    readline.question('\nPressione enter para continuar...\n');
}

function buscarContatos() {
    
    const nome = readline.question("Informe o nome do contato: ");
    const buscaContato = contatos.find(contato => contato.nome === nome );
    if  (buscaContato){
        console.log(buscaContato.nome, '-', buscaContato.telefone, '-', buscaContato.email);
    } else {
        console.log('Contato não encontrado!')  
    }

    readline.question('\nPressione enter para continuar...\n');
}

function atualizarContatos(){
    const nome = readline.question("Qual é o nome do contato a ser atualizado? ");
    const buscaContato = contatos.find(contato => contato.nome === nome );

    if (buscaContato){
        const telefone = readline.question("Informe o novo telefone do contato: ");
        buscaContato.telefone = telefone;
    } else {
        console.log('Contato não encontrado!')
    }
    readline.question('\nPressione enter para continuar...\n');
}

function removerContato() {
    const nome = readline.question("Informe o nome do contato a ser removido: ");
    const posicao = contatos.findIndex(contato => contato.nome == nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
    } else{
        console.log('Contato não encontrado!')    
    }
    readline.question('\nPressione enter para continuar...\n');
}

module.exports = {adicionarContato,listarContatos,buscarContatos,atualizarContatos,removerContato};
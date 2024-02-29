const readline = require('readline-sync');
const controlador = require('./controlador');

function menu(){
    console.log('1. Adicionar Contato');
    console.log('2. Listar Contatos');
    console.log('3. Buscar Contato');
    console.log('4. Atualizar Contato');
    console.log('5. Excluir Contato');
    console.log('6. Sair do Programa');
}

function escolherOpcao(opcao){
    switch(opcao){
        case '1': controlador.adicionarContato(); break;
        case '2': controlador.listarContatos(); break;
        case '3': controlador.buscarContatos(); break;
        case '4': controlador.atualizarContatos(); break;
        case '5': controlador.removerContato(); break;
        case '6': process.exit(0); 
        default: console.log("Escolha uma opção válida!");
    }
}

function main() {
    while (true) {
        menu()
        const opcao = readline.question('Digite a opcao desejada: ');
        escolherOpcao(opcao);
    }    
}

main(); 
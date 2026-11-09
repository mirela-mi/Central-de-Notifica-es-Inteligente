
const toastElemento = document.getElementById("meuToast");

const toast = new bootstrap.Toast(toastElemento, {
    autohide: true,
    delay: 5000
});

let contador = 0;

const mensagens = {
    cadastro: {
        titulo: "Cadastro realizado",
        mensagem: "O usuário foi cadastrado com sucesso.",
        historico: "Cadastro realizado com sucesso."
    },

    acesso: {
        titulo: "Atenção à segurança",
        mensagem: "Verifique suas credenciais de acesso.",
        historico: "Verificação de segurança executada."
    },

    sistema: {
        titulo: "Sistema atualizado",
        mensagem: "Nenhuma atualização pendente foi encontrada.",
        historico: "Consulta de atualizações realizada."
    }
};

function notificar(tipo) {
    const dados = mensagens[tipo];

    document.getElementById("toastTitulo").textContent = dados.titulo;
    document.getElementById("toastMensagem").textContent = dados.mensagem;

    toast.show();

    adicionarHistorico(dados.historico);
}

function adicionarHistorico(mensagem) {
    const lista = document.getElementById("historico");

    if (contador === 0) {
        lista.innerHTML = "";
    }

    const item = document.createElement("li");

    item.className = "list-group-item";
    item.textContent = mensagem;

    lista.appendChild(item);

    contador++;

    document.getElementById("contador").textContent = contador;
}

function limparHistorico() {
    document.getElementById("historico").innerHTML = `
        <li class="list-group-item text-muted">
            Nenhuma atividade registrada.
        </li>
    `;

    contador = 0;

    document.getElementById("contador").textContent = contador;
}

document.getElementById("confirmarLimpeza").addEventListener("click", function() {
    limparHistorico();

    const modal = bootstrap.Modal.getInstance(
        document.getElementById("modalLimpar")
    );

    modal.hide();
});

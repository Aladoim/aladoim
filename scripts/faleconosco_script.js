function validar(){
  const nome = document.getElementById('nome');
  const sobrenome = document.getElementById('sobrenome');
  const telefone = document.getElementById('telefone');
  const assunto = document.getElementById('assunto');
  const msg = document.getElementById('msg');

  if (nome.value == "") {
    alert("Nome não informado");
    nome.focus();

    return false;
  }

  if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();

    return false;
  }

  if (telefone.value == "") {
    alert("Erro ao informar telefone");
    telefone.focus();

    return false;
  }

  if (assunto.value == "") {
    alert("Assunto não informado");
    assunto.focus();

    return false;
  }

  if (msg.value == "") {
    alert("Mensagem não informada");
    msg.focus();

    return false;
  }

}
//pegando os dados do formulário
async function CapturarDadosCliente(){
  let Nome = document.querySelector('#nome').value;  
  console.log(Nome);
  let CNPJ = document.querySelector('#cnpj').value;  
  console.log(CNPJ);
  let Telefone = document.querySelector('#telefone').value;  
  console.log(Telefone);
  
  let ClienteSalvar = {
    Nome,
    CNPJ,
    Telefone
  }; 


  let salvarclienteviewmodel = {
   ClienteSalvar
  };

  console.log(salvarclienteviewmodel);

  let response = await EnviarApi(salvarclienteviewmodel);
  console.log(response);
}

//função para fazer uma request na api;
async function EnviarApi(viewmodel){
  
  //opções/dados para fazer a request;
  const options = {
    //método, se é um post, get etc..
    method: 'POST',   
    headers:{'content-type':'application/json'},  
    //converte o objeto em um Json real;
    body: JSON.stringify(viewmodel) 
  };

  //TODO: mudar a url para o seu localhost.
  const req =  await fetch('https://localhost:44349/Cliente/Salvar', options )
  //caso a request dê certo, retornará a resposta;
    .then(response => {      
      return response;
    }) 
  //caso dê erro, irá retornar o erro e mostrar no console
    .catch(erro => {
        console.log(erro);
        return erro;
    });

    return req;
}
 // Obtendo referências para elementos HTML
 const passInput = document.querySelector("#inputPasswordId");
 const lenInput = document.querySelector("#inputLengthId");
 const infoLength = document.querySelector('label[for="inputLengthId"]');
 const btnGerar = document.querySelector("#btnGerar");
 
 const chkLower = document.querySelector("#chkLowerId");
 const chkUpper = document.querySelector("#chkUpperId");
 const chkNumber = document.querySelector("#chkNumberId");
 const chkSymbols = document.querySelector("#chkSymbolsId");
 
 // Definindo arrays com números, símbolos e caracteres alfabéticos
 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 const symbols = ["!", "@", "#", "$", "%"];
 
 // Criando arrays de caracteres alfabéticos (minúsculos e maiúsculos)
 const caracters = Array.from(Array(26)).map((_, i) => i + 97);
 const LowercaseCaracters = caracters.map((item) =>
   String.fromCharCode(item)
 );
 const UppercaseCaracters = LowercaseCaracters.map((item) =>
   item.toUpperCase()
 );
 
 // Mostrando o valor do comprimento da senha
 infoLength.innerHTML = lenInput.value;
 
 // Atualizando a exibição do comprimento da senha quando o valor é alterado
 lenInput.addEventListener("change", () => {
   infoLength.innerHTML = lenInput.value;
 });
 
 // Gerar a senha quando o botão 'Gerar' é clicado
 btnGerar.addEventListener("click", () => {
   generatePassword(
     chkNumber.checked,
     chkSymbols.checked,
     chkLower.checked,
     chkUpper.checked,
     lenInput.value
   );
 });
 
 // Função para gerar a senha
 const generatePassword = (
   hasNumbers,
   hasSymbols,
   hasLowercase,
   hasUppercase,
   length
 ) => {
   // Cria um novo array baseado nas opções selecionadas pelo usuário
   const newArray = [
     ...(hasNumbers ? numbers : []),
     ...(hasSymbols ? symbols : []),
     ...(hasLowercase ? LowercaseCaracters : []),
     ...(hasUppercase ? UppercaseCaracters : []),
   ];
 
   // Se o array estiver vazio, não há caracteres para gerar a senha
   if (newArray.length === 0) return;
 
   let password = "";
 
   // Loop para criar a senha baseada no comprimento desejado
   for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * newArray.length);
     password += newArray[randomIndex];
   }
 
   // Exibe a senha gerada no campo de input
   passInput.value = password;
 };
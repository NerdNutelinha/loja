function mostrarMensagem(){
    var msgElement = document.getElementById("mensagem");
    
    // Verifica se a mensagem já está aparecendo na tela
    if (msgElement.style.display === "block") {
        // Se já estiver aberta, ela fecha ao clicar novamente
        msgElement.style.display = "none";
    } else {
        // Altera o texto com as informações da liderança
        msgElement.innerHTML = "O ambiente da liderança é utilizado para armazenar arquivos, convites e relatórios de forma organizada e segura.";
        
        // Faz a caixinha estilizada aparecer na tela
        msgElement.style.display = "block";
    }
}

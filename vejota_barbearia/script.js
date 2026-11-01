document.getElementById('form_barbearia').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // Pegar Valores
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    
    // Mensagem Pronta
    const texto = `Fala Junin! Meu nome é ${nome}. Quero agendar um ${servico} para o dia ${data} às ${hora}.`;

    const numeroZap = "5534999468211"; 
    
    // Link
    const url = `https://wa.me/${numeroZap}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    
    // Aviso
    const msgSucesso = document.getElementById('msgSucesso');
    msgSucesso.classList.remove('d-none');
    this.reset();
    
    setTimeout(() => {
        msgSucesso.classList.add('d-none');
    }, 5000);
});

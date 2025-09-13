function toggleAno(ano) {
    const listaPosts = document.getElementById(`posts-${ano}`);
    const seta = document.getElementById(`seta-${ano}`);
    const botao = seta.parentElement;

    if (listaPosts.style.display === "block") {
        listaPosts.style.display = "none";
        botao.classList.remove("ativo");
    } else {
        listaPosts.style.display = "block";
        botao.classList.add("ativo");
    }
}

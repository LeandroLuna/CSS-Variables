const inputs = document.querySelectorAll('.controls input'); // Seleciona os inputs

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // Seleciona a propriedade 'data-sizing' para informar a unidade dimensional do atributo a ser atualizado.
    document.documentElement.style.setProperty(
        // Altera a propriedade referenciada por 'input.name' para o novo valor 'input.value' com o sufixo (acima)
        `--${this.name}`,
        this.value + suffix
    );
}

inputs.forEach(
    (
        input // Para cada um dos 'input' (dentro do node 'inputs')
    ) => input.addEventListener('mousemove', handleUpdate) // Evento de 'movimentação do mouse' activará um callback
);
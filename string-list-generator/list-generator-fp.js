export function createList(qtd, text = 'Text') {
    const list = Array.from({ length: qtd }, (_, i) => i + 1)
      .reduce((acc, curr) => acc + `  <li>${text} ${curr}</li>\n`, '<ul>\n') + '</ul>';
    return list;
}

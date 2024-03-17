export function createList(qtd, text='Text') {
  let list = '<ul>\n';
  for(let i = 1; i <= qtd; i++){
    list += `  <li>${text} ${i}</li>\n`;
  }
  list += '</ul>';
  return list;
}

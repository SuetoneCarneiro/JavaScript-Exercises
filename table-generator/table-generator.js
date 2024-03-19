export function createTable(rows, cols, text) {
  text = text ? `${text} ` : '';
  let table = '';
  for(let r = 1; r <= rows; r++){
    for(let c = 1; c <= cols; c++){
      table += `${text}${r}.${c}`;
      table += c === cols ? '\n' : ' ';
    }
  }
  return table;
}

export function createTableHTML(rows, cols) {
  let html_table = '<table>\n';
  for(let r = 1; r <= rows; r++){
    html_table += '  <tr>\n';
    for(let c = 1; c <= cols; c++){
      html_table += `    <td>${r}.${c}</td>\n`;
    }
    html_table += '  </tr>\n';
  }
  html_table += '</table>\n';

  return html_table;

}

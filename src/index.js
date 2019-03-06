import { Parser, Grammar } from 'nearley';
import grammar from './grammar.ne';

document.addEventListener('DOMContentLoaded', () => {
  const btnParse = document.getElementById('btn-parse');
  btnParse.addEventListener('click', () => {
    const parser = new Parser(Grammar.fromCompiled(grammar));
    const code = document.getElementById('code');
    parser.feed(code.value);
    console.log(parser.results);
  });
});

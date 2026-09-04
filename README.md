# juanocv.github.io

Portfólio pessoal — site estático, sem build step,
publicado via GitHub Pages em <https://juanocv.github.io>.

## Estrutura

| Arquivo       | Papel                                                            |
| ------------- | ---------------------------------------------------------------- |
| `index.html`  | Marcação semântica das seções. Nenhum texto traduzível fica aqui. |
| `style.css`   | Paleta em variáveis CSS, tipografia e layout de coluna única.     |
| `i18n.js`     | Todo o conteúdo traduzível, em PT / EN / ES.                      |
| `main.js`     | Troca de idioma e de tema.                                        |
| `favicon.svg` | Monograma.                                                        |
| `imgs/`       | Foto de perfil.                                                   |

Nenhuma dependência externa: sem framework, sem CDN, sem web fonts. A página
carrega quatro arquivos, todos do próprio domínio.

## Como rodar localmente

```bash
python -m http.server 4173
```

E abrir <http://localhost:4173>. Abrir o `index.html` direto pelo `file://`
também funciona, já que não há bundler nem módulos ES.

## Como editar

**Trocar um texto** — edite a chave correspondente nos três idiomas em
`i18n.js`. O `index.html` não precisa ser tocado.

**Adicionar um texto novo** — crie a chave nos três idiomas em `i18n.js` e
referencie no HTML:

```html
<p data-i18n="minha_chave"></p>           <!-- texto puro  -->
<div data-i18n-html="minha_chave"></div>  <!-- aceita HTML -->
```

`main.js` percorre esses atributos automaticamente; não há lista de elementos
para manter em sincronia.

**Adicionar um projeto ou uma formação** — duplique um `<article class="entry">`
em `index.html` e crie as chaves correspondentes em `i18n.js`. As datas ficam
no HTML, não no dicionário, por serem iguais nos três idiomas.

**Ajustar cores** — apenas as variáveis em `:root` (claro) e
`[data-theme='dark']` no topo do `style.css`. Nenhuma cor é declarada fora dali.

## Decisões de design

Coluna única de 40rem, fontes do sistema, hierarquia construída só com tamanho,
peso e espaço. Sem cards, sem chips, sem gradientes, sem animação de scroll —
a página deve parecer um documento, não um template.

A única cor além de preto e cinza é a dos links. Todos os contrastes ficam
acima de 5:1 (WCAG AA pede 4.5:1), nos dois temas.

Há um `@media print` para quando a página for impressa ou salva em PDF.

## Comportamento

- **Idioma**: detectado de `navigator.languages` no primeiro acesso; a escolha
  manual fica em `localStorage` (`juanocv:lang`). Padrão: PT.
- **Tema**: segue `prefers-color-scheme` até o primeiro clique no toggle; depois
  fica em `localStorage` (`juanocv:theme`). Um script inline no `<head>` aplica
  o tema antes da primeira pintura para evitar flash.

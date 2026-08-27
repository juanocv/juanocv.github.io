# juanocv.github.io

Portfólio pessoal — site estático, sem build step,
publicado via GitHub Pages em <https://juanocv.github.io>.

## Estrutura

| Arquivo       | Papel                                                                 |
| ------------- | --------------------------------------------------------------------- |
| `index.html`  | Marcação semântica das seções. Nenhum texto traduzível fica aqui.      |
| `style.css`   | Design tokens (`:root` / `[data-theme='light']`), layout e componentes. |
| `i18n.js`     | Todo o conteúdo traduzível, em PT / EN / ES.                           |
| `main.js`     | Idioma, tema, navegação ativa e animação de entrada das seções.        |
| `favicon.svg` | Monograma.                                                             |
| `imgs/`       | Foto de perfil.                                                        |

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
<p data-i18n="minha_chave"></p>       <!-- texto puro   -->
<div data-i18n-html="minha_chave"></div>  <!-- aceita HTML -->
```

`main.js` percorre esses atributos automaticamente; não há lista de elementos
para manter em sincronia.

**Adicionar um projeto** — duplique um `<article class="card">` em
`index.html` e crie as chaves `project_title_N` / `project_text_N` em `i18n.js`.
As tags técnicas do card são propositalmente não traduzidas.

**Ajustar cores** — apenas as variáveis em `:root` (escuro) e
`[data-theme='light']` no topo do `style.css`. Nenhuma cor é declarada fora dali.

## Comportamento

- **Idioma**: detectado de `navigator.languages` no primeiro acesso; a escolha
  manual fica em `localStorage` (`juanocv:lang`). Padrão: PT.
- **Tema**: segue `prefers-color-scheme` até o primeiro clique no toggle; depois
  fica em `localStorage` (`juanocv:theme`). Um script inline no `<head>` aplica
  o tema antes da primeira pintura para evitar flash.
- **Acessibilidade**: skip link, `aria-pressed` no seletor de idioma, foco
  visível e `prefers-reduced-motion` respeitado.

## Dependências externas

Só Google Fonts (Inter + JetBrains Mono). Ícones são SVG inline.

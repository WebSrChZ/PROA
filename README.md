# PROA — Portfólio de Atividades (2023)

> **Repositório arquivado.** Material de estudo do programa PROA (desenvolvimento
> web — HTML, CSS, JavaScript), primeiro semestre de 2023. Mantido como registro
> histórico: **não recebe manutenção e não reflete prática atual.**
>
> Trabalho atual: **[srchz-technologies.com.br](https://www.srchz-technologies.com.br)** · SrChZ Technologies (CNPJ 68.371.698/0001-95)

**Navegar:** [websrchz.github.io/PROA](https://websrchz.github.io/PROA/) — landing com os 5 projetos e as 29 aulas.

## Conteúdo

| | |
|---|---|
| `index.html` | landing que indexa tudo |
| `Atividades/` | 5 projetos: Biografia Musical, Produto Conceito, Interfaces, MindFlow, PetShop |
| `Aulas/` | 29 páginas de anotação de aula (003 a 031) |

## Estado do código

São exercícios de quem estava aprendendo HTML em 2023, e ficam como estavam —
reescrevê-los apagaria justamente o que o repositório registra. Em termos
concretos: várias páginas têm markup malformado (tag não fechada, aninhamento
inválido). Os navegadores corrigem isso em silêncio e as páginas abrem, então
foi deixado como está.

O que **foi** corrigido, porque gerava erro visível para quem abre as páginas:

- `Biografia Musical.html` referenciava `INTJ_1.jfif` três vezes — arquivo que
  nunca existiu no repositório. Renderizava três ícones de imagem quebrada.
- `Aula 004.html` tinha um `<audio>` apontando para `INTJ song.mp3`, ausente do
  repositório: player quebrado. O texto que explica a tag ficou, agora com o
  exemplo como código.
- `Aula 005.html` carregava `main.css` e `main.js`, nunca criados: dois 404 em
  cada abertura.

Antes disso, um submódulo git quebrado (`Projeto-Biografia_Musical`) travava o
build do GitHub Pages desde 2023 — removido, e a landing passou a publicar.

`INTJ-TheArchitect.mp4` (12 MB) saiu em 2026: nenhuma página o usava. O vídeo
que a Biografia Musical mostra é o `INTJ.SUPREMACY.mp4`, que ficou.

## Autoria

Conteúdo de autoria de **Rafael Henrique Cordeiro Santos**. Não é Creative
Commons: o uso exige crédito e menção. Sinta-se livre para usar como base de
estudo.

Contato: **rafaelhenriquecsantosz@gmail.com**

---

<details>
<summary>English</summary>

**Archived repository.** Coursework from the PROA program (web development —
HTML, CSS, JavaScript), first semester of 2023. Kept as a historical record:
it is **not maintained and does not reflect current practice.** Current work:
[srchz-technologies.com.br](https://www.srchz-technologies.com.br).

Browse it at [websrchz.github.io/PROA](https://websrchz.github.io/PROA/) — 5
projects and 29 class pages.

The exercises are left as they were written; rewriting them would erase what
the repository records. Only references that produced visible errors were
fixed: three `<img>` tags pointing at a file that never existed, an `<audio>`
element with a missing source, and a stylesheet plus script that were never
created.

Content authored by **Rafael Henrique Cordeiro Santos**. Not Creative Commons:
use requires credit and attribution. Feel free to use it as a study base.

Contact: **rafaelhenriquecsantosz@gmail.com**
</details>

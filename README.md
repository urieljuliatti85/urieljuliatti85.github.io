# Portfólio — Uriel Juliatti

Site pessoal estático (HTML + CSS + JavaScript, sem build) hospedado no GitHub Pages.

## Estrutura

```
index.html          Página única com todas as seções
assets/css/style.css  Estilos e paleta
assets/js/main.js     Menu, scrollspy, filtros, reveal, formulário
.nojekyll             Impede o processamento pelo Jekyll
```

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

O repositório se chama `urieljuliatti85.github.io`, então o site é publicado
como **site de usuário**, na raiz do domínio:

    https://urieljuliatti85.github.io/

Para ativar: Settings → Pages → Source: `Deploy from a branch` → branch `main`
/ pasta `/ (root)`.

Se um dia o repositório for renomeado, o site passa a ser servido em
`https://urieljuliatti85.github.io/<nome-do-repo>/`; nesse caso atualize
também a tag `canonical` e a `og:image` no `index.html`.

## Playlist do Spotify

A seção `#playlist` embute o player oficial do Spotify via iframe, apontando
para a playlist pública "Scandinavian Rock & Roll". Não exige API key nem
login: quem não tem conta ouve prévias de 30s, quem está logado ouve completo.

Para trocar a playlist, substitua o ID em dois lugares no `index.html`
(o `src` do iframe e o link "Abrir no Spotify"). A playlist precisa ser
**pública**, caso contrário o player aparece vazio para os visitantes.

## O que ainda dá para personalizar

- **Formulário**: hoje abre o cliente de e-mail do visitante. Para receber as
  mensagens direto na caixa de entrada, aponte o `action` do form para um
  serviço como Formspree ou Getform.

## Foto de perfil

`assets/img/avatar.jpg` é um recorte quadrado (900x900) da foto original,
aberto o suficiente para mostrar a guitarra e mantendo o rosto nítido no
avatar circular do topo.

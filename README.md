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

Settings → Pages → Source: `Deploy from a branch` → branch `main` / pasta `/ (root)`.

Para o site ficar em `https://<usuario>.github.io/`, o repositório precisa se
chamar `<usuario>.github.io`. Em qualquer outro nome, o site é servido em
`https://<usuario>.github.io/<repositorio>/`.

## O que ainda dá para personalizar

- Seção **Experiência**: períodos, empresas e descrições (marcadas com `TODO` no HTML).
- URL do **LinkedIn** na seção de contato.
- **Formulário**: hoje abre o cliente de e-mail do visitante. Para receber as
  mensagens direto na caixa de entrada, aponte o `action` do form para um
  serviço como Formspree ou Getform.

## Foto de perfil

`assets/img/avatar.jpg` é um recorte quadrado (800x800) da foto original,
enquadrado no rosto para funcionar bem no avatar circular do topo.

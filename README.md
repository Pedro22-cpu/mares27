# Real Estate Landing Page – Template

## Como usar
1. Duplicar esta pasta com o nome do novo imóvel.
2. `pnpm install`
3. `pnpm dev`

## O que alterar
**Tudo está em `src/site.config.ts`**: textos, preços, morada, links, contactos, redes sociais, ordem das fotos, vídeo, localização, rodapé.

- Substituir as imagens/vídeo em `src/assets/` (mantendo os nomes de ficheiro, ou mudar os imports no topo do `site.config.ts`).
- Texto a negrito: `**assim**`.
- A tradução para inglês é automática (Google Translate).

Fora do config, só:
- `index.html` – título do separador e meta tags de partilha (og:*)
- `public/` – favicon e `cover.jpg` (imagem de partilha)

`src/app/App.tsx` só tem o layout; `src/locales/` e `src/i18n.ts` não são usados.

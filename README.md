# Loja Virtual Profissional — Operação administrativa

Demonstração de operação administrativa de e-commerce, com fila de pedidos, estoque e indicadores.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00D4FF?style=for-the-badge)](https://loja-virtual-profissional.vercel.app/)
[![Portfolio](https://img.shields.io/badge/Portfolio-LipDev.BR-BEF264?style=for-the-badge)](https://lipdev.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-LipDev--sudo-181717?style=for-the-badge&logo=github)](https://github.com/LipDev-sudo)

## Visao do projeto

O storefront contextualiza os dados, mas a competência principal está na rota `/admin`: triagem por status, avanço controlado da etapa dos pedidos e leitura de estoque em uma interface responsiva.

## Demo

- Aplicacao online: https://loja-virtual-profissional.vercel.app/
- Portfolio principal: https://lipdev.vercel.app/

## Destaques

- Painel administrativo separado do storefront
- Filtros funcionais da fila de pedidos
- Avanço demonstrativo de pendente para processamento e conclusão
- Indicadores e estoque apresentados como dados demonstrativos
- Tabela responsiva para operação em telas menores

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Como rodar localmente

```bash
npm ci
npm run typecheck
npm run lint
npm run dev
```

Para gerar uma build de producao:

```bash
npm run build
npm run preview
npm audit
```

## Limites da demonstração

- dados de pedidos, clientes, estoque e indicadores são fictícios e locais;
- alterações de status duram apenas durante a sessão;
- não há autenticação, autorização, API, banco de dados ou pagamento real;
- a aplicação não deve ser usada para operação de uma loja real.

## Autor

Desenvolvido por **Hamilton Felipe Soares da Silva** - LipDev.BR.

- Portfolio: https://lipdev.vercel.app/
- GitHub: https://github.com/LipDev-sudo
- LinkedIn: https://www.linkedin.com/in/hamilton-felipe-875054383/

## Licenca

Este projeto esta sob a licenca MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

# Farbe Films

Uma experiência interativa de e-commerce voltada para entusiastas de fotografia analógica, focada em performance, fidelidade visual e interações modernas no navegador.

Este projeto explora a interseção entre o desenvolvimento frontend tradicional e o *creative development*, utilizando renderização 3D em tempo real e animações complexas baseadas em scroll para criar uma jornada de usuário imersiva.

## Stack Tecnológica

O projeto foi construído com ferramentas de última geração para garantir escalabilidade, performance e uma experiência de desenvolvimento robusta.

*   **Nuxt 4 & Vue.js**: Utilizado como framework base pela sua excelente experiência de desenvolvimento (DX), renderização híbrida e sistema de módulos eficiente.
*   **TresJS**: Integração declarativa do Three.js com Vue. Permite gerenciar a cena 3D através de componentes, facilitando a reatividade entre a UI e o mundo 3D.
*   **Three.js**: O motor de renderização 3D por trás das cenas, responsável pelo processamento de geometrias, materiais PBR (Physically Based Rendering) e iluminação.
*   **GSAP (GreenSock Animation Platform)**: Responsável por todas as orquestrações de movimento, incluindo animações de entrada e o controle refinado das transformações 3D atreladas ao scroll.
*   **Prismic CMS**: Headless CMS utilizado para gestão de conteúdo dinâmico e fatias de design (*Slices*), permitindo flexibilidade editorial sem comprometer a estrutura do código.
*   **Tailwind CSS**: Framework utilitário para estilização rápida e consistente da interface 2D.
*   **Stripe SDK**: Integração de pagamentos para uma experiência de checkout segura e fluida.

## Engenharia e Performance

O desenvolvimento foi guiado por decisões técnicas que visam a fluidez da experiência, mesmo em cenas com alta densidade visual:

*   **Renderização 3D Interativa**: Modelos de produtos (canister e embalagem) são renderizados em tempo real, utilizando materiais com texturas de alta definição e sombras suaves (*Soft Shadows*) para realismo.
*   **Scroll-Driven Animations**: O GSAP ScrollTrigger é utilizado para sincronizar a posição e rotação dos elementos 3D com a navegação do usuário, criando uma narrativa visual contínua.
*   **Texturas Dinâmicas e Vídeo**: Uso de mapas de textura otimizados (color, metallic, roughness) e implementação de vídeo como textura em elementos específicos para adicionar dinamismo à cena.
*   **Gerenciamento de Estado**: Fluxo de carrinho e estado da cena gerenciados via composables reativos do Vue, garantindo sincronia perfeita entre as interações 3D e a interface de usuário.
*   **Otimização de Assets**: Uso de modelos GLTF com compressão Draco e texturas otimizadas para carregamento progressivo e baixo impacto de memória.

## Funcionalidades Chave

*   Visualização 3D de produtos em 360 graus.
*   Navegação fluida com transições de estado baseadas em scroll.
*   Sistema de carrinho de compras integrado com persistência local.
*   Design responsivo adaptando a escala e complexidade da cena 3D para dispositivos móveis.
*   Integração direta com CMS para atualização de metadados e produtos.

## Configuração e Instalação

Certifique-se de ter o Node.js (v18+) e o npm/pnpm instalados.

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/farbe-films.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

---

### Observações
Este é um projeto com foco em demonstração técnica de capacidades frontend e creative coding. Desenvolvido para ser visualmente limpo e tecnicamente denso.

| **Etapa** | **Descrição do que foi feito**                 | **Comando usado**                                                                           |
| --------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1         | Criamos o monorepo com PNPM + Turbo            | *(feito antes da tabela)*                                                                   |
| 2         | Validamos o package.json raiz                  | —                                                                                           |
| 3         | Validamos o pnpm-workspace.yaml                | —                                                                                           |
| 4         | Criamos o primeiro serviço (hub-core)          | `mkdir apps/hub-core`                                                                       |
| 5         | Criamos estrutura inicial (src, index.ts)      | —                                                                                           |
| 6         | Criamos Dockerfile inicial                     | —                                                                                           |
| 7         | Rodamos instalação geral do monorepo           | `pnpm install`                                                                              |
| 8         | Rodamos build geral                            | `pnpm build`                                                                                |
| 9         | Ajustamos problema de encoding no package.json | *(feito no VS Code)*                                                                        |
| 10        | Rodamos build do hub-core individual           | `pnpm --filter hub-core build`                                                              |
| 11        | Confirmamos sucesso e criamos o server inicial | —                                                                                           |
| 12        | Subimos localmente o hub-core                  | `pnpm --filter hub-core dev` *(ou `start`)*                                                 |
| 13        | Testamos endpoint `/health`                    | Abrir `http://localhost:3001/health`                                                        |
| 14        | Criamos o front em Next.js dentro do monorepo  | `pnpm create next-app@latest apps/front --ts --app --eslint --src-dir --import-alias "@/*"` |
| 15        | Instalamos dependências do front               | `pnpm install`                                                                              |
| 16        | Rodamos front isolado                          | `pnpm --filter front dev`                                                                   |
| 17        | Configuramos layout base (header/footer)       | —                                                                                           |
| 18        | Criamos botão “Testar Hub-core”                | —                                                                                           |
| 19        | Habilitamos CORS no hub-core                   | —                                                                                           |
| 20        | Criamos endpoint de health no Express          | —                                                                                           |
| 21        | Instalamos express e cors no hub-core          | `pnpm --filter hub-core add express cors`                                                   |
| 22        | Instalamos tipos do express                    | `pnpm --filter hub-core add -D @types/express @types/node`                                  |
| 23        | Instalamos tipos do cors                       | `pnpm --filter hub-core add -D @types/cors`                                                 |
| 24        | Compilamos novamente o hub-core                | `pnpm --filter hub-core build`                                                              |
| 25        | Subimos novamente o hub-core                   | `pnpm --filter hub-core start`                                                              |
| 26        | Testamos comunicação front → hub-core          | Clicar no botão                                                                             |
| 27        | Validamos funcionamento total                  | —                                                                                           |

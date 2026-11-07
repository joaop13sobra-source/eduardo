---
name: apresentacoes-edutran
description: Cria pautas, roteiros e apresentações HTML de aulas, módulos e cursos da Edutran a partir do acervo na pasta Eduardo, com identidade da marca, casos práticos, atividades e fontes. Usar para treinamentos de trânsito, formação de instrutores e temas existentes no acervo; NRs e máquinas pesadas apenas quando houver material correspondente. Não é uma skill de relatórios de marketing ou dashboards.
---

# Apresentações e aulas Edutran

## Composição e movimento — prioridade atual

Ler e aplicar [references/referencia-cda.md](references/referencia-cda.md), referência fornecida em 06/11/2026. Priorizar hierarquia editorial, encaixe dos títulos, imagens dominantes, layouts assimétricos, pausas de pergunta e transições com função didática. A marca continua Edutran; esta direção complementa o playbook e prevalece em composição/movimento. Slides internos em branco quente são permitidos para dar ritmo e clareza. Não copiar a identidade ou o conteúdo comercial da CDA.

O [template atualizado](assets/template-aula.html) demonstra nove slides com títulos revelados por palavras, entradas em sequência, cortinas, comparação clara e diálogo visual. Usar como base operacional, escolhendo layouts conforme o conteúdo. O acervo original e seus 24 assets estão arquivados apenas para estudo em `references/cda-original/`; não entram nas aulas entregues.

## Playbook de identidade aprovado

Ler e aplicar [o playbook visual aprovado](../../references/playbook-visual-aprovado.md): criativo de transporte escolar aprovado como referência principal; azul profundo em degradê, títulos brancos/amarelos, apoio claro e logo original sobre branco. Substitui direções visuais anteriores conflitantes; a capa horizontal mantém a disposição Aquatro.

## Premissa visual do usuário

Aplicar a [direção visual compartilhada](../../references/direcao-visual-edutran.md): pouco texto, imagem/ilustração/diagrama que explique, linguagem lúdica para público mais leigo e efeitos com função. Pesquisar imagens e referências na internet proativamente, conferir origem/licença e criar elementos próprios ou gerados conforme o tema. Logo e cartões de texto não substituem a explicação visual. Preservar fontes técnicas e a identidade Edutran.


Transformar o conteúdo do acervo em aprendizagem aplicável à rotina do profissional. Esta skill é própria da Edutran: reaproveita o cuidado visual dos decks aprovados, mas usa a marca, o público e a metodologia educacional deste projeto.

## Localização e fontes

A raiz do acervo é o diretório que contém `.agents/` desta skill (quatro níveis acima de `scripts/`). Não depender do caminho absoluto do computador. Os materiais ficam em `<curso>/<módulo>/`, com `Sobre o curso.md`, `*- Conteúdo.md`, `Documentos oficiais/Links.md` e PDFs/HTMLs oficiais.

1. Localizar o pedido com `python3 scripts/indexar_acervo.py --query "tema"` a partir desta skill. Ler [references/acervo.md](references/acervo.md) para resolver curso/módulo.
2. Ler `Sobre o curso.md`, o conteúdo integral do módulo escolhido e seu `Links.md`. Para recorte pontual, localizar o trecho e ler também as ressalvas e referências que se aplicam. Consultar o relatório e as notas de pesquisa quando o tema depender de atualização.
3. Usar os documentos oficiais para comprovar regras. As notas de pesquisa são pistas, não substituem a fonte. Repetição do mesmo conteúdo entre cursos não torna os exemplos intercambiáveis.
4. Não renomear ou mover as pastas originais. Salvar entregas em `apresentacoes/<curso>/<tema>/`, com nomes de arquivo legíveis e sem sobrescrever versões existentes sem necessidade.

## Decidir o que entregar

- Pedido de **pauta/roteiro**: criar `pauta.md` com público, objetivos observáveis, sequência, tempo estimado, estratégia visual, dinâmica, perguntas e fontes por bloco. Não criar deck quando só foi pedida pauta.
- Pedido de **apresentação/aula**: criar pauta de apoio + `index.html` navegável, `notas-do-instrutor.md` e `fontes.md`. Usar o template e ajustar o tamanho ao tempo e à profundidade pedidos.
- Pedido de **curso completo**: planejar por módulos, sem comprimir todo o curso em um deck superficial. Separar duração pedagógica estimada e carga horária normativa, que exige verificação.
- Se curso e tema estiverem claros, avançar. Se o mesmo tema existir em vários cursos e o contexto não resolver, perguntar apenas qual curso/público. Duração ausente pode ser estimada e declarada, sem transformá-la em carga oficial. Não exigir aprovação de cada escolha rotineira.

## Perfil, marca e método

**Referência visual prioritária:** ler [references/identidade-drive.md](references/identidade-drive.md) e examinar os criativos fornecidos em `assets/referencias-drive/`. Fotografia dominante, degradê azul profundo, títulos brancos com palavras amarelas e logo em base branca orientam a identidade; manter IBM Plex Sans e didática com pouco texto. A identidade agora é consolidada pelo playbook aprovado compartilhado com a skill de criativos.

Ler [references/perfil-e-identidade.md](references/perfil-e-identidade.md) para identidade visual e limites do que foi observado no perfil público. Ler [references/metodo-didatico.md](references/metodo-didatico.md) para a construção de aula e escolha de elementos visuais.

A audiência pode ser condutor profissional, condutor em reciclagem ou instrutor — não presumir que todo aluno é instrutor de autoescola. O facilitador usa exemplos da ocupação; não tratar alunos como leads ou fazer pitch de vendas no meio da aula.

- Priorizar uma ideia central por slide: situação → leitura do risco/problema → conduta/decisão → aplicação.
- Usar cenas de trânsito, diagramas de via, veículos, fluxos, sequências, comparativos e casos; tabelas só quando a comparação pedir. Evitar decks que só repetem cartões com texto.
- Inserir atividades e perguntas com feedback comentado; não apresentar questão criada para a aula como questão oficial do DETRAN.
- Não afirmar que mais slides ou uma apresentação, por si, habilitam, certificam ou credenciam alguém.

## Normas, saúde e fidelidade

As fontes locais foram organizadas com referências temporais de novembro de 2026 e contêm ressalvas. Não carimbar todo o acervo como validado ou vigente.

- Ao gerar uma aula com exigências legais, penalidades, categorias de habilitação, cargas horárias, validade, sinalização oficial ou protocolos de primeiros socorros, verificar a fonte primária atual e a jurisdição aplicável. Registrar órgão, norma/artigo, URL e data da consulta em `fontes.md`, com fonte curta no slide relevante.
- Se houver documento histórico, revogado, divergência ou marcação “conferir na fonte oficial”, resolver antes de ensinar como regra. Se não for possível, sinalizar a pendência no material do instrutor e deixar a afirmação fora da versão para alunos, ou identificá-la como contexto histórico quando isso for o objetivo.
- Não copiar números de seguidores, estatísticas, requisitos ou preços sem data e pertinência. Não transportar conteúdos regulatórios de um curso para outro só pelo título do módulo.
- Sinalização, rótulos de risco e códigos oficiais precisam vir de assets oficiais ou reprodução fiel verificada. Imagens geradas não servem como prova de norma ou técnica. Em primeiros socorros/incêndio/produtos perigosos, não improvisar procedimentos e respeitar o nível de atuação do aluno.

## Produção HTML

Base: [assets/template-aula.html](assets/template-aula.html); tokens: [assets/design-tokens.json](assets/design-tokens.json). O template é uma demonstração de componentes, não uma aula validada pronta para ministrar.

- Usar a identidade dos criativos de referência do Drive (azul profundo, branco e amarelo) e tipografia IBM Plex Sans, aplicando a composição editorial e o movimento da referência CDA e a disposição da capa Aquatro; nunca importar logo, vermelho, assinatura, textos ou conteúdo de cliente V4. Manter logo original, sem redesenhar; a versão de perfil é pequena e serve a uso discreto, não ampliação de palco.
- Layout nativo do viewport (`position:fixed; inset:0`), fontes e espaçamentos fluidos; sem canvas fixo escalado. Incluir setas, contador, acesso ao índice (I/G), tela cheia (F) e botão de efeitos. Usar `assets/editorial-cda.css` e `assets/apresentacao-motion.js`, já embutidos no template, como recursos reutilizáveis. Touch e impressão precisam de saída funcional. Preservar foco, teclado e contraste.
- Fotos/ilustrações devem explicar o tema e corresponder ao veículo e ao risco. Preferir assets próprios autorizados ou com licença e fonte; criar SVG/CSS para esquemas simples. Quando imagem gerada agregar valor, seguir a ferramenta de imagem disponível, sem inventar logotipo ou sinal oficial. Não extrair pessoas de posts para ilustrar alunos sem contexto.
- Quiz e checklists são apoio pedagógico; se tiverem estado local, não sugerir que sincronizam ou avaliam certificação. No HTML incluir feedback, sem avançar slide ao usar input, botão, link ou controles de atividade.
- Arquivos de apoio devem funcionar com links relativos; preferir HTML com logo embutida e SVGs inline para abrir offline. Não depender de rede para o conteúdo essencial.

## Verificação e entrega

1. Conferir cobertura do tema, público e limites; confrontar conceitos relevantes com as fontes.
2. Abrir a apresentação e revisar visualmente todos os slides em 16:9 e 16:10, sem corte ou conteúdo sobre rodapé. Conferir navegação, índice, tela cheia, impressão, atividades, troca rápida de slide durante a cortina e modo sem efeitos. Inspecionar também tela estreita e `prefers-reduced-motion`.
3. Entregar links para arquivos locais, número de slides, duração estimada e eventuais pendências. Não declarar validação normativa completa quando só foi feita leitura do acervo.
4. Publicar apenas quando solicitado; um pedido anterior de publicar outro cliente não autoriza publicar materiais Edutran. Não acionar Vercel, Drive, mensagens ou e-mail como parte automática desta skill.

Exemplos de pedidos: “Monte uma aula de direção defensiva para transporte escolar”; “Crie a pauta de uma aula sobre classes de risco do MOPP”; “Faça uma apresentação sobre comunicação com passageiros do transporte coletivo”.

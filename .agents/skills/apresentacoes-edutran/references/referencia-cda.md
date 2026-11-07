# Referência editorial e de movimento — CDA

Referência fornecida pelo usuário em 06/11/2026: https://cda-proposta-faixa-preta.vercel.app/#1. Pedido: priorizar elementos visuais, transições, efeitos e encaixe dos textos ao aprimorar esta skill. Análise do HTML/CSS/JS dos 32 slides e inspeção visual de 12 slides representativos. Não transportar o pitch comercial para aulas.

## Prioridade e adaptação

Esta referência orienta **composição, hierarquia, ritmo e movimento nas apresentações**. A marca continua Edutran: IBM Plex Sans, azul profundo #06283A, azul #005E91, amarelo #FFC51B e logo original sobre branco. A capa mantém título à esquerda e logo à direita. Não aplicar esta atualização à skill de criativos sem solicitação.

O azul com profundidade é o fio condutor. Permitir slides internos inteiros em branco quente #F5F4EF para comparações, esquemas ou leitura de diálogo; alternar com aberturas e sínteses azuis, quando isso melhorar o ritmo. Esta permissão específica substitui a preferência anterior por todos os fundos azuis. Não copiar vermelho/vinho/verde/lima, logotipos, pessoas, preços ou promessas da CDA.

## O que foi observado e o que reaproveitar

| Na referência | Decisão para a aula Edutran |
|---|---|
| Capa e fechamento com headline enorme, símbolo gigante discreto e poucos elementos | Uma frase dominante, destaque amarelo seletivo, fundo com profundidade; elemento conceitual discreto em vez do símbolo CDA |
| Slide 2: trilho horizontal e números 01/02/03 muito maiores que as descrições | Caminho da aula em etapas abertas, alinhadas; números estruturam o percurso sem virar cartões |
| Slides 3–4: fotos recortadas em painéis, labels e conclusão separada na base | Cena/veículo correspondente ao curso, anotação curta junto ao detalhe relevante e conclusão visível |
| Slides 8 e 10: pausa de pergunta, contraste de fundo e poucas palavras | Pergunta à turma em escala grande, espaço para resposta; sem números decorativos ou pergunta de venda |
| Slide 13: linha temporal, marcador e resultado visual | Mostrar sequência, risco e decisão; distâncias/tempos oficiais somente com fonte |
| Slide 16: blocos com hierarquia de número, símbolo e frase | Usar apenas quando existirem partes reais a comparar; não transformar toda aula em quatro cartões |
| Slide 19: conversa simulada com mensagens em sequência e síntese lateral | Diálogo fictício de atendimento, orientação ou comunicação operacional, seguido da leitura do que mudou |
| Slide 20: título em coluna estreita e demonstração visual ampla | Esquema grande à direita, texto breve à esquerda; conteúdo técnico detalhado fica nas notas |
| Slide 24: equação e resultado em escala monumental | Relação visual entre causas e consequências; dados reais com fonte, exemplos marcados como ilustrativos |
| Slide 32: fechamento com frase dominante e símbolo de fundo | Síntese acionável da aprendizagem, sem CTA comercial |

## Encaixe e ritmo dos textos

- Compor a frase para a mancha disponível. Headline idealmente com 6–12 palavras em 1–3 linhas, ajustável ao conceito; destacar apenas o trecho que muda a leitura. Quebrar por unidades de sentido, sem separar substantivo e qualificador desnecessariamente.
- Título em IBM Plex Sans 700, entrelinha próxima de 1.04 e tracking próximo de -.045em. Corpo confortável, entrelinha 1.25–1.4; labels curtos com tracking positivo. Valores são ponto de partida, não motivo para cortar palavras ou reduzir legibilidade.
- Usar grid assimétrico (por exemplo 40/60), alinhamentos comuns, espaço vazio e um elemento visual dominante. Aproximar cada legenda de seu objeto. Reservar área segura para navegação e fonte curta.
- Se houver duas explicações independentes, separar os slides. Detalhes, ressalvas extensas e fala do instrutor vão para as notas; não eliminar condições necessárias à compreensão correta.
- Alternar a representação conforme o conteúdo: cena anotada → comparação → pergunta → fluxo → diálogo → prática. Escolher pelo objetivo; não impor essa sequência ou um número fixo de slides.

## Movimento observado e versão operacional

O original usa revelação de palavras, rise/left/right/scale/pop, desenho de linhas, barras que crescem, contadores, zoom lento em fotos e cortinas com oito faixas. Os easings observados são `cubic-bezier(.16,1,.3,1)` e `cubic-bezier(.7,0,.3,1)`. No original: palavras escalonadas em 55 ms, entradas de cerca de 900 ms e cortinas de 380/520 ms com atraso de 34 ms por faixa.

O modelo Edutran adapta o ritmo: entradas 700 ms, palavras 45 ms, cortina 280/360 ms e atraso 24 ms. Usar a cortina para mudança de slide; entradas revelam o título e depois o visual/argumento. A frase deve continuar inteligível durante a entrada. Não animar letra por letra nem deixar o aluno esperando para ler uma regra.

Recursos prontos:

- [editorial-cda.css](../assets/editorial-cda.css): escala tipográfica, composições, superfícies, palavras, cortina e impressão.
- [apresentacao-motion.js](../assets/apresentacao-motion.js): navegação, cortinas com fila, preparação das palavras, índice, hash, toque, quiz e botão de efeitos.
- [template-aula.html](../assets/template-aula.html): modelo autônomo de nove slides, com CSS/JS/fontes/logo embutidos. Não requer rede.

O template traz CSS/JS embutidos para abrir offline. Ao alterar os arquivos reutilizáveis, atualizar também os blocos correspondentes no template. Evitar acumular overrides conflitantes em novas aulas: usar os tokens e substituir apenas a composição necessária.

Efeitos adicionais do original (contadores, zoom de foto, draw em SVG) são repertório opcional; não estão todos implementados no modelo. Se usados, limitar ao slide ativo, manter o valor final legível e cancelar timers/animações ao navegar. Não adicionar pulsação contínua, flashes ou movimento decorativo sobre instruções.

Respeitar `prefers-reduced-motion`, oferecer botão de efeitos e imprimir o estado final sem animação. Conteúdo permanece visível quando os efeitos estão desligados. Inputs, links, seleção de texto e controles de atividade não podem disparar avanço de slide. Cortina não captura clique. Preservar foco, índice modal e estado inerte dos slides ocultos.

## Arquivo de origem e assets

Em [cda-original/manifesto.json](cda-original/manifesto.json): 24 assets com URL original, tamanho e SHA-256. A pasta contém HTML original, CSS e JS extraídos, fotos WebP, logos e imagens de interface. Em [cda-original/contato-visual.jpg](cda-original/contato-visual.jpg), visão de 12 slides; demais slides podem ser consultados no HTML e no link.

Uso deste acervo: inspeção local de composição e mecânica. Não há licença de redistribuição informada; não incluir a pasta `cda-original` nas entregas de aulas, nem tratar pessoas/marcas da referência como Edutran. Os arquivos originais podem depender de Google Fonts para reproduzir exatamente a tipografia. Recriar esquemas próprios e usar imagens adequadas ao curso, com origem registrada.

[Prévia do template atualizado](previa-template.jpg) — visão dos nove layouts.

## Revisão visual

Inspecionar todos os slides em 16:9 e 16:10, a primeira abertura e a sequência animada. Conferir que as quebras são intencionais, texto não invade a imagem, não há cortes ou sobreposição com rodapé e fontes pequenas continuam legíveis. Testar troca rápida durante a cortina, hash, índice, atalhos, swipe horizontal sem interferir com scroll vertical, quiz, efeitos desligados, preferência do sistema e impressão. Inspecionar também uma tela estreita; o layout pode rolar para preservar legibilidade.

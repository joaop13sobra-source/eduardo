---
name: copy-edutran
description: Escreve e revisa copy dos cursos e treinamentos Edutran para criativos estáticos, stories, carrosséis, anúncios e roteiros de vídeo. Usa biblioteca local de 78 ângulos, contexto do acervo, uma ideia por peça e CTA coerente. É apoio de texto à skill criativos-edutran; não substitui produção visual, não inventa condições e não publica materiais.
---

# Copy Edutran — apoio à construção do criativo

Adaptada da skill local `criar-copy-criativos`, com biblioteca de ângulos e copy enxuta. Atuar como camada de estratégia e texto antes da composição visual. Não é uma solicitação de criar subagentes: a skill de criativos lê e aplica este procedimento na própria execução.

## Contexto antes de escrever

- Projeto conhecido: Edutran, pasta Eduardo. Não perguntar novamente qual cliente. Identificar curso, público, peça e ação no pedido/briefing. Feed/story/carrossel já definem a vertente; perguntar só se faltar informação decisiva.
- Ler o contexto comercial da [skill de criativos](../criativos-edutran/references/marca-e-negocio.md), o briefing fornecido e a pauta do curso no acervo. Para localizar: `../apresentacoes-edutran/scripts/indexar_acervo.py`, quando disponível; alternativa é procurar nas seis pastas numeradas.
- Separar o que é confirmado, hipótese de mensagem e informação ausente. Curso no acervo não comprova turma aberta, preço, modalidade comercial ou credenciamento.
- Não usar a biblioteca como fonte de fatos: exemplos de médicos, produtos e outras empresas servem para entender o ângulo, nunca para preencher uma oferta Edutran.

## Fluxo de copy

1. Definir formato, público e objetivo. Se for vídeo, usar gancho/corpo/CTA e texto em tela; se for estático, headline/apoio/CTA; carrossel tem copy por página e legenda de apoio quando pedida.
2. Identificar o argumento principal e o nível de consciência pelo contexto. Se já houver copy aprovada ou ângulo escolhido, respeitar. Se o usuário pedir opções, sugerir 3–4 ângulos específicos com motivo. Em pedido direto de produção, pode escolher um ângulo adequado, declarar a escolha e executar — não exigir rodadas de confirmação quando a direção já estiver clara.
3. Consultar as categorias pertinentes da biblioteca. Usar `python3 scripts/consultar_angulos.py --categoria problema --limit 5` ou ler o CSV. [references/angulos-e-persuasao.md](references/angulos-e-persuasao.md) explica quando consultar cada categoria.
4. Construir a peça com um único eixo. Considerar benefício, objeção relevante e credibilidade quando sustentados. Nem todos precisam caber na imagem: distribuir entre texto, cena, legenda e roteiro. Se faltar prova, não inventar número ou selo; ajustar a promessa e explicar a pendência fora da arte.
5. Revisar clareza, fidelidade ao briefing, vocabulário do público, condições e extensão. Entregar a copy pronta para a direção de arte, sem transformar o anúncio em texto de aula.

## Copy curta para público mais leigo

- Headline/gancho com **uma ideia**. Preferir curso, situação ou benefício concreto ao jargão interno, abstrato ou alarmista.
- Apoio estático: uma ou duas frases curtas, com função distinta da headline. Detalhes ficam na legenda, se isso não esconder uma condição indispensável.
- CTA com ação e destino reais: “Veja os conteúdos do curso no perfil”, “Consulte as informações da turma pelo contato informado”, ou a ação confirmada no briefing. Não inventar WhatsApp, link ou “inscreva-se” sem inscrição disponível.
- Uma imagem deve carregar parte da explicação. Indicar o que ela comunica para não repetir tudo em texto; seguir a [direção visual compartilhada](../../references/direcao-visual-edutran.md).
- Mecanismo é o porquê real do problema/solução, não um nome inventado de método. Só desenvolver mecanismo proprietário quando o usuário pedir e houver base para isso.
- Urgência, vagas limitadas, autoridade, depoimentos e garantias só quando comprovados. Não usar medo de multa, perda de emprego ou perda da CNH como pressão sem pertinência e base.

## Regras Edutran

Não afirmar “autorizado pelo DETRAN”, “certificado reconhecido”, “habilitação garantida”, “regularize sua CNH”, duração normativa, modalidade permitida ou requisito legal sem verificar a oferta e a fonte oficial aplicável. Diferenciar participar de treinamento, concluir um curso, fazer exame e estar habilitado para a atividade. Promessas do criativo de referência não viram fatos por estarem desenhadas.

A base de conteúdo inclui cursos de condutores de escolar, coletivo, emergência, indivisíveis, produtos perigosos e reciclagem. NRs, máquinas pesadas e formação completa de instrutores dependem de materiais específicos do briefing. Não presumir que todo público é motorista iniciante ou instrutor de autoescola.

Identidade visual é responsabilidade da skill de criativos; copy mantém a marca Edutran sem transportar tom/assinatura Colli&Co, ofertas de outros clientes ou estrutura obrigatória de relatório.

## Contrato de entrega à skill de criativos

Entregar, por peça:

- **Formato / público / objetivo.**
- **Ângulo / categoria / nível de consciência**, como decisão de execução, sem exibir esses rótulos na arte.
- **Texto final:** headline + apoio + CTA, ou gancho + corpo + CTA + texto em tela; no carrossel, página por página.
- **Legenda**, se pedida ou parte do conjunto solicitado.
- **Direção visual curta:** o que a imagem explica e o que o texto não precisa repetir.
- **Condições e evidências:** fatos utilizados, fontes e pendências, fora do texto público.

Na produção visual, usar os textos finais exatos e não adicionar promessas para preencher espaço. Se a composição pedir corte, revisar a copy preservando as condições; não eliminar uma restrição comercial para caber na arte.

## Revisões

Se o usuário pedir ajuste em headline, apoio ou CTA, alterar o campo solicitado, oferecer poucas opções quando útil e preservar partes aprovadas. Ajuste global vale para todas as peças. Consolidar o texto atualizado e repassar à direção de arte. Não reescrever toda a campanha sem motivo.

Salvar como `Eduardo/criativos/<campanha>/copy.md` junto dos materiais; se for só pedido de texto, o arquivo basta quando apropriado. Publicação/envio a terceiros continua separado do trabalho de copy.

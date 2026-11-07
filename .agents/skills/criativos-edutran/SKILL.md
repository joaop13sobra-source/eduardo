---
name: criativos-edutran
description: Planeja e produz materiais de divulgação dos cursos e treinamentos da Edutran, com racional criativo, copy, identidade visual e logo. Usar para posts de feed, stories, carrosséis, anúncios, capas, banners e roteiros de vídeos/reels no formato pedido. Aulas e apresentações didáticas pertencem à skill apresentacoes-edutran; esta skill não publica nem contrata mídia automaticamente.
---

# Criativos e divulgação Edutran

## Apoio de copy integrado

Antes de compor a arte, aplicar [../copy-edutran/SKILL.md](../copy-edutran/SKILL.md). Essa skill local auxilia a escolher o ângulo, escrever headline/apoio/CTA ou roteiro e revisar promessas e condições. Receber dela a copy final e a função da imagem; usar os textos exatos na composição. Se já houver copy aprovada, utilizá-la e fazer apenas a revisão de coerência necessária. A consulta não requer criar subagente nem bloquear a produção para confirmar o que o pedido já definiu.

## Playbook de identidade aprovado

Ler e aplicar [o playbook visual aprovado](../../references/playbook-visual-aprovado.md): criativo de transporte escolar aprovado como referência principal; azul profundo em degradê, títulos brancos/amarelos, apoio claro e logo original sobre branco. Substitui direções visuais anteriores conflitantes; a capa horizontal mantém a disposição Aquatro.

## Premissa visual do usuário

Aplicar a [direção visual compartilhada](../../references/direcao-visual-edutran.md): pouco texto, imagem/ilustração/diagrama que explique, linguagem lúdica para público mais leigo e efeitos com função. Pesquisar imagens e referências na internet proativamente, conferir origem/licença e criar elementos próprios ou gerados conforme o tema. Logo e cartões de texto não substituem a explicação visual. Preservar fontes técnicas e a identidade Edutran.


Criar materiais que conectem **mensagem, público, curso/serviço, contexto e hierarquia visual**, conforme o modelo de racional criativo fornecido pelo usuário. Aplicar a marca da Edutran e as condições reais de cada oferta, sem reproduzir o caso ACMAX do documento original.

## Contexto e fontes

Esta skill está em `Eduardo/.agents/skills/criativos-edutran/`. A raiz Eduardo contém seis cursos e materiais de referência. Consultar [references/marca-e-negocio.md](references/marca-e-negocio.md) e [references/racional-e-producao.md](references/racional-e-producao.md).

- Para localizar conteúdo: usar `../apresentacoes-edutran/scripts/indexar_acervo.py --query "tema" --course "curso"`, se disponível; alternativamente procurar nas seis pastas numeradas da raiz. Ler `Sobre o curso.md` e o módulo relevante antes de extrair conteúdo técnico.
- A bio de @edutran_cursos divulga especialização em trânsito, NRs e máquinas pesadas; o acervo encontrado cobre seis cursos de trânsito. Divulgação de NR/máquinas e formação de instrutores exige o briefing e as evidências do serviço específico, sem inventar uma matriz curricular que não está na pasta.
- Documentos antigos, normas, registros e resumos são base de pesquisa, não prova automática de credenciamento, validade do curso ou disponibilidade de turma. Conferir fonte oficial atual quando o anúncio fizer afirmação regulatória.
- Para cada campanha, separar **confirmado**, **a validar** e **ausente**. Conteúdo comercial novo precisa ter origem. Ausência de preço ou data não impede um post institucional que não dependa deles.

## Interpretar e executar o pedido

1. Identificar objetivo (conhecimento, interesse, matrícula, abertura de turma, conteúdo educativo), público, curso, região quando relevante, formato e quantidade. Usar contexto existente e perguntar só o que impede a entrega correta. Não transformar todo pedido simples num interrogatório.
2. Extrair copy aprovada, oferta, data/local/modalidade, CTA e contatos. Não inventar preço, turma aberta, urgência, vagas limitadas, endereço, WhatsApp, desconto, certificação, habilitação, empregabilidade ou aprovação. Não puxar contatos de outras marcas Edutran. O perfil informado pelo usuário é `@edutran_cursos`.
3. Se for pedido de **ideias/racional/copy**, entregar esse material. Se for pedido de **criar arte/post/material**, produzir a peça com ferramenta disponível; não encerrar só com prompts quando houver capacidade de execução. Se não houver ferramenta adequada, dizer o limite e entregar layout editável + especificação, sem chamar prompt de imagem pronta.
4. Definir um argumento principal por peça. Variações de campanha devem variar argumento e composição quando fizer sentido; não gerar quatro obrigatoriamente se foi pedida uma. Usar [assets/briefing-campanha.md](assets/briefing-campanha.md) e [references/formatos-e-copys.md](references/formatos-e-copys.md).
5. Definir cenário e evidência compatíveis: aula, veículo ou atividade correspondente ao curso. Foto real de turma só com material autorizado e contexto correto. Cena gerada é ilustrativa; não é depoimento, registro de turma ou prova de credenciamento.
6. Projetar leitura no celular: headline → evidência visual → informação de curso/turma → CTA. Não levar para o post o excesso de texto de uma apostila ou o rodapé de navegação de um slide.
7. Executar uma peça por arquivo. Recompor layout para cada proporção, sem apenas cortar/esticar uma arte. Para carrosséis, criar páginas independentes e coerentes; para vídeo, roteiro/cenas e capa, e renderizar vídeo apenas se a capacidade estiver disponível e o pedido exigir.
8. Revisar logo, copy, condições, resolução real, área de interface e arquivos finais. Seguir [references/racional-e-producao.md](references/racional-e-producao.md) para checagem de conteúdo e identidade.

## Identidade e ferramentas

- Padrão atual do usuário: **IBM Plex Sans**, títulos fortes, composição clara no estilo aprovado da Aquatro, porém **azul/ciano/grafite da Edutran**. Cores e fonte em `assets/design-tokens.json`; fonte embutida em `assets/fontes.css`. Sem vermelho V4 ou logo Colli. Amarelo entra nos destaques conforme o playbook aprovado.
- Logo original em `assets/edutran-logo-perfil.jpg`, 150×150. Usar com respiro e tamanho discreto. Se a peça exigir logo grande/nítida para impressão, buscar o arquivo oficial ou pedir versão adequada; não gerar/reinventar logo com IA nem prometer vetor a partir da miniatura.
- Para fotos, ilustrações e ambientes gerados, usar a ferramenta/skill de imagem disponível no ambiente e fornecer referências com suas funções. Logo, textos e condições devem preferencialmente ser compostos como elementos editáveis determinísticos, sobre a imagem gerada. Diagramas simples, composição e tipografia podem ser feitos em SVG/HTML/CSS.
- Quando gerar o anúncio inteiro com IA, conferir texto e marca; se houver erro, corrigir com edição adequada. Não criar erro ortográfico ou benefício adicional para completar o layout.
- Evitar sinalização oficial, EPI, técnica de resgate ou manobra de risco imprecisos. Se houver pictogramas oficiais necessários, usar referência fiel. Não usar foto de pessoa como “instrutor/aluno Edutran” sem confirmação.

## Entrega

Salvar em `Eduardo/criativos/<campanha>/<formato>/`, mantendo os cursos originais intactos. Entregar:

- Arquivos finais separados em PNG/JPG ou no formato pedido, com dimensões reais conferidas e nomes claros. Arquivo editável quando solicitado ou quando a composição permitir.
- Copy por peça e legenda/CTA se fizer parte do pedido. Não chamar um botão desenhado em imagem de link clicável; orientar ação coerente com o canal.
- Racional curto: público, argumento, imagem/evidência e decisão de composição; fontes e pendências comerciais em `campanha.md`, sem encher a própria arte de notas internas.

Informações indispensáveis não confirmadas ficam como pendência fora da arte pública. Em layout explicitamente pedido para preenchimento futuro, campos devem ser claramente identificados como rascunho. Não inventar “inscrições abertas” como CTA padrão.

Criação não autoriza publicação, envio a pessoas, upload para conta externa ou contratação de anúncio. Publicar/exportar para um serviço só quando solicitado. Reutilizar correções de marca do usuário nas próximas peças sem alterar o material fonte de cursos.

Exemplos: “Crie um story de divulgação do curso de transporte escolar”; “Faça três criativos para o MOPP com a copy anexada”; “Monte um carrossel educativo sobre comunicação no transporte coletivo”; “Crie a capa e o roteiro de um reel sobre o treinamento informado”.

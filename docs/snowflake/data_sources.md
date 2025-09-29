# Fontes de Dados

Estão documentadas aqui as principais fontes de dados que foram introduzidas e populadas dentro do snowflake. Cada fonte é separada por um esquema único, sendo cada tabela uma tabela externa ou um ou mais endpoints de uma API utilizada. Separamos abaixo as fontes de dados, a sua forma de extração e se ela ainda é utilizada ou não.

Caso não esteja ativa, o _Schema_ referente a base inativa serve como histórico de dados para conferência, não sendo mais atualizado de nenhuma forma.

<br>

## MegaXT

- **Extração via Apache NiFi** - Carga Incremental Diária
- **Tamanho da Fonte:** Extensa
- **Status:** Ativa

O Mega é o sistema com o maior volume de dados dentro da companhia. Sendo um sistema de gestão empresarial. temos informações do fluxo de caixa, contas a pagar e receber, estoque e mais. Você pode encontrar mais informações sobre o sistema [bem aqui.](https://lp.mega.com.br/sistema-erp-gestao-empresarial/)

<br>

## Plannix

- **Extração via Apache NiFi** - Carga Incremental Diária
- **Tamanho da Fonte:** Média
- **Status:** Ativa

Sendo o ERP que monitoramos as etapas do sistema produtivo das fábricas, o Plannix contém os registros das peças projetadas pela engenharia, sua programação no cronograma para produção, sua produção de fato e, por fim, a marcação oficial de quando esta peça (com seu trasnporte responsável) são despachados das fábricas.

<br>

## Diário de Obras (DDO)

- **Extração via API** - Carga Total/Substitutiva Diária.
- **Tamanho da Fonte:** Micro
- **Status:** Ativa

O Diário de Obras é pensado para documentar o dia-a-dia das obras globais em andamento. Ele possui um banco de dados bem enxuto, com informações dos relatórios, o cadastro de obras e seus visualizadores, além de listar todos os usuários responsáveis pelas obras.

<br>

## Pipedrive

- **Extração via API** - Carga Total/Substitutiva Diária.
- **Tamanho da Fonte:** Pequena
- **Status:** Ativa

Sendo o ERP que monitoramos as etapas do sistema produtivo das fábricas, o Plannix contém os registros das peças projetadas pela engenharia, sua programação no cronograma para produção, sua produção de fato e, por fim, a marcação oficial de quando esta peça (com seu trasnporte responsável) são despachados das fábricas.

<br>

## ClickUp

- **Extração via API** - Carga Total/Substitutiva Diária.
- **Tamanho da Fonte:** Pequena
- **Status:** Ativa

Referente aos pedidos de Venda Mercantil de pré-fabricado, uma automação do Zapier extrai os dados dos pedidos direto do Pipedrive quando a **implantação de pedido** é requisitada; e então os dados são inseridos em um _Card_ no ClickUp, onde simula-se uma esteira de processos deste pedido. Este fluxo de tarefas é utilizado pelos setores Financeiro, Comercial, Engenharia, PCP e Expedição.

<br>

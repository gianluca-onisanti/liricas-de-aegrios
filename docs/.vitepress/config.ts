import { defineConfig } from "vitepress";

const translations = {
  button: {
    buttonAriaLabel: "Pesquisar Item",
    buttonText: "Pesquisar",
  },
  modal: {
    displayDetails: "Mostrar lista detalhada",
    resetButtonTitle: "Apagar busca",
    backButtonTitle: "Voltar",
    noResultsText: "Nenhum resultado encontrado.",
    footer: {
      navigateText: "para navegar",
      navigateUpKeyAriaLabel: "Subir",
      navigateDownKeyAriaLabel: "Descer",
      selectText: "para selecionar",
      selectKeyAriaLabel: "Enter",
      closeText: "para fechar",
      closeKeyAriaLabel: "Esc",
    },
  },
};

const sidebar = [
  {
    text: "Introdução",
    collapsed: true,
    items: [
      { text: "Início", link: "/" },
      { text: "Visão Geral", link: "/overview" },
      { text: "Perguntas Frequentes (FAQ)", link: "/faq" },
    ],
  },
  {
    text: "Datasol: o App Cassol",
    collapsed: true,
    items: [
      { text: "Introdução", link: "/datasol/" },
      { text: "Funcionalidades", link: "/datasol/functionalities" },
    ],
  },
  {
    text: "Snowflake",
    collapsed: true,
    items: [
      { text: "Introdução", link: "/snowflake/" },
      { text: "Fontes de Dados", link: "/snowflake/data_sources" },
    ],
  },
];

const nav = [
  { text: "Início", link: "/" },
  { text: "Visão Geral", link: "/overview" },
  { text: "Datasol", link: "/datasol/" },
  { text: "Snowflake", link: "/snowflake/" },
];

export default defineConfig({
  lang: "pt-BR",
  title: "Datasol Docs",
  description: "A Documentação Oficial do Datasol.",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "175x175" }],
    ["link", { rel: "stylesheet", href: "/styles.css" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    outlineTitle: "Nesta Seção:",
    nav,
    outline: "deep",
    sidebar,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/datasol-devteam",
        ariaLabel: "Github do Time Datasol",
      },
    ],
    footer: {
      message: "Lançado sob a Licença MIT.",
      copyright: "Copyright © 2024-presente Cassol Pré-Fabricados LTDA.",
    },
    search: {
      provider: "local",
      options: {
        translations,
      },
    },
    docFooter: {
      prev: "Página Anterior",
      next: "Próxima Página",
    },
    notFound: {
      title: "Página não Encontrada",
      quote: "Ops! Não conseguimos encontrar esta página.",
      linkLabel: "Voltar ao início",
      linkText: "Leve-me para o Início",
    },
    darkModeSwitchTitle: "Trocar para modo escuro",
    lightModeSwitchTitle: "Trocar para modo claro",
    darkModeSwitchLabel: "Interruptor de Temas",
  },
});

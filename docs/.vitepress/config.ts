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
      { text: "Hall dos Heróis", link: "/faq" },
    ],
  },
  {
    text: "Histórias e Rapsódias",
    collapsed: true,
    items: [
      {
        text: "Países",
        collapsed: false,
        items: [
          {
            text: "Calavera",
            link: "/histories_rhapsodies/countries/calavera",
          },
          { text: "Trivora", link: "/histories_rhapsodies/countries/trivora" },
          {
            text: "República Museana",
            link: "/histories_rhapsodies/countries/rep_musa",
          },
        ],
      },
      {
        text: "Figuras Históricas",
        collapsed: false,
        items: [
          {
            text: "O Apocalipse de Thánavros",
            link: "/histories_rhapsodies/historical_figures/",
          },
          {
            text: "A Dinastia Fordragon",
            link: "/histories_rhapsodies/historical_figures/fordragon_dinasty",
          },
        ],
      },
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
  title: "As Líricas de Aegrios",
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
        link: "https://github.com/gianluca-onisanti",
        ariaLabel: "Github do Mestre",
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

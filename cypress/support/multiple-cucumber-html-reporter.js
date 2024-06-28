const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/results",
  reportPath: "cypress/reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "114",
    },
    device: "Local Machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Informações da Execução",
    data: [
      { label: "Project", value: "Accessibility Project" },
      { label: "Release", value: "1.0.0" },
      { label: "Data da Execução", value: `${Date.now()}` },
    ],
  },
});
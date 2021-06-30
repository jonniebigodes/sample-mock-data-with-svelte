import { addDecorator } from "@storybook/svelte";
import { initializeWorker, mswDecorator } from "msw-storybook-addon";
initializeWorker();
addDecorator(mswDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import App from "./App.svelte";
import { rest } from "msw";
export default {
  component: App,
  title: "Mocking Data with Pages",
};

const TestData = [
  {
    id: 1,
    userID: 1,
    title: "Something",
    completed: false,
  },
  {
    id: 2,
    userID: 1,
    title: "Something",
    completed: false,
  },
  {
    id: 3,
    userID: 2,
    title: "Something",
    completed: false,
  },
  {
    id: 4,
    userID: 2,
    title: "Something",
    completed: false,
  },
];

const PageTemplate = (args) => ({
  Component: App,
  props: args,
});

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  msw: [
    rest.get(
      "https://jsonplaceholder.typicode.com/todos/",
      (_req, res, ctx) => {
        return res(ctx.json(TestData));
      }
    ),
  ],
};

export const MockedError = PageTemplate.bind({});
MockedError.parameters = {
  msw: [
    rest.get(
      "https://jsonplaceholder.typicode.com/todos/",
      (_req, res, ctx) => {
        return res(ctx.delay(800), ctx.status(403));
      }
    ),
  ],
};

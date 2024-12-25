import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import '@/styles/style.scss';
import '@/mocks';
import vuetify from '@/plugins/vuetify';

const pinia = createPinia();
setup((app) => {
  app.use(vuetify).use(pinia);
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

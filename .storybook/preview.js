import '@/assets/style.scss';
import '@/mocks';
import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';
import vuetify from '@/plugins/vuetify';

setup((app) => {
  const pinia = createPinia();
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

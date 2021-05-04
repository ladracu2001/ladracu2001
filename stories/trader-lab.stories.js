import { html } from 'lit-html';
import '../src/trader-lab.js';

export default {
  title: 'TraderLab',
  component: 'trader-lab',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <trader-lab
      style="--trader-lab-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </trader-lab>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

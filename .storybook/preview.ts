import type { Preview } from '@storybook/svelte';

import '../src/styles/siyuan/base.css';
import '../src/styles/siyuan/theme.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;

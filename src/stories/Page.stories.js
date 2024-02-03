import { within, userEvent, expect } from '@storybook/test';
import { Page } from './Pages/Page';

export default {
  title: 'Components/Page',
  component: Page,
  parameters: {

    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

export const pages = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

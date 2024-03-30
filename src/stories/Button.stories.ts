import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../common/components/Button'; // Adjust the path as necessary

const meta: Meta<typeof Button> = {
   title: 'Base-Components/Button',
   component: Button,
   tags: ['autodocs'],
   argTypes: {
      children: { control: 'text', description: 'ReactNode' },
      color: {
         control: { type: 'select', options: ['blue', 'green', 'red'] },
         description: 'Color theme of the button',
      },
      size: {
         control: { type: 'select', options: ['small', 'medium', 'large'] },
         description: 'Size of the button',
      },
      onClick: { action: 'clicked', description: 'Function to be called on click' },
   },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      children: 'Click Me',
      color: 'blue',
      size: 'medium',
   },
};

export const Small: Story = {
   args: {
      children: 'Small Button',
      color: 'green',
      size: 'small',
   },
};

export const Large: Story = {
   args: {
      children: 'Large Button',
      color: 'red',
      size: 'large',
   },
};

export const CustomOnClick: Story = {
   args: {
      children: 'Custom Action',
      color: 'blue',
      size: 'medium',
      onClick: () => alert('Button clicked!'),
   },
};

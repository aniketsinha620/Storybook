import React from 'react';
import Tables from './Tables'; // Import the component

export default {
    title: 'Components/Tables', // Storybook category
    component: Tables, // Component to be rendered in the story
};

// Template for the story
const Template = (args) => <Tables {...args} />;

// Define the Default story
export const Default = Template.bind({});
Default.args = {};

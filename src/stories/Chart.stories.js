import React from 'react';
import Chart from './Charts/Chart';

export default {
    title: 'Components/Chart',
    component: Chart,
};

const Template = (args) => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Add any props you want to pass to the Chart component
};

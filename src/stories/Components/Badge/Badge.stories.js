import React from "react";
import Badge from './Badge';


export default{
    title: 'Badge',
    component: Badge,
    parameters: {
        layout: 'fullscreen',
      },

};


const Template = (args) => <Badge {...args} />;

export const bg = Template.bind({});
bg.args ={
  Badge: true,
  label: 'Badge',
};
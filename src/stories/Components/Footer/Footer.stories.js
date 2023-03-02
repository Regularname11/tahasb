import React from "react";
import Footer from './Footer';


export default{
    title: 'Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
      },

    controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/,
        },
      },  
};


const Template = (args) => <Footer {...args} />;

export const Ft = Template.bind({});
Ft.args = {
  Card: true,
  label: 'Footer',
};
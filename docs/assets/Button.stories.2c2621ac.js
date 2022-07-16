import{B as t}from"./Button.9fe9c05c.js";import"./index.a8a75659.js";const i={parameters:{storySource:{source:`import Button from './Button.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},secondary:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},large:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},small:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}}}}},title:"Example/Button",component:t,argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}}},o=n=>({Component:t,props:n,on:{click:n.onClick}}),e=o.bind({});e.args={primary:!0,label:"Button"};const l=o.bind({});l.args={label:"Button"};const r=o.bind({});r.args={size:"large",label:"Button"};const a=o.bind({});a.args={size:"small",label:"Button"};const p=["Primary","Secondary","Large","Small"];export{r as Large,e as Primary,l as Secondary,a as Small,p as __namedExportsOrder,i as default};
//# sourceMappingURL=Button.stories.2c2621ac.js.map

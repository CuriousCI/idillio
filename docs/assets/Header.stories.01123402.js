import{H as n}from"./Header.914c20de.js";import"./index.a8a75659.js";import"./Button.9fe9c05c.js";const l={title:"Example/Header",component:n,parameters:{storySource:{source:`import Header from './Header.svelte';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => ({
  Component: Header,
  props: args,
  on: {
    login: args.onLogin,
    logout: args.onLogout,
    createAccount: args.onCreateAccount,
  },
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:17},endLoc:{col:2,line:25},startBody:{col:17,line:17},endBody:{col:2,line:25}},"logged-out":{startLoc:{col:17,line:17},endLoc:{col:2,line:25},startBody:{col:17,line:17},endBody:{col:2,line:25}}}},layout:"fullscreen"},argTypes:{onLogin:{action:"onLogin"},onLogout:{action:"onLogout"},onCreateAccount:{action:"onCreateAccount"}}},e=o=>({Component:n,props:o,on:{login:o.onLogin,logout:o.onLogout,createAccount:o.onCreateAccount}}),t=e.bind({});t.args={user:{name:"Jane Doe"}};const r=e.bind({});r.args={};const s=["LoggedIn","LoggedOut"];export{t as LoggedIn,r as LoggedOut,s as __namedExportsOrder,l as default};
//# sourceMappingURL=Header.stories.01123402.js.map

// eslint-disable-next-line import/extensions
import TButton from './button';
import './fonts/iconfont.css';

const components = [
  TButton,
];
const install = function (Vue) {
  console.log(12345677899);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
};

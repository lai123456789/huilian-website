import Vue from "vue";
import {
  Upload,
  Dialog,
  Collapse,
  CollapseItem,
  Carousel,
  CarouselItem,
  Icon,
  Rate,
  Input,
  Message,
  Button,
  Select,
  Option,
  OptionGroup,
  Table,
  TableColumn,
  Switch,
  Loading,
  MessageBox,
  Image,
  Progress,
  Row,
  Col,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Checkbox,
} from "element-ui";
import "@/assets/theme/elementTheme/index.css";
import "element-ui/lib/theme-chalk/display.css";
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Row);
Vue.use(Col);
Vue.use(Progress);
Vue.use(Image);
Vue.use(Switch);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Icon);
Vue.use(Rate);
Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;

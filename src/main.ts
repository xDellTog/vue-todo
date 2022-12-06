import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./theme/theme.css";
import "./theme/normalize.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

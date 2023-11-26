import { createApp } from "vue";
import App from "./App.vue";

import MasonryWall from "@yeger/vue-masonry-wall";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(MasonryWall).mount("#app");

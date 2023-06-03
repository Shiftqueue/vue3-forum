import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入初始化的样式文件
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
// 引入md
import VMdEditor from '@kangc/v-md-editor';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import hljs from 'highlight.js';
// highlightjs
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});


const app = createApp(App)
// use md
app.use(VMdPreview);
app.use(VMdEditor);

app.use(createPinia())
app.use(router)
app.mount('#app')

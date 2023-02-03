import Vue from 'vue';
import VueFroala from 'vue-froala-wysiwyg';
// 引入 Froala Editor js file.
require('froala-editor/js/plugins.pkgd.min.js');
// 引入 Froala Editor css files.
require('froala-editor/js/third_party/embedly.min');
require('froala-editor/js/third_party/font_awesome.min');
require('froala-editor/js/third_party/spell_checker.min');
require('froala-editor/js/third_party/image_tui.min');
require('froala-editor/css/froala_editor.pkgd.min.css');
import "froala-editor/js/languages/zh_cn.js";
Vue.use(VueFroala);
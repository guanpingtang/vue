import OCTable from './components/table';
import OCMavonEditor from './components/OCMavonEditor';
import OCAddSome from './components/OCAddSome';
import Nodata from './components/nodata';
import IconSvg from './components/iconFontSvg';
import BackBtn from './components/backBtn.vue';
import PictureLib from './components/pictureLib/index.vue';
import ImgAvatar from './components/imgAvatar/index.vue';
import OCScroll from './components/OCScroll/index';

const components = {
    OCTable,
    OCMavonEditor,
    OCAddSome,
    Nodata,
    IconSvg,
    BackBtn,
    PictureLib,
    ImgAvatar,
    OCScroll,
};

const install = function (Vue) {
    if (install.installed) return;

    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...components,
};

export default API;

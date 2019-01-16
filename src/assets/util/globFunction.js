/**
 * Created by xiaxia on 2019/1/9.
 */
window.mavonFullScreen = function (isFull) {
    const cacheIndex = {};
    const doms1 = document.getElementsByTagName('div');
    const doms2 = document.getElementsByTagName('ul');
    [doms1, doms2].forEach((doms) => {
        for (const dom of doms) {
            if (
                dom.className
                && dom.tagName !== 'svg'
                && !dom.className.includes('v-note')
            ) {
                if (dom.style) {
                    const style = window.getComputedStyle(dom, null);
                    if (style.zIndex && style.zIndex !== 'auto') {
                        if (isFull) {
                            dom.classList.add('layout-index1');
                        } else {
                            dom.classList.remove('layout-index1');
                        }
                    }
                }
            }
        }
    });
};

export default function message(vue) {
    return {
        success(msg) {
            if (typeof msg === 'string') {
                if (msg) {
                    vue.$Message.success(msg);
                }
            } else {
                throw new Error('msg应为String类型');
            }
        },
        error(msg) {
            if (typeof msg === 'string') {
                if (msg) {
                    vue.$Message.error(msg);
                }
            } else {
                throw new Error('msg应为String类型');
            }
        },
        info(msg) {
            if (typeof msg === 'string') {
                if (msg) {
                    vue.$Message.info(msg);
                }
            } else {
                throw new Error('msg应为String类型');
            }
        },
        warning(msg) {
            if (typeof msg === 'string') {
                if (msg) {
                    vue.$Message.warning(msg);
                }
            } else {
                throw new Error('msg应为String类型');
            }
        },
    };
}

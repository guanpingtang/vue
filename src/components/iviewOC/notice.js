export default function (vue) {
    window.notice = function (message, type = 'error') {
        if (typeof message === 'string') {
            if (message) {
                let title = '错误';
                switch (type) {
                    case 'open':
                        title = '提示';
                        break;
                    case 'info':
                        title = '消息';
                        break;
                    case 'success':
                        title = '成功';
                        break;
                    case 'warning':
                        title = '警告';
                        break;
                    case 'error':
                        title = '错误';
                        break;
                }
                vue.$Notice.close(message);
                vue.$Notice[type]({
                    title,
                    desc: message,
                    name: message,
                });
            }
        } else {
            throw new Error('message应为String类型');
        }
    };
}

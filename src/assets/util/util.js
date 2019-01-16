import moment from 'moment';
/**
 * 格式化时间
 * */
export function millToString(mills) {
    if (!mills) return null;
    return moment(mills).format('YYYY-MM-DD HH:mm:ss');
}
/**
 * 格式化时间
 * */
export function millToStringNoSecond(mills) {
    if (!mills) return null;
    return moment(mills).format('YYYY-MM-DD HH:mm');
}
/**
 * 保存文件
 * */
export function saveFile(blob, filename) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

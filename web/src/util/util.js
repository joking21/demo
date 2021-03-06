export function TimeConversion(str) {
    const timeData = str.split('T');
    const year = timeData[0];
    const time = timeData[1];
    const timeStr = time.split('.')[0];
    return `${year} ${timeStr}`;
}
export function parseImg(str) {
    const prefix = process.env.NODE_ENV === "development" ? '/dw' : '/api';
    return prefix + str;
}
/**
 * 这段代码是一个用于设置网页根元素字体大小的函数。
 * 它首先定义了一个基准大小 baseSize 为 37.5 像素。然后定义了一个 setRem 函数，该函数会根据当前浏览器窗口宽度与 750 的比例来动态设置根元素的字体大小，
 * 以实现响应式布局。
 * 接着调用 setRem 函数进行初始化，并且在窗口大小改变时也会重新调用 setRem 函数。最后通过 export default baseSize 导出了 baseSize 常量。
 */
const baseSize = 37.5
function setRem () {
    const scale = document.documentElement.clientWidth / 750
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 1) + 'px'
}
// 初始化
setRem()
window.onresize = function(){
    setRem()
}
export default baseSize
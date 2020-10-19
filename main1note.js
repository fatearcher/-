// 这个API是通过CSS选择器找到这个元素
let demo = document.querySelector("#demo");
let n = 1;
// inner填充内容
demo.innerHTML = n;

// 在一段时间之后执行另一个函数. 下面的代码是3秒后变成2,
// setTimeout 默认只响一次
// setInterval 每三秒响一次
// 老手用递归的setTimeout

setInterval(() => {
  n = n + 1;
  demo.innerHTML = n;
}, 3000);

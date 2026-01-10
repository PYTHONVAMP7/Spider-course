
const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Script loaded!!!");
  document.body.append(sc);
};

setInterval(() => {
    loadScript("src.js", callback)   
}, 3000);

loader = document.querySelector(".pg-loader");
qRule = document.querySelector(".q-rule");

window.addEventListener("load", ()=>{
    loader.style.display = "none";
})

setTimeout(()=>{
    qRule.style.width = "30%";
    qRule.style.opacity = "1";
}, 1000)
import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputs = form.querySelectorAll("[name]");
if(localStorage.getItem("feedback-form-state")){
   const obj = JSON.parse(localStorage.getItem("feedback-form-state"));
   inputs.forEach(el=>{
    el.value = obj[el.name];
   })
}

const update = throttle(
    ()=>{
        let obj = {};
        inputs.forEach(el=>{
            obj[el.name] = el.value;
        })
        //таке рішення дозволяє мати довільну к-сть полів, допоки вони матимуть атрибут нейм, хоча я не впевнений, чи воно є оптимальним
        localStorage.setItem("feedback-form-state", JSON.stringify(obj));
    },
    500
);
inputs.forEach(el=>{
    el.addEventListener("input", update)
});

form.querySelector("[type=submit]").addEventListener("click",(e)=>{
    e.preventDefault();
    let obj = {};
    inputs.forEach(el=>{
        obj[el.name] = el.value;
        el.value = "";
    })
    console.log(obj);
})
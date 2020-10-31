
document.addEventListener("DOMContentLoaded", event => {
    console.log("dom load");
    const test = document.getElementById("test");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        //fade.Out(test, 1000);
        //fade.To(test, 1000, 0.14);
        fade.Toggle(test, 1000);
        /*
        btn.addEventListener("click", function (){
            fade.In(test, 1000);
        })

         */
    })
})


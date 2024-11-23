let value=1;
let assign=()=>{document.querySelector("#value").textContent=value};
assign();
let incre=document.querySelector("#Increment");
let decre=document.querySelector("#Decrement");
let clear=document.querySelector("#clear");
let dis2=document.getElementById("dis");
incre.addEventListener("click",()=>{
    dis2.style.visibility="hidden";
    value=value+1;
    assign();
});
decre.addEventListener("click",()=>{
    if(value<=1){
        // let p=document.createElement("p");
        // p.textContent="Error : Cannot go below 0";
        // document.querySelector("#para").appendChild(p);
        dis2.style.visibility="visible";
        dis2.style.color="red"
        value=1;
        assign();
        return;
    }
    value=value-1;
    assign();
})
clear.addEventListener("click",()=>{
    value=1;
    assign();
    dis2.style.visibility="hidden";

});

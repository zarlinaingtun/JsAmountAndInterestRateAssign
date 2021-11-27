//UI

const current=document.getElementById('current');
const interest=document.getElementById('interest');

const currentamount=document.getElementById('currentamount');
const interestamount=document.getElementById('interestamount');

const btns=document.querySelectorAll('.btn');

const addbtn=document.querySelector('.add'),
subtractbtn=document.querySelector('.subtract');

let totalcurrentamount=0;
let selectedamount=0;

btns.forEach((btn,idx)=>{

   
    btn.addEventListener('click',()=>{
        if(idx===0){
            // console.log(idx);
            selectedamount=100000;
        }
        else if(idx===1){
            // console.log(idx);
            selectedamount=200000;
        }
        else if(idx===2){
            // console.log(idx);
            selectedamount=300000;
        }
        else if(idx===3){
            // console.log(idx);
            selectedamount=400000;
        }
        else if(idx===4){
            // console.log(idx);
            selectedamount=500000;
        }
    })
});

addbtn.addEventListener('click',()=>calculateamount('+'));
subtractbtn.addEventListener('click',()=>calculateamount('-'));


function calculateamount(sign){
    if(sign==='+'){
        console.log('selected amount'+selectedamount);
    
        totalcurrentamount=totalcurrentamount + selectedamount;
        if(totalcurrentamount>1500000){
            window.alert(`Your account\'s total limited amount is 1500000MMK.`);
            totalcurrentamount=totalcurrentamount-selectedamount;
        }
        console.error(totalcurrentamount);
        
        updatecup(totalcurrentamount);
        
    }
    else if(sign==='-'){
        totalcurrentamount-=selectedamount;
        if(totalcurrentamount<0){
            
            totalcurrentamount=totalcurrentamount+selectedamount;
            window.alert(`!! You cannot withdraw.Your Balance is ${totalcurrentamount}MMK !!`);
        }
        console.log(totalcurrentamount);
        

        updatecup(totalcurrentamount);
    }
}

function updatecup(totalcurrentamount){
    currentamount.textContent=`${totalcurrentamount}MMK`;
    if(totalcurrentamount===0){
        current.style.width=`${550/2}px`;
    }
    else{
        if(totalcurrentamount===100000 || totalcurrentamount===200000 || totalcurrentamount===300000){
            currentamount.style.fontSize=`${12}px`;
            current.style.padding=`${30}px`;
        }
        else{
            currentamount.style.fontSize=`${1.3}rem`;
            current.style.padding=`${0}px`;
        }
        current.style.width=`${600*totalcurrentamount/1500000}px`
        
    }

    interestamount.innerText=`${totalcurrentamount*5/100}MMK`;
}




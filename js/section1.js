const DetailTable = document.querySelector("#detailTable");
const DetailBtn = document.querySelector("#sec1Btn");

var Status = false;

showDetail=()=>{
    if(Status===false){
        DetailTable.style.display= "block";
        Status=true;
    }else{
        DetailTable.style.display= "none";
        Status=false;
    }
}


DetailBtn.addEventListener("click",showDetail);
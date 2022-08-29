window.onload=function(){
    var div=document.getElementsByClassName("cycle")[0];
    // console.log(div);
    var divlist=div.children;
    var divlistlength=divlist.length;
    var count=0;
    setInterval(() => {
        if(count+1==divlistlength){
            div.scrollTop=0;
            count=0;
        }else{
            count++;
            let top=count*120
            var countBanner=0;
            for(let i=((count-1)*200)+10;i<=top;i+=10){
                countBanner++;
                setTimeout(()=>{
                    div.scrollTop=i;
                },countBanner*10)
            }
            div.scrollTop=top;
        }
    }, 2500);
}
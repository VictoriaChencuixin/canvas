/**
 * Created by Administrator on 2017/4/21.
 */

function  Hero(imgId1,imgId2,x,y){


    this.img1=document.getElementById(imgId1);
    this.img2=document.getElementById(imgId2);
    this.x=x;
    this.y=y;
    this.count=0;
}


Hero.prototype.show=function(){

    this.count++;

    if(this.count%4){
        context.drawImage(this.img1,this.x,this.y,30,45);
    }else{
        context.drawImage(this.img2,this.x,this.y,30,45);
    }



}
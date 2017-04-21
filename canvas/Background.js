/**
 * Created by Administrator on 2017/4/21.
 */

function  Background(imgId,x,y){

    this.img=document.getElementById(imgId);
    this.x1=x;
    this.x2=x+this.img.width;
    this.y=y;

}

Background.prototype.show=function(){
    context.drawImage(this.img,this.x1,this.y);
    context.drawImage(this.img,this.x2,this.y);
    this.x1-=3;
    this.x2-=3;

    if( this.x1<=-this.img.width){
        this.x1=this.img.width;
    }
    if( this.x2<=-this.img.width){
        this.x2=this.img.width;
    }
}
class Food{
    constructor(){
        this.foodStock;
        this.lastFed;
        this.milk = loadImage("images/Milk.png");

    }
    
     display(){
     var x=80,y=100;

     imageMode(CENTRE);
     image(this.milk,720,220,70,70);

     if(this.foodStock!=0){
         for(var i=0;i<this.foodStock;i++){
             if(i%10==0){
                 x=80;
                 y=y+50;
             }
             image(this.milk,x,y,50,50);
             x=x+30;
         }
     }
    }
     getFedTime(lastFed){
        this.lastFed=lastFed;
      }
  
     updateFoodStock(foodStock){
      this.foodStock=foodStock;
     }
  
     deductFood(){
       if(this.foodStock>0){
        this.foodStock=this.foodStock-1;
       }
      }
  
      getFoodStock(){
        return this.foodStock;
      }
    
     }

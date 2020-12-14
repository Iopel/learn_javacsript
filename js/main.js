

let counter = function(){
    let count = 0;

    return function(n){
    
        count = n === undefined ? count : n;

        return count++;
  
    }
}();

console.log(counter());
console.log(counter(5));

let counting = function(){
  let count = 0;
  return {
    value(n) {
      if (n !== undefined) count = n;

      return count;
    },

      increment(){
        count++;
      },

      decrement() {
        count--;
      }
    };
  }();

  console.log(counting.value()); 
  counting.increment();
  counting.increment();
  counting.increment();
  console.log(counting.value()); 
  counting.decrement();
  counting.decrement();
  console.log(counting.value());


 let myPrint =(a,b,res) => `${a}^${b}=${res}`;

 let myPow = (a, b, callback) =>{
   let pow = (x,n) =>
   {
     if (n!==1) return x = x * pow(x, n-1)
     return x;
   }
   return callback(a, b, pow(a,b));
 }

 console.log(myPow(3, 3, myPrint)); 
console.log(myPow(5, 3, myPrint)); 
  
let yearNow = new Date().getFullYear();

let car={
  engine: 1500,
  model: 'GS 300',
  name: 'Lexus',
  year: 2008,
  info(){
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
  },

  get used(){
    return this.year !== yearNow ? 'used' : 'new';
  },

  set used(value){
    if(value === 'new' && this.year !== yearNow) this.year =  yearNow;

  }
};

console.log(car.info());
car.used = 'new';
console.log(car.info());


let arr = [1,122, 45, 23 ,44];
let myMax = (arr) => {
  return Math.max.apply(null, arr);
  
}

console.log(myMax(arr));

let myMul = (a,b) => a*b;


 let myDouble = myMul.bind(null, 2);
 let  myTriple = myMul.bind(null, 3);

 console.log(myDouble(5)); 
 console.log(myTriple(5)); 


 let UnUnuque = [11, 22, 3, 4, 11, 3, 22];

 let myUniq =(arr) =>{
   let set = new Set();

   arr.forEach(value => {
     set.add(value);
   });

   return set;
 }

 console.log(myUniq(UnUnuque));

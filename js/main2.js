var userObj={
    firstName: 'Николь',
    lastName: 'Иопель',
    age: 18,
    fullName: function(){
        return (userObj.firstName + ' ' + userObj.lastName);
    }
}

console.log(userObj.fullName());

function defUpperStr(string){
    return (string || 'default text').toUpperCase();
}

console.log(defUpperStr());
console.log(defUpperStr('My text'));


function evenFn(n){
    var arr =[];

    for(var i=1; i<=n; i++){
        if(i%2===0){
           arr.push(i);
        }
    }
    return arr;
}

console.log(evenFn(20));


function weekFn(n) {
    var day = '';
  
    switch (n) {
      case 1:
        day = 'Понедельник';
        break;
      case 2:
        day = 'Вторник';
        break;
      case 3:
        day = 'Среда';
        break;
      case 4:
        day = 'Четверг';
        break;
      case 5:
        day = 'Пятница';
        break;
      case 6:
        day = 'Суббота';
        break;
      case 7:
        day = 'Воскресенье';
        break;
      default:
        day = null;
    }
  
    return day;
  }
  
  console.log(weekFn(3));
  console.log(weekFn(-7));



function ageClassification(n){
    return n>0
        ? n>24
            ? n>44
                ? n>65
                    ? n>75
                        ? n>90
                            ? n>122
                                ?null
                                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

console.log(ageClassification(12));
console.log(ageClassification(80));
console.log(ageClassification(-7));
console.log(ageClassification(75.5));


function oddFn(n){
  
    var arr=[];
    var i = 1;
    while (i <= n) {

        if(i%2==1){

            arr.push(i);
        }
        i++;
    }

    return arr;
}

console.log(oddFn(10));


function mainFunc(a, b, func){
    if(func && typeof func === 'function'){
        return func(a,b)
    }
    else return false;
}

function cbRandom(a, b){
    return Math.floor(Math.random() * (b - a+ 1)) + a;
}


function cbPow(a,b){
    return Math.pow(a,b);
}

function cbAdd(a, b){
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));

`
Hey! I'm trying to create a backend server Restaurant Project on MongoDB
1. I'm using JavaScript
2. using mongodb
3. Using Node.js, express and nodemon
4. I want to store 
Hotel =[

{
  hotel_name: '1',
  meals:
    [
      {
        hotel_name: "",
        meals: [
          {
            id: "",
            meal_name: '',
            meal_price: '',
            mean_ethnicity: '',
            meal_description: ''
          }
        ]
      }
    ]
},

{
  hotel_name: '2',
  meals:
    [
      {
        hotel_name: "",
        meals: [
          {
            id: "",
            meal_name: '',
            meal_price: '',
            mean_ethnicity: '',
            meal_description: ''
          }
        ]
      }
    ]
}
] 
like this
5. and I also want to store User's data and history like
Users = [
  {
    username: '',
    password:'',
    orders:[
      {
        orderNo: 1,
        ...meal
      },

      {
        orderNo: 2,
        ...meal
      }
    ]

  }
]
like this.

Now give me step by step process with appropriate folder and files names, appropriate imports and routers.
`


function arrSort(arr) {
  arr = arr.sort((a, b) => a - b);
  return;
}
function maxDominance(arr, i) {
  arrSort(arr);
  let sum = 0; const halfLength = arr.length >> 1;

  while (i < arr.length) {
    if (i < halfLength) sum -= arr[i];
    else sum += arr[i];
    console.log(sum);
    i++;
  }
  return sum;
}

function main() {
  let arr = [1, 2, 3, 4, 5, 6, 7]
  /*
  the question tells you to arrange the array like
  [4,1,5,2,6,3,7]
  but you can skip that part 
  however if you want to do that
  uncomment the below code
  and make necessary changes to maxDominance fn
  */
  //  arrReorder(arr);

  // let arr = [3,5,3.4,694,394,69347,1,45,603,693,36.547];
  // console.log(maxDominance(arr,0));
  console.log(maxDominance(arr, 0));
}
main()

function arrReorder(arr) {
  arrSort(arr);
  const halfLength = arr.length >> 1;
  let arr1 = arr.slice(halfLength), arr2 = arr.slice(0, halfLength);
  // console.log(arr1,arr2);
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) resArr.push(arr1[i]);
    else resArr.push(arr2[i]);
  }
  return resArr;
}

  

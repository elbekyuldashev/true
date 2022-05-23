// let arr = [
//     {
//         name: 'milk',
//         price: 10000
//     },
//     {
//         name: 'fish',
//         price: 40000
//     },
//     {
//         name: 'anush',
//         price: NaN
//     },
//     {
//         name: 'shokolad',
//         price: 12000
//     },
//     {
//         name: 'water',
//         price: 1500
//     },
//     {
//         name: 'sigaret',
//         price: 12000
//     },
//     {
//         name: 'bread',
//         price: 7500
//     },
//     {
//         name: 'vodka',
//         price: 15000
//     },
//     {
//         name: 'beer without alc',
//         price: 17500
//     }
// ]

// let from = prompt('from') 
// let to = prompt('to')


// console.log(
//     arr.filter(item => item.price >= from && item.price <= to)
// );


// let arr = [2,1,4,2,7,8,3,31,21,15]

// console.log(
//     arr.sort((a,b) => a-b)
// );



// let arr = [1,2,3,4]

// let sum = 0

// arr.filter(item => sum += item)

// console.log(sum);



// let arr1 = [1,2,3,4,5,6,7,8,9,10]

// console.log(
//     arr1.filter(item => item % 2 === 0)
// );

// console.log(
//       arr1.map(item => item % 2 === 0)
//   );


// arr1.forEach(item => {
//     console.log(item);
// })

// Отфильтровать задачи в переменные а и b
    // Сохранить количество в ключе count
    // Сохранить сами задачи в массиве-ключе arr
    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": false 
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 2,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 2,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count:2 ,
        arr: []
    }
    


    let b = {
        count: 8, 
        arr: []
    }

//   if(arr.map(item => item % 2 === 0)){
//       console.log('true');
//   }else{
//       console.log('false');
//   }
    // console.log(
    //     arr.map(item => item % 2 === 0)
    // )
    console.log(a,b);
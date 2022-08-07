
console.log('Задание 1');
    let arrTask1=[1,2,3,4,5];
    for(let i=0;i<arrTask1.length;i++){
        console.log(arrTask1[i]);
    }
console.log('------------------------');

console.log('Задание 2');
    let arrTask2=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for(let i=0; i<arrTask2.length;i++){
        if(arrTask2[i]>-10 && arrTask2[i]<-3){
            console.log(arrTask2[i]);
        }
    }
console.log('------------------------');

console.log('Задание 3');
    let arr_1_Task3=[];
    let arr_2_Task3=[];
    let numTask3=23;
    while(numTask3<=57){
        arr_1_Task3.push(numTask3);
        numTask3++;
    }
    console.log(`массив, созданный с помощью while: ${arr_1_Task3}`);
    for(let i=23; i<=57;i++){
        arr_2_Task3.push(i);
    }
    console.log(`массив, созданный с помощью for: ${arr_2_Task3}`);

    let  result=0;
    for(let i=0; i<arr_2_Task3.length;i++){
        result+=arr_2_Task3[i];

    }
    console.log(`Сумма чисел массива: ${result}`);
console.log('------------------------');

console.log('Задание 4');
     let arrTask4= ['10', '20', '30', '50', '235', '3000'];
     for(let i=0;i<arrTask4.length;i++){
        if(arrTask4[i][0]==='1' || arrTask4[i][0]==='2' || arrTask4[i][0]==='5'){
            console.log(arrTask4[i]);
        }
     }
console.log('------------------------');

console.log('Задание 5');
     let arrTask5=['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
     for(let i=0;i<arrTask5.length;i++){
        if(arrTask5[i]==='СБ' || arrTask5[i]==='ВС'){
            document.write(`<span style="font-weight:bold;">${arrTask5[i]}</span> `);
        }else{
            document.write(`<span >${arrTask5[i]}</span> `);
        }
     }
console.log('------------------------');


console.log('Задание 6');
    let arrCars=['Ford','Audi','Dodge'];
    console.log(arrCars);
    arrCars.push('Posrhe');
    console.log(arrCars[arrCars.length-1]);
console.log('------------------------');
console.log('Задание 7');
    let arrTask7=[];
    for(;;){
        let numTask7=+prompt('Введите число');
        if(numTask7===0 || numTask7===''){
            console.log('Цикл прерван');
            break;
        }else{
            arrTask7.push(numTask7);
        }
    }

    console.log(`Полученный массив ${arrTask7}`);
    // arrTask7.sort(function(a,b){
    //     return a-b;
    // })
    for(let j=0; j<arrTask7.length; j++){
        for(let i=0; i<arrTask7.length; i++){
            let exch=0;
            if(arrTask7[i]>arrTask7[i+1] && arrTask7[i+1]!==undefined){
                exch=arrTask7[i+1]
                arrTask7[i+1]=arrTask7[i];
                arrTask7[i]=exch;
            }
        }
    }
   
    console.log(arrTask7);

console.log('------------------------');

console.log('Задание 8');
    let arrTask8=[12, false, 'Текст', 4, 2, -5, 0];
    let iter=arrTask8.length/2;
    let beg=0;
    let end=arrTask8.length-1;
    // while(end>=0){
    //     console.log(arrTask8[end]);
    //     end=end-1;
    // }
    // или
    while(iter>0){
        let exchTask8=0;
        
        exchTask8=arrTask8[beg]
        arrTask8[beg]=arrTask8[end];
        arrTask8[end]=exchTask8;
        end=end-1;
        beg=beg+1;
        iter=iter-1;
    }

    console.log(` массив после While: ${arrTask8}`);
    arrTask8=[12, false, 'Текст', 4, 2, -5, 0];
    let arrReverse=arrTask8.reverse();
    console.log(` массив после reverse: ${arrReverse}`);
console.log('------------------------');
console.log('Задание 9');
    let arrTask9= [5,9,21, , ,9,78, , , ,6];
    let counterTask9=0;
    for(let i=0;i<arrTask9.length;i++){
       
        if(arrTask9[i]===undefined){
            counterTask9=counterTask9+1;

        }
    }
    console.log(`Количество пустых элементов равно ${counterTask9}`)
console.log('------------------------');

console.log('Задание 10');
    let arrTask10=[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
    let arr0_Task10=[];
    let sumTask10=0;
    for(let i=0; i<arrTask10.length;i++){
        if(arrTask10[i]===0){
            arr0_Task10.push(i);
        }
    }
    if(arr0_Task10.length<2){
        console.log(0);
    }else{
        
        for(let j=arr0_Task10[0]; j<arr0_Task10[arr0_Task10.length-1];j++){
            sumTask10+=arrTask10[j];

        }
        console.log(`Сумма чисел между двумя крайними нулями равна ${sumTask10}`);
    }
    
    // sumTask10=0;
    // for(let i=0;i<arrTask10.length;i++){
    //     if(arrTask10[i]===0){
    //         let j=i+1;
    //         while(j<arrTask10.length){
                
    //             if(arrTask10[j]!==0 ){
    //                 console.log('индекс '+j,arrTask10[j]);
    //                 sumTask10+=arrTask10[j];
                    
    //                 i=j;
    //                 j++;
                   
    //             }else{
    //                 i=j-1;
    //                 console.log(i);
    //                 break;
    //             }
                
                
    //         }

    //     }
    // }
    // console.log(`Сумма 2 чисел между двумя крайними нулями равна ${sumTask10}`);

console.log('------------------------');
console.log('Задание 11');
   let nTask11=+prompt('Введите высоту треугольника');
   let arrTask11=['^'];
   let jCounter=nTask11-1;
   for(let i=0; i<nTask11;i++){
        
        for(let j=jCounter; j>0;j--){
            arrTask11.unshift(' ');
        }
        let stringArr=arrTask11.join('');
        console.log(stringArr);
        stringArr='';
        arrTask11.splice(0,jCounter);
        

        arrTask11.unshift('^');
        arrTask11.push('^');
        jCounter=jCounter-1;
        
    
   }
console.log('------------------------');

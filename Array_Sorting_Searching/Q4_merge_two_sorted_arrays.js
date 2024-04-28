//* Sort Method
//% Approach:
   //% 1. find the length of arr1 and arr2
   //% 2. Create one more extra array with the length of extraArr = arr1.length + arra2+length
   //% 3. pUsh both array in one array extraArr
   //% 4. Now we will sort is 
   //% 5. once sort done we nned to create two array of same length arar1 and arra2

   //! TC: O(nlogn) + O(n) + O(n)
   //! Space complexity: O(1)
   let sortArray = function(arr1, arr2) {
      console.log("********************** Normal Sort with extra space*******************************")
     let len1 = arr1.length;
     let len2 = arr2.length;
     let extraArray = new Array(len1+len2)
     let j = len1;
     //! Time Complexicity: O(n)
     for(let i=0; i <extraArray.length; i++) {
        if(i < len1) {
            extraArray[i] = arr1[i];
            j--;
        }
         else {
            extraArray[i] = arr2[j]
            j++;
        }
        
     }
       //! Time Complexicity: O(nlogn)
     if(extraArray.length > 0) {
        console.log("Arranged Array", extraArray)
        let i = 0;
        let k;
        while(i < extraArray.length) {
            k = i+1;
            while(k < extraArray.length) {

               if(extraArray[k] < extraArray[i]) {
                  let temp = extraArray[i];
                  extraArray[i] = extraArray[k];
                  extraArray[k] = temp;
               }
               k++;
              
            }
            i++;
         }
     }
     console.log("sorted Array", extraArray);
     //! Time Complexicity: O(n)
     let k=0;
     for(let i=0; i<extraArray.length; i++) {
         if(i< len1) {
            arr1[i] = extraArray[i]
         } else {
            console.log(i)
            arr2[k] = extraArray[i];
            k++;
         }
     }
     console.log("arr1: ", arr1);
     console.log("arr2: ", arr2);
   }
   sortArray([1, 4, 7, 8, 10],[2, 3, 9]);


   //* Inseration Method Algorithum
   //% Approach: Array is alreday sorted so we will used this sorted array because we don't need to sort 
               //% it i.e no need of extra space as per requirement
               //% 1. Traver the array and compared arr1[i] < arra2[i] if true then no need to swap it just i++
               //% If arra1[i] < arra2[i] if iit is false then we wen to swap it
                   //% temp = arr1[i]; arr1[i] = arr2[i]; arr2[i] = temp
               //% After swapping arr2 should be shoretd one if not first need to arrange it in sorted mananer
                   //% Sorted: if(arra[j] < arra[i]) => temp = arr1[i]; arr1[i] = arr2[]j; arr2[j] = temp
   //! TC: O(N1 * M1)
   //! SC: O(1)

   let inserationSort = function(arr1, arr2) {
      console.log("********************** Insertion Sort *******************************")
      let len1 = arr1.length;
      let len2 = arr2.length;

      for(let i=0; i<len1; i++) {
         if(arr1[i] > arr2[0]) {
            temp = arr1[i];
            arr1[i] = arr2[0]
            arr2[0] = temp
          
            //^ Now After swapping we will sort the arr2
            let firstEle = arr2[0];
            //^ firstEle is gratert than other elements in 
            for(k =1; k <len2 && arr2[k] < firstEle; k++) {
               arr2[k-1] = arr2[k]

            }
            arr2[k-1] = firstEle;
         }
      }
      console.log("Array 1: ", arr1);
      console.log("Array 1", arr2)

   }

   inserationSort([1, 4, 7, 8, 10],[2, 3, 9])

                 


   //* Gap Method
   
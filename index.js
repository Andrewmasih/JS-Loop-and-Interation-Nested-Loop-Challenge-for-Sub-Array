/* Break and Continue keyword are used to control the iterations of a loop, sometimes data are structured in other data in an multidimensional Arrays, so sometimes we need 2 LOOPS to complete the iteration. */


let subArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];

let i;

let j;

for (i = 0; subArray.length; i ++); {

  for (j = 0; subArray.length; j ++); {

    console.log(`Outer Iteration: ${i}, Inner Iteration ${j}`); // 
  }  
}


// To create new array of random integers
var btn1=document.getElementById('generate');
btn1.addEventListener('click',Generate_Array);

// To Bubble sort The Array
var btn2=document.getElementById('bubble_sort');
btn2.addEventListener('click',Bubble_Sort);


// To Merge sort The Array
var btn3=document.getElementById('merge_sort');
btn3.addEventListener('click',Merge_call);

// To Quick sort The Array
var btn4=document.getElementById('quick_sort');
btn4.addEventListener('click',Quick_call);

// To insertion sort The Array
var btn5=document.getElementById('insertion_sort');
btn5.addEventListener('click',Insertion_Sort);

// To Selection sort The Array
var btn6=document.getElementById('selection_sort');
btn6.addEventListener('click',selection_sort);

// To Heap sort The Array
var btn7=document.getElementById('heap_sort');
btn7.addEventListener('click',Heap_call);

// // To Shell Sort
// var btn7=document.getElementById('shell_sort');
// btn7.addEventListener('click',Shell_Sort);

// Binary Search

var btn8=document.getElementById('binary_search');
btn8.addEventListener('click',Binary_Search);

// Linear Search

var btn9=document.getElementById('linear_search');
btn9.addEventListener('click',Linear_Search);

// element to be searched
var key_inp=document.getElementById('key');
var key;
key_inp.addEventListener('input',get_key);

// To store size of div elements or array elements
var div_sizes=[];
// To Store Corresponding div elements
var divs=[];

// Get Array Size and Speed  elements
var size=document.getElementById('a_size');
var ar_speed=document.getElementById('a_speed');



// add functionality to sliders
size.addEventListener('input',update_array_size);
ar_speed.addEventListener('click',update_speed);

// size of array and speed of sorting
var array_size=size.value;
// initial speed
var speed=1000;

// Get Array Container
var cont=document.getElementById("array_container"); 

// variable which will help in display the comparsion
var c_delay=0;

// time upto which div will retain a color
var delay_time=20000/(Math.floor(array_size/10)*speed); 

function Generate_Array(){
  
  // reset delay to 0
  c_delay=0;

  // empty the array container
  cont.innerHTML='';
  div_sizes=[];
  divs=[];
  
  // Create new elements
  for(let i=0;i<array_size;i++){
    // Random value between 20 and 200
    div_sizes[i]=Math.floor(Math.random()*200)+20;
        
    // Create div element
    divs[i]=document.createElement("div");
    // append to the container
    cont.appendChild(divs[i]);
    // apply style to div;
    
    margin_size=0.1;
    divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-0.2) + "%; height:" + (div_sizes[i]) + "%;";
  }
}

// -----------------------MODAL------------------------

// if any element is not enetered for searching
// get modal element
var modal=document.getElementById('Modal');
var close=document.getElementsByClassName('close')[0];
close.onclick=function(){
  modal.style.display='none';
}


// ---------------------------------------------------HELPER FUNCTIONS---------------------------------------------

// -------------------------- UPDATE SPEED OF SORTING VISUALIZATION------------------------------

function update_speed()
{
  // get changed value of speed
  speed=ar_speed.value;
  switch(parseInt(speed))
  {
    // match the cases
      case 1: speed=1;
              break;
      case 2: speed=5;
              break;
      case 3: speed=50;
              break;
      case 4: speed=100;
              break;
      case 5: speed=500;
              break;
      case 6: speed=1500;
              break;
      case 7: speed=2000;
              break;
      case 8: speed=3000;
              break;
      case 9: speed=5000;
              break;
      case 10: speed=10000;
              break;
      
  }
  // Update delay time 
  delay_time=1000/speed;        //Decrease numerator to increase speed.
}


// -------------------TO SWAP ELEMENTS------------------------------
function swap(index,largest_index){
  
  // to show swap operation
  div_update(divs[largest_index],div_sizes[largest_index],'red');
  div_update(divs[index],div_sizes[index],'red');

  var temp=div_sizes[largest_index];
  div_sizes[largest_index]=div_sizes[index];
  div_sizes[index]=temp;
  
  // to show swap operation
  div_update(divs[largest_index],div_sizes[largest_index],'red');
  div_update(divs[index],div_sizes[index],'red');
  
  // changing swapped elements back to their color
  div_update(divs[largest_index],div_sizes[largest_index],'blue');
  div_update(divs[index],div_sizes[index],'blue');
}

// --------------------UPDATE ARRAY SIZE-------------------------------
function update_array_size(){
  // Get New Size
  array_size=size.value;
  // Create New Array
  Generate_Array();
}

// to access the key which is to be searched using binary search or linear search
function get_key(){
  return key_inp.value;
}

// -----------------------UPDATE ELEMENT COLOR----------------------------
function div_update(cont,height,color)
{
    window.setTimeout(function(){
      cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-0.2) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}


// ----------------------------------------------------------- SORTING TECHNIQUES --------------------------------------------------------------------------


// -----------------------------BUBBLE SORT-----------------------------
function Bubble_Sort()
{
  for(var i=0;i<array_size;i++)
  {
    for(var j=0;j<array_size-i-1;j++)
    {
      // Yellow Shows That Current Elements Is Selected 
      // Red Shows That The Current Elements Are Compared
      // Green Shows That The Element Is Sorted

      div_update(divs[j],div_sizes[j],"yellow");//Color update
      
      if(div_sizes[j]>div_sizes[j+1])
      {
        div_update(divs[j+1],div_sizes[j+1],"yellow");//Color update
        swap(j,j+1);
      }
      // if This Elements Is At Correct Position Till Now Then Leave It 
      div_update(divs[j],div_sizes[j], "blue");//Color update
    }
   // Element is Sorted
    div_update(divs[j],div_sizes[j], "green");//Color update
  }
}

// --------------------------------MERGE SORT---------------------------------

// ---------- HELPER FUNCTION TO CALL MERGE SORT -----------------------

function Merge_call(){
  Merge_Partition(0,array_size-1);
  
}


function Merge_Sort(start,mid,end){
  
  var p=start,q=mid+1;

  var Arr=[],k=0;

  for(var i=start; i<=end; i++)
  {
    // p is out of mid range then enter values from q index i.e all elements from p to mid are inserted in the array Arr
      if(p>mid)
      {
          Arr[k++]=div_sizes[q++];
          div_update(divs[q-1],div_sizes[q-1],"red");//Color update
      }
      
    // q is out of end range then enter values from p index i.e all elements from q to end are inserted in the array Arr
      else if(q>end)
      {
          Arr[k++]=div_sizes[p++];
          div_update(divs[p-1],div_sizes[p-1],"red");//Color update
      }

      // compare two elements and store smaller of them in Arr
      else if(div_sizes[p]<div_sizes[q])
      {
          Arr[k++]=div_sizes[p++];
          div_update(divs[p-1],div_sizes[p-1],"red");//Color update
      }
      else
      {
          Arr[k++]=div_sizes[q++];
          div_update(divs[q-1],div_sizes[q-1],"red");//Color update
      }
  }

  // Color Green To Sorted Array
  for(var t=0;t<k;t++)
  {
      div_sizes[start++]=Arr[t];
      div_update(divs[start-1],div_sizes[start-1],"green");//Color update
  }
}


function Merge_Partition(start,end)
{ 
  if(start<end){
    var mid=Math.floor((start+end)/2);

    // represent partition of Array
    div_update(divs[mid],div_sizes[mid],"yellow");
    Merge_Partition(start,mid);
    Merge_Partition(mid+1,end);
    Merge_Sort(start,mid,end);
  }

}



// -----------------------QUICK SORT-----------------------

// ----------------HELPER FUNCTION TO CALL QUICK SORT------------------
function Quick_call(){

  Quick_Sort(0,array_size-1);

}

function Quick_Sort(lb,ub){

    if(lb<ub){
      var location=Quick_Partition(lb,ub);
      Quick_Sort(lb,location-1);
      Quick_Sort(location+1,ub);
    }
}

function Quick_Partition(lb,ub)
{
    var pivot=div_sizes[lb];
    var i=lb,j=ub;
    // pivot element
    div_update(divs[lb],div_sizes[lb],'yellow');
    while(i<j)
    {
      while(i<=ub && div_sizes[i]<=pivot){

        // traversing array to find element larger than pivot
        div_update(divs[i],div_sizes[i],'yellow');
        div_update(divs[i],div_sizes[i],'blue');
        i++;
      }
      
      // element larger than pivot
      div_update(divs[i],div_sizes[i],'orange');

      while(j>=lb && div_sizes[j]>pivot){

        // traversing in reverse to find smaller element than pivot
        div_update(divs[j],div_sizes[j],'yellow');
        div_update(divs[j],div_sizes[j],'blue');
        j--;
      }

      // element smaller than pivot
      div_update(divs[j],div_sizes[j],'orange');

      if(i<j){
        swap(i,j);
      }
    }
    // swap pivot element to its original place
    swap(lb,j);
    
    // to represent the array on which the quick sort is going to be applied
    var x=lb,y=i;
    while(x<=y){
      div_update(divs[x],div_sizes[x],'green');
      div_update(divs[y],div_sizes[y],'green');
      x++;
      y--;
    }

    return j;

}



// ----------------------INSERTION SORT-------------------

function Insertion_Sort(){
  for(var i=1;i<array_size;i++){
    var j=i-1;
    var key=div_sizes[i];

    // current selected element
    div_update(divs[i],div_sizes[i],'yellow');

    while(j>=0 && div_sizes[j]>key){
      
      // swap the elements
      div_update(divs[j],div_sizes[j],'red');
      div_update(divs[j+1],div_sizes[j+1],'red');

      div_sizes[j+1]=div_sizes[j];

      div_update(divs[j],div_sizes[j],'red')
      div_update(divs[j+1],div_sizes[j+1],'red')

      if(j==(i-1))
            // if this is the selected element then is color should be yellow
            {
                div_update(divs[j+1],div_sizes[j+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[j+1],div_sizes[j+1],"green");//Color update
            }

      j--;
    }
    // Putting Element At Its Appropriate Place
    div_sizes[j+1]=key;

    div_update(divs[j+1],div_sizes[j+1],'green'); // goto Note after this line (10-12 line after this line) both these lines are linked to each other

    // either do this or above step

    // change color of all the sorted elements
    // for(var t=j-1;t<=i;t++){
    //   div_update(divs[t],div_sizes[t],'green');
    // }
  }
  // Note:
  div_update(divs[array_size-1],div_sizes[array_size-1],'green')
}



// ------------------------SELECTION SORT----------------------
function selection_sort(){

  for(var i=0;i<array_size;i++){

    var min_indx=i;

    for(var j=i+1;j<array_size;j++){

      // If current element is smaller than previous
      if(div_sizes[min_indx]>div_sizes[j]){
        // change color of the last minimum element because now it is not the minimum
        div_update(divs[min_indx],div_sizes[min_indx],'blue');
        // index of new min element
        min_indx=j;
        // change color of new min element
        div_update(divs[min_indx],div_sizes[min_indx],'yellow');
      }
    }
    
    swap(i,min_indx);

    //change color swapped element i.e. ith index element
    div_update(divs[min_indx],div_sizes[min_indx],'blue');

    // current sorted element
    div_update(divs[i],div_sizes[i],'green')
  }
  
}


// ---------------------------------HEAP SORT-------------------------------------------

// ------------------HELPER FUNCTION TO CALL HEAP SORT----------------
function Heap_call(){
  Heap_Sort();

}

function Heap_Sort(){
  
  for(var i=Math.floor(array_size/2)-1;i>=0;i--){
    Heapify(array_size,i);
}

// Sorting The Array
for(var i=array_size-1;i>=0;i--){
  swap(0,i);

  div_update(divs[i],div_sizes[i],'yellow');
 
  Heapify(i,0);

  div_update(divs[i],div_sizes[i],'green');


}
}

function Heapify(size,index){

  var largest_index=index;
  var left=2*largest_index+1;
  var right=2*largest_index+2;

  if(left<size && div_sizes[largest_index]<div_sizes[left]){
    largest_index=left;
  }

  if(right<size && div_sizes[largest_index]<div_sizes[right]){
    largest_index=right;
  }

  if(largest_index!=index){

    swap(index,largest_index);

    Heapify(size,largest_index);
  }

}


// --------------------BINARY SEARCH-------------------------

function Binary_Search(){

  // in Binary Search Array Must Be Sorted That's why array is sorted first
  
  // get the element to be searched
  key=get_key();
  if(key==''){
    modal.style.display = "block";
    return;
  }
  Merge_call();
  
  var start=0,end=array_size-1;
  while(start<end){
    var x=start,y=end,i=start,j=end;
    // Color The Area To Be Searched With Orange color
    while(x<=y){
      div_update(divs[x],div_sizes[x],'orange');
      div_update(divs[y],div_sizes[y],'orange');
      x++;
      y--;
    }
    var mid=Math.floor((start+end)/2);
    if(div_sizes[mid]==key){
      
      // Found Element
      div_update(divs[mid],div_sizes[mid],'orange');
      
      // recolor all the elements
      while(i<mid){
        div_update(divs[i],div_sizes[i],'green');
        i++;
      }
      while(j>mid){
        div_update(divs[j],div_sizes[j],'green');
        j--;
      }
      // found element
      console.log('KEY PRESENT');
      break ;
    }

    else if(div_sizes[mid]>key){
      end=mid-1;
      
    }
    else{
      start=mid+1;
    }
    // recoloring the searched area
    while(i<=j){
      div_update(divs[i],div_sizes[i],'green');
      div_update(divs[j],div_sizes[j],'green');
      i++;
      j--;
    }
    
  }

}


// -----------------------------LINEAR SEARCH---------------------------

function Linear_Search(){
  // get the element to be searched
  key=get_key();
  if(key==''){
    modal.style.display = "block";
    return;
  }
  for(var i=0;i<array_size;i++){

    // current element
    div_update(divs[i],div_sizes[i],'red');
    if(div_sizes[i]==key){
      // color of found element
      div_update(divs[i],div_sizes[i],'orange');
      console.log('KEY PRESENT');
      // break;
    }
    else{
      
    // recolor the element which is not matched with key
    div_update(divs[i],div_sizes[i],'blue');
    }
  }
}


// Initial Call To Generate New Array Elements
Generate_Array();
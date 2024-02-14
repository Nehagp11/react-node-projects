

let max_color = 16777215;
function addColors(parent){
  parent.querySelectorAll('p, div, li').forEach(element => {
    addColorsV2(element);
  });
}

function addColorsV2(parent){
  var output = ''
  var textContent = parent.innerText.trim().split(' ');
  textContent.forEach((ele) => {
    let element = '<span style="background-color :#'+ Math.floor(max_color * Math.random()).toString(16) +'">'+ ele +' </span>';
    output += element;
  });
  parent.innerHTML = output;
}


function addOne(list) {
    let credit = 0;
    let last_node = list, node = list, prev = null;

      while(node != null && node.next != null) {
          prev = node;
          node = node.next;
      }
    last_node = node;
    list = addOneRecusively(prev, last_node);
}

function addOneRecusive(list){
    if(list.next){
        addOneRecusive(list.next);
    }
    list.data += credit;
    if(list.data == 10){
        list.digit = 0;
        credit = 1;
    } else {
        credit = 0;
    }

    if(list == head && credit == 1){
        let new_list = {digit : 1};
        new_list.next = list;
        return new_list;
    }
    return list;
}

var arr = ["ten","net","eat","ate","tea"];
//output = 1;

function countAnagrams(arr){
    var count = 0, n =  arr.length;
    let anagramFound = Array.from({length : n}, (val, index)=> false);
    for(var i = 0; i < arr.length && !anagramFound[i]; i++){
        let str1 = arr[i];
        var CurrentAnagramFound = false;
        for(let j = i+1; j < arr.length; j++){
            let str2 = arr[j];
            if(checktwoStringAreAnagram(str1, str2)){
                anagramFound[i] = true;
                anagramFound[j] = true;
                CurrentAnagramFound = true;
            }
        }   
        if(CurrentAnagramFound){
            count++;   
        } 
    }
    return count;
}

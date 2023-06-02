function loadSearchFilter() {
    filterSelection("all")
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("content");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



window.onscroll = function() {showToTopBtn()};

function showToTopBtn() {
  var height = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (height <= 350) {
    document.getElementById("toTopBtn").style.opacity = 0;
  } else {
    document.getElementById("toTopBtn").style.opacity = 100;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function loadData(){
	let template = document.getElementById('template');
	dataset.forEach(function(item){
	// create a new element with the contents of the template
	let div = document.createElement('div');
	div.className = 'item';
	div.innerHTML = template.innerHTML.replace('{{title}}', item.title);
	
	document.getElementById('items').appendChild(div);
	});
}

let dataset = [
  {
      title: 'Article 1',
      id: 1
  },
  {
      title: 'Article 1',
      id: 1
  },
  {
      title: 'Article 1',
      id: 1
  },
  {
      title: 'Article 1',
      id: 1
  }
  ];


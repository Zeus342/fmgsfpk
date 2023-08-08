
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

document.addEventListener('DOMContentLoaded', function () {
  const columns = document.querySelectorAll('.column');
  const loadMoreButton = document.getElementById('load-more-button');
  const itemsPerColumn = 1; // Number of items per column to load per click
  let currentItems = itemsPerColumn;

  // Function to load more items
  function loadMoreItems() {
    columns.forEach(column => {
      const items = column.querySelectorAll('.item');
      for (let i = currentItems; i < currentItems + itemsPerColumn && i < items.length; i++) {
        items[i].style.display = 'block';
      }
    });

    currentItems += itemsPerColumn;

    // Check if there are more items to load
    let allItemsLoaded = true;
    columns.forEach(column => {
      const items = column.querySelectorAll('.item');
      if (currentItems < items.length) {
        allItemsLoaded = false;
      }
    });

    if (allItemsLoaded) {
      loadMoreButton.style.display = 'none';
    }
  }

  // Hide all items except the first in each column
  columns.forEach(column => {
    const items = column.querySelectorAll('.item');
    for (let i = 1; i < items.length; i++) {
      items[i].style.display = 'none';
    }
  });

  // Attach event listener to the load more button
  loadMoreButton.addEventListener('click', loadMoreItems);
});

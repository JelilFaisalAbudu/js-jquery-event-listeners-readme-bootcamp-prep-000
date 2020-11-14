//define functions here

$(document).ready(function(){

// call functions here
  $('p').on('click', getIt);
  
  $('img').on('load', frameIt);
  
<<<<<<< HEAD
  $('#typing').on('keydown', pressIt);
=======
  $('input:first').on('keydown', pressIt);
>>>>>>> f8e83f1a8cf9307f62f6646ada174cccfc3608c0
  
  $('form').on('submit', submitIt);
});


function getIt() {
  alert('Hey!');
  
}

function frameIt() {
  $('img').addClass('tasty');
}


function submitIt() {
  alert('Your form is going to be submitted now.');
}

function pressIt() {
<<<<<<< HEAD
  $("#typing").on('keydown', function(key) {
    if (key.which === 71) {
      alert('G was pressed');
    }
  });
  
  }
=======
  let $val = $("input").val();
  if ($val.toLowerCase() === 'g') {
    alert('G was pressed.');
  }
}
>>>>>>> f8e83f1a8cf9307f62f6646ada174cccfc3608c0

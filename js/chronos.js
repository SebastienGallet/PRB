document.querySelector('#chronos').innerHTML = "<img src='./images/Chrono.png' alt='GT3'>"

$("#demo-category").change(function() {
    var selectedValue = $(this).val();
    switch (selectedValue) {
      case "GT3":
        $("#chronos").html("<img src='./images/Chrono.png' alt='GT3'>");
        break;
      case "GT4":
        $("#chronos").html("<img src='./images/Chrono - Copie.png' alt='GT4'>");
        break;
      case "Porsche Cup":
        $("#chronos").html("<img src='./images/porsche-cup.jpg' alt='Porsche Cup'>");
        break;
    }
  });
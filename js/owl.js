$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    autoplay:true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items:2,
        nav: false,
        loop: true
        
      },
      600: {
        items:3,
        nav: false,
        loop: true
      },
      1000: {
        items:5,
        nav:false,
        loop: true
      }
    }
  })

  
  

  
});


//menu_2 btn
document.getElementById("btn").addEventListener("click", function () {

  swal("請輸入要購買的張數 : ", {
    content: "input",
    buttons: {
      OK: true,

    },
  })

    .then((value) => {
      switch (value) {
        case "OK":
          swal("購買成功!", "感謝您的消費！", "success");
          break;
      }

    });

});




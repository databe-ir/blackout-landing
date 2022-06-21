$(document).ready(function () {
  $("#btn_click").on("click", function () {
    $(".btn-h1 span").addClass("btn_ghost").delay(1000).queue(function () {
      $(".btn-line").addClass("btn_gone");
      $(".btn-author").addClass("btn_gone");
      $(".btn-copy").addClass("btn_gone");
      $(".btn-button").addClass("btn_gone").delay(500).queue(function () {
        $(".btn-info").addClass("btn_white");
        $(".btn").addClass("btn_shrink").delay(1000).queue(function () {
          $(".scene-button").css("display", "none");
          $(".scene-spinner").css("display", "flex").delay(4500).queue(function () {
            $(".scene-spinner").css("display", "none");
            $(".scene-torus").css("display", "flex").delay(9000).queue(function () {
              $(".scene-torus").css("display", "none");
              $(".scene-hole").css("display", "flex").delay(6500).queue(function () {
                $(".scene-hole").css("display", "none");
                $(".scene-polygon").css("display", "flex").delay(5000).queue(function () {
                  $(".scene-polygon").css("display", "none");
                  alert("ممنون از شما که همراه ما هستید");
                  location.reload();
                })
              })
            })
          })
        });
      });
    });
  });
});
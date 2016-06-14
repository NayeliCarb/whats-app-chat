
$(document).ready(function(){
      $('#send').click(function(){
        var message = $('textarea').val();
        var old =$('#content').html();
        
        $('#content').html(old + '<p style="padding-top: 0.7%;">' + message + '</p>');
        $('#mens').val('').empty();
      });
    });




$(document).ready(function(){
      $('#conversacionUno').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/logocodeacademy.png");
                  $("#nomChat").text('Laboratoria');
                  $("#ultimaVez").text('Ana María, Aldo, Gian Mariana, Papu, Tú');
      });
});


$(document).ready(function(){
      $('#conversacionDos').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/raymi.jpg");
                  $("#nomChat").text('Raymi Saldomando');
                  $("#ultimaVez").text('Últ. vez hoy a las 3:30');
      });
});

$(document).ready(function(){
      $('#conversacionTres').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/mariana.jpg");
                  $("#nomChat").text('Mariana Costa');
                  $("#ultimaVez").text('Últ. vez ayer a las 23:22');
      });
});

$(document).ready(function(){
      $('#conversacionCuatro').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/anamaria.jpg");
                  $("#nomChat").text('Ana Maria Martinez Franklin');
                  $("#ultimaVez").text('Últ. vez hoy a las 10:10');
      });
});

$(document).ready(function(){
      $('#conversacionCinco').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/rodulfo.jpg");
                  $("#nomChat").text('Rodulfo prieto');
                  $("#ultimaVez").text('Últ. vez hoy a las 2:07');
      });
});

$(document).ready(function(){
      $('#conversacionSeis').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/andrea.jpg");
                  $("#nomChat").text('Andrea Lamas');
                  $("#ultimaVez").text('Últ. vez hoy a las 6:32');
      });
});

$(document).ready(function(){
      $('#conversacionSiete').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/mariapaula.jpg");
                  $("#nomChat").text('Maria Paula Rivarola');
                  $("#ultimaVez").text('Últ. vez ayer a las 3:30');
      });
});

$(document).ready(function(){
      $('#conversacionOcho').click(function(){
                  $('#content').val('').empty();//#content donde van los mensajes
                  $("#imgconv").attr("src","image/katy.jpg");// cambia imagen de perfil del chat
                  $("#nomChat").text('Katy Sanchez');// cambia el nombre del chat
                  $("#ultimaVez").text('En línea');
      });
});

$(document).ready(function(){
      $('#conversacionNueve').click(function(){
                  $('#content').val('').empty();
                  $("#imgconv").attr("src","image/aldo.jpg");
                  $("#nomChat").text('Aldo Alfaro');
                  $("#ultimaVez").text('Últ. vez ayer a las 20:04');
      });
});



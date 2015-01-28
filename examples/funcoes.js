var ArrayLegendas = [Video1, 
					Video1_2, 
					Video2, 
					Video3, 
					Video4, 
					Video5, 
					Video6, 
					Video7, 
					Video8, 
					Video9, 
					Video10, 
					Video11, 
					Video12];

var ArrayVideos = ["Animacao_1-1",
					"Animacao_1-2",
					"Animacao_2",
					"Animacao_3",
					"Animacao_4",
					"Animacao_5",
					"Animacao_6",
					"Animacao_7",
					"Animacao_8",
					"Animacao_9",
					"Animacao_10",
					"Animacao_11",
					"Animacao_12"]

var videoState = 1;

var finalizado = false;

var objVideo = document.getElementById('Video_src');


var startGame = {
	init: function(){
		// SE INICIA O JAVASCRIPT AQUI.
		
		objVideo = document.getElementById('Video_src');

		

		$('.container').css('background','rgb(255,255,255)');
		$('.container').css('backgroundImage','url("img/escola_normal_pb2.png")');
		$('.container').css('background-position','8px 75px'); 
		$('.container').css('background-repeat','no-repeat');
		$('.container').css('background-size','98% 88%');

		

		$('.bt_Entrar').click(function(){
			videoState++;
			

			$('#blackScene').css("display","block");
			
			$('#blackScene').animate({opacity: 1}, 300);
			window.setTimeout(function(){
				$('.Primeiro_Dia_Aula').hide();
				
				verificaVideo(videoState);
				
			},1000);
		});
		
		$('.bt_Avancar').click(function(){
			videoState++;

			$('#blackScene').css("display","block");

			$('#blackScene').animate({opacity: 1}, 300);

			window.setTimeout(function(){
				
				verificaVideo(videoState);
			},1000);
		});

		$('.bt_Voltar').click(function(){
			videoState--;
			

			$('#blackScene').css("display","block");

			$('#blackScene').animate({opacity: 1}, 300);
			window.setTimeout(function(){

				verificaVideo(videoState);
			},1000);
		});


		$('.bt_VoltarPara').click(function(){
			$('#Video_src').hide();
			$('.ComodoRepeat').css('display','block');
			$('.bt_VoltarPara').hide();
			$('.bt_Recomecar').hide();
		});


		$('.bt_Recomecar').click(function(){
			$('#Video_src').css('opacity','1');
			$('.bt_VoltarPara').hide();
			$('.bt_Recomecar').hide();
			$('.bt_Avancar').hide();
			$('.bt_Voltar').hide();

			
			$('.Primeiro_Dia_Aula').show();
			$('#Video_src').show();
			finalizado = false;
			videoState = 1;
			verificaVideo(1);
		});



		$('#Video_src').on('ended',function(){
				
				KillLegenda();

				if(!finalizado)
				{
					
					if(videoState == 1)
					{
						$('.bt_Entrar').show();
						$('.bt_VoltarPara').hide();
						$('.bt_Recomecar').hide();
					} else if(videoState == 2 || videoState == 3)
					{
						$('.bt_Avancar').show();
						$('.bt_Voltar').hide();
						$('.bt_VoltarPara').hide();
						$('.bt_Recomecar').hide();

					} else if(videoState == ArrayVideos.length)
					{
						$('.bt_Avancar').hide();
						$('.bt_Voltar').hide();
						$('.bt_VoltarPara').show();
						$('.bt_Recomecar').show();
						$('#Video_src').animate({opacity: 0}, 1500);
						finalizado = true;

					} else {
						
						$('.bt_Avancar').show();
						$('.bt_Voltar').show();
						$('.bt_VoltarPara').hide();
						$('.bt_Recomecar').hide();
					}
				
				} else {

					$('.bt_Avancar').hide();
					$('.bt_Entrar').hide();
					$('.bt_Recomecar').show();
					$('.bt_Voltar').hide();
					$('.bt_VoltarPara').show();

				}



				$('.bt_legenda').hide();


			});

	}
}

function beforeVerifica(Numero)
{
	$('#Video_src').show();
	$('#Video_src').css('opacity','1');
	videoState = Numero;
	verificaVideo(Numero);
	$('.ComodoRepeat').css('display','none');
}


function verificaVideo(Numero)
{
		
		$('.bt_legenda').show();
		$('.bt_Avancar').hide();
		$('.bt_Voltar').hide();
		$('.bt_Entrar').hide();

		$('#blackScene').animate({opacity: 0}, 1000);
		window.setTimeout(function(){$('#blackScene').css("display","none");},1000);
	
		$(objVideo).find('source').attr('src','media/video/'+ArrayVideos[(videoState-1)]+'.mp4')
		objVideo.load();
		objVideo.play();

		initVideoLegenda('Video_src', 'Legenda', ArrayLegendas[Numero-1]);
	
}
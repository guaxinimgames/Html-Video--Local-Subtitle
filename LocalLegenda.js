//Guaxinim Games
//
// Twitter : @Falme73h
// 
//  Website : www.guaxinimgames.com

var videoAtual;
var ativo = true;
var LegendaObj;
var Intervalo;

function initVideoLegenda(ID, LegendaId, LegendaJS)
{

  videoAtual = document.getElementById(ID);

  LegendaObj= document.getElementById(LegendaId);

  Intervalo = window.setInterval(function(){

    if(!videoAtual.paused && ativo)
    {
      startLegenda(LegendaId, LegendaJS);
    }

  }, 100);

}


function startLegenda(LegendaId, LegendaJS)
{
  var encontrado = false;


  for(var a=0; a< LegendaJS.legenda.length; a++)
  {
    if(parseFloat(LegendaJS.legenda[a].inicio) <= videoAtual.currentTime && 
      parseFloat(LegendaJS.legenda[a].fim) >= videoAtual.currentTime)
    {
      document.getElementById(LegendaId).innerHTML = LegendaJS.legenda[a].texto;
      encontrado = true;
    }
  }
  if(!encontrado)
  {
    document.getElementById(LegendaId).innerHTML = "";
  }
}

function toogleAtivo()
{
  if(ativo){ativo = false; LegendaObj.innerHTML = "";}
  else {ativo = true;}
}

function KillLegenda()
{
  videoAtual = null;
  LegendaObj.innerHTML = "";
  LegendaObj = null;
  clearInterval(Intervalo);
}
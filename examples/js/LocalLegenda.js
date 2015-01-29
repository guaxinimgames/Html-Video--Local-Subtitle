//Guaxinim Games
//
// Twitter : @Falme73h
// 
//  Website : www.guaxinimgames.com

var videoAtual;
var ativo = true;
var LegendaObj;
var Intervalo;

/**
 * Initial Function to Subtitle a Video
 * @param  {String} ID        Video ID 
 * @param  {String} LegendaId Subtitle Div ID
 * @param  {Variable} LegendaJS Variable in legendas.js to call subtitles values
 */
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

/**
 * Local function to init Subtitles
 * @param  {String} LegendaId ID Subtitle Div
 * @param  {variable} LegendaJS Subtitle variable to return text value
 */
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

/**
 * Activate/Desactivate Subtitles
 */
function toogleAtivo()
{
  if(ativo){ativo = false; LegendaObj.innerHTML = "";}
  else {ativo = true;}
}

/**
 * Close Subtitles, do this when is not necessary to save Memory 
 */
function KillLegenda()
{
  videoAtual = null;
  LegendaObj.innerHTML = "";
  LegendaObj = null;
  clearInterval(Intervalo);
}
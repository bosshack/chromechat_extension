var websocket;
$(document).ready(init);

function init() {
  if(!("WebSocket" in window)){
    $('#status').append('<p><span style="color: red;">websockets are not supported </span></p>');
    $("#navigation").hide();
  } else {
    $('#status').append('<p><span style="color: green;">websockets are supported </span></p>');
    connect();
  };
  $("#connected").hide();
  $("#content").hide();
  $('#send').on('click', sendTxt);
  $('#clear').on('click', clearScreen);
  $('#toggleConnection').on('click', toggleConnection);
};

function connect() {
  wsHost = $("#server").val()
    websocket = new WebSocket(wsHost);
  showScreen('<b>Connecting to: ' +  wsHost + '</b>');
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
};

function disconnect() {
  websocket.close();
};

function toggleConnection() {
  if(websocket.readyState == websocket.OPEN){
    disconnect();
  } else {
    connect();
  };
};

function sendTxt() {
  if(websocket.readyState == websocket.OPEN){
    txt = $("#send_txt").val();
    websocket.send(txt);
    showScreen('sending: ' + txt);
  } else {
    showScreen('websocket is not connected');
  };
};

function onOpen(evt) {
  showScreen('<span style="color: green;">CONNECTED </span>');
  $("#connected").fadeIn('slow');
  $("#content").fadeIn('slow');
};

function onClose(evt) {
  showScreen('<span style="color: red;">DISCONNECTED </span>');
};

function onMessage(evt) {
  showScreen('<span style="color: blue;">RESPONSE: ' + evt.data+ '</span>');
};

function showScreen(txt) {
  $('#output').prepend('<p>' + txt + '</p>');
};

function clearScreen() {
  $('#output').html("");
};

function myFunction() {
    txt = document.getElementById('1');
    txt.style.fontSize = '24pt';
  }

  function moo(){
    txt = document.getElementById('1');
    var str = txt.value;
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById('1').value = str;
  }

function fancy(){
    alert("radio button changed");
    txt = document.getElementById('1');
    txt.style.color = 'blue';
    txt.style.fontWeight = 'bold';
    txt.style.textDecoration = 'underline';
}

function boring(){
    alert("radio button changed");
    txt = document.getElementById('1');
    txt.style.color = 'black';
    txt.style.fontWeight = '';
    txt.style.textDecoration = '';
}

var f=document.getElementById('leadForm');
if(f){f.addEventListener('submit',function(e){e.preventDefault();f.style.display='none';document.getElementById('okMsg').style.display='block';});}
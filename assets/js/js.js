		function htmldecode(codigo){
			codigo = codigo.replaceAll(/&lt;/gi, '<');
			codigo = codigo.replaceAll(/&gt;/gi, '>');
			codigo = codigo.replaceAll(/&quot;/gi, '"');
			codigo = codigo.replaceAll(/&amp;/gi, '&');
			return codigo;
		}
		
		function carrega(cat){
		   var url = "https://app.congressobrasileirodefisica.com/scripts/tf/posts.php?cat="+cat;
		   var xmlhttp;
		   // code for IE7+, Firefox, Chrome, Opera, Safari
		   if (window.XMLHttpRequest)
		   {
			  xmlhttp=new XMLHttpRequest();
		   }
		   // code for IE6, IE5
		   else
		   {
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		   }
		   xmlhttp.onreadystatechange=function()
		   {
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			  {
				 var a = JSON.parse(xmlhttp.responseText);
				 //alert(a.texto.length);
				 //document.getElementById("demo").value=a.texto[1];

				var conteudo = ""; 
				for (let i = 0; i < 9; i++) {
				  if(a.cat[i] != undefined){
					conteudo += '<div class="col-12 col-md-12"><div class="card"><div class="card-header"></div><div class="card-body"><h4 class="card-title">'+a.titulo[i]+'</h4><p class="card-text">'+a.texto[i]+' </p></div><div class="card-footer"><a href="#" style="border: none; font-size: 12px;"><i class="fa fa-bookmark"></i> '+a.cat[i]+'</a></div></div></div><div style="clear:both"></div>';
				  }
				} 
				document.getElementById("conteudo").innerHTML="Loading...";
				document.getElementById("conteudo").innerHTML=htmldecode(conteudo);
			
			  }
		   }
		   xmlhttp.open("GET",url,true);
		   xmlhttp.send();
		}
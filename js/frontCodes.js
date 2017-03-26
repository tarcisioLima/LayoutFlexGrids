function mapa(){
  var mapa;
  var marcador;
   
mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: new google.maps.LatLng(-23.962574, -46.336588),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'mapa']
    }
  });

marcador = new google.maps.Marker({
            position: new google.maps.LatLng(-23.962574, -46.336588),
            title: 'Endereco',
            map: mapa,                
            animation: google.maps.Animation.DROP,
            icon: "img/marker.png"
        });   


var estilos = [
	{
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100}
      ]
	}
];
	
 	var mapType = new google.maps.StyledMapType(estilos, { name:"Grayscale" });    
	mapa.mapTypes.set('mapa', mapType);
	mapa.setMapTypeId('mapa');
}

function carrossel(){
  /* Simulação de um objeto response json */
   var obj = [{
        id: 0,
        tratamento: "Implante",
        sources: "img/implante.jpg",
        descricao: "Silvio Santos Ipsum estamos em ritmo de festamm. Vem pra lá, mah você vai pra cá. Agora vai, agora vem pra láamm. Mah você não consegue né Moisés? Você não consegueam. É dinheiro ou não éam? O prêmio é em barras de ouro, que vale mais que dinheiroam. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? Ma vai pra lá. Valendo um milhão de reaisammm. O arriscam tuduam, valendo um milhão de reaisuam. Ma vale dérreaisam? Ma quem quer dinheiroam?"        
   },{
        id: 1,
        tratamento: "Ortodontia",
        sources: "img/ortodontia.jpg",
        descricao: "Silvio Santos Ipsum mah ooooee vem pra cá. Vem pra cá. Mah roda a roduamm. Wellintaaammmmmmmmm. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae. Ma não existem mulher feiam, existem mulher que não conhece os produtos Jequitiamm. Ma vale dérreaisam? O Raul Gil é gayam! ... Maa O Ah Ae! Ih Ih! O Raul Gil é gayamm! É por sua conta e riscoamm? Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam?"       
   },{
        id: 2,
        tratamento: "Periodontia",
        sources: "img/periodontia.jpg",
        descricao: "Silvio Santos Ipsum vem pra lá, mah você vai pra cá. Agora vai, agora vem pra láamm. É com você Lombardiam. O prêmio é em barras de ouro, que vale mais que dinheiroam. Estamos em ritmo de festamm. Mah roda a roduamm. O arriscam tuduam, valendo um milhão de reaisuam. É por sua conta e riscoamm? Ma vejam só, vejam só. Eu não queria perguntar isso publicamente, ma vou perguntar. Carla, você tem o ensino fundamentauam? Mah você não consegue né Moisés? Você não consegueam. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae."       
   }];

   var leftcontainer =  document.querySelector('.left-container');
   var maincontainer = document.querySelector('.main-img');
   var rightcontainer =  document.querySelector('.right-container');

   var leftc =  document.querySelector('.left-c');
   var midc = document.querySelector('.mid-c');
   var rightc =  document.querySelector('.right-c');

   var titulo = document.querySelector('.mudarTitulo');
   var texto  = document.querySelector('.mudarTexto');

   var a = 0, b = 1, c = 2;
 //    1      2      0
   /* Isso é uma lógica mt feia, desculpe :-D */
   document.getElementById("left-trmt").addEventListener('click', function(){
      if(a == 0){         
          a = 1;
          b = 2;
          c = 0;      
      }else if(b == 0){
          b = 1;
          c = 2;
          a = 0;
        }else{
          c = 1;
          b = 0;
          a = 2;
        }
        leftcontainer.src  =  obj[a]["sources"];  
        leftc.innerHTML =  obj[a]["tratamento"];  
        maincontainer.src  =  obj[b]["sources"];
        midc.innerHTML =  obj[b]["tratamento"];
        rightcontainer.src =  obj[c]["sources"];    
        rightc.innerHTML = obj[c]["tratamento"];

        titulo.innerHTML = obj[b]["tratamento"];
        texto.innerHTML  = obj[b]["descricao"]; 
      });

   document.getElementById("right-trmt").addEventListener('click', function(){

        if(a == 0){         
          a = 2;
          b = 0;
          c = 1;      
      }else if(b == 0){
          a = 1;
          c = 0;
          b = 2;
        }else{
          c = 2;
          b = 1;
          a = 0;
        }
        leftcontainer.src  =  obj[a]["sources"];  
        leftc.innerHTML =  obj[a]["tratamento"];  
        maincontainer.src  =  obj[b]["sources"];
        midc.innerHTML =  obj[b]["tratamento"];
        rightcontainer.src =  obj[c]["sources"];    
        rightc.innerHTML = obj[c]["tratamento"];

        titulo.innerHTML = obj[b]["tratamento"];
        texto.innerHTML  = obj[b]["descricao"];
   });


}

window.onload = function(){
  carrossel();
}

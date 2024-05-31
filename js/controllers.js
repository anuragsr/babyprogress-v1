app.controller('HomeCtrl', function($scope, $state, $http, $translate){    

    var position_top_raccourci2 = $("#navigation").offset().top;
    
    //Au scroll dans la fenetre on d�clenche la fonction
    $(window).scroll(function () {

      //si on a defile de plus de 150px du haut vers le bas
      if ($(this).scrollTop() > position_top_raccourci2) {
      
        //on ajoute la classe "fixNavigation" a <div id="navigation">
        $('#navigation').addClass("fixNavigation"); 
      } else {
      
        //sinon on retire la classe "fixNavigation" a <div id="navigation">
        $('#navigation').removeClass("fixNavigation");
      }
    });

    function openSideMenu(){
        document.getElementById('side-menu').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }

    function closeSideMenu(){
        document.getElementById('side-menu').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
    }

    function render() {
        $('.bg').removeAttr('style').css({
          width: $('body').width(),
          height: $('body').height(),
          marginLeft: -$('.box').offset().left - 11,
          marginTop: -$('.box').offset().top - 11,
          marginBottom: -$('body').height() + $('.box').offset().top + 11,
        });
    }

    function resizeModal(){
       var modal = $('#modal');
       // On récupère la largeur de l'écran et la hauteur de la page afin de cacher la totalité de l'écran
       var winH = $(document).height();
       var winW = $(window).width();
       
       // le fond aura la taille de l'écran
       $('#fond').css({'width':winW,'height':winH});
       
       // On récupère la hauteur et la largeur de l'écran
       var winH = $(window).height();
       // On met la fenêtre modale au centre de l'écran
       modal.css('top', winH/2 - modal.height()/2);
       modal.css('left', winW/2 - modal.width()/2);
    }

    // When the window resizes, or the `.box` moves/resizes, recall the `render` function.
    $(window).resize(function(){
        render();
        // Lorsque l'on modifie la taille du navigateur la taille du fond change
        resizeModal();
    });

    render();    

    $scope.langChange = function(val){
        $translate.use(val);
    }

    $scope.showModal = function(){
       $('#modal').html($("#modalContent").html());
       
       // On definit la taille de la fenetre modale
       resizeModal();
       
       // Effet de transition     
       $('#fond').fadeIn(1000);   
       $('#fond').fadeTo("slow",0.8);
       // Effet de transition   
       $('#modal').fadeIn(2000);
       
       $('.popup .close').click(function (e) {
          // On désactive le comportement du lien
          e.preventDefault();
          // On cache la fenetre modale
          $scope.hideModal();
        });
    }

    $scope.hideModal = function(){
       // On cache le fond et la fenêtre modale
       $('#fond, .popup').hide();
       $('.popup').html('');
    }

    $scope.testMail = function(){
      // console.log("mailtest")
      $http({
          url: "backend/index.php",
          method: "GET",
      }).success(function(data, status, headers, config) {
          console.log(data)
          // if(data.inserted){
          //   alert("Data has been inserted successfully!")
          //   $scope.reset();
          // }else{
          //   alert("Data could not be inserted. Please try again!")            
          // }
      }).error(function(data, status, headers, config) {
      });
    }

})
.controller('PatCtrl', function($scope, $state, $translate, $location, $anchorScroll){
    
    var position_top_raccourci = $(".back_to_top").offset().top;
            
    //Au scroll dans la fenetre on d�clenche la fonction
    $(window).scroll(function () {

        //si on a defile de plus de 150px du haut vers le bas
        if ($(this).scrollTop() > position_top_raccourci) {
        
            //on ajoute la classe "fixNavigation" a <div id="back_to_top">
            $('.back_to_top').addClass("on"); 
        } else {
        
            //sinon on retire la classe "fixNavigation" a <div id="back_to_top">
            $('.back_to_top').removeClass("on");
        }
    });

    var position_top_raccourci2 = $("#navigation").offset().top;
    
    //Au scroll dans la fenetre on d�clenche la fonction
    $(window).scroll(function () {

      //si on a defile de plus de 150px du haut vers le bas
      if ($(this).scrollTop() > position_top_raccourci2) {
      
        //on ajoute la classe "fixNavigation" a <div id="navigation">
        $('#navigation').addClass("fixNavigation"); 
      } else {
      
        //sinon on retire la classe "fixNavigation" a <div id="navigation">
        $('#navigation').removeClass("fixNavigation");
      }
    });

    function openSideMenu(){
        document.getElementById('side-menu').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }
    
    function closeSideMenu(){
        document.getElementById('side-menu').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
    }

    $scope.showModalVideo = function(){
       $('#modalVideo').html($("#modalVideoContent").html());
       
       // On definit la taille de la fenetre modale
       resizeModalVideo();
       
       // Effet de transition     
       $('#fond').fadeIn(1000);   
       $('#fond').fadeTo("slow",0.8);
       // Effet de transition   
       $('#modalVideo').fadeIn(2000);
       
       $('.popup .close').click(function (e) {
          // On désactive le comportement du lien
          e.preventDefault();
          // On cache la fenetre modale
          $scope.hideModalVideo();
        });
    }

    $scope.hideModalVideo = function(){
       // On cache le fond et la fenêtre modale
       $('#fond, .popup').hide();
       $('.popup').html('');
    }

    function resizeModalVideo(){
       var modalVideo = $('#modalVideo');
       // On récupère la largeur de l'écran et la hauteur de la page afin de cacher la totalité de l'écran
       var winH = $(document).height();
       var winW = $(window).width();
       
       // le fond aura la taille de l'écran
       $('#fond').css({'width':winW,'height':winH});
       
       // On récupère la hauteur et la largeur de l'écran
       var winH = $(window).height();
       // On met la fenêtre modale au centre de l'écran
       modalVideo.css('top', winH/2 - modalVideo.height()/2);
       modalVideo.css('left', winW/2 - modalVideo.width()/2);
    }

    $scope.showModal = function(){
       $('#modal').html($("#modalContent").html());
       
       // On definit la taille de la fenetre modale
       resizeModal();
       
       // Effet de transition     
       $('#fond').fadeIn(1000);   
       $('#fond').fadeTo("slow",0.8);
       // Effet de transition   
       $('#modal').fadeIn(2000);
       
       $('.popup .close').click(function (e) {
          // On désactive le comportement du lien
          e.preventDefault();
          // On cache la fenetre modale
          $scope.hideModal();
        });
    }

    $scope.hideModal = function(){
       // On cache le fond et la fenêtre modale
       $('#fond, .popup').hide();
       $('.popup').html('');
    }

    function resizeModal(){
       var modal = $('#modal');
       // On récupère la largeur de l'écran et la hauteur de la page afin de cacher la totalité de l'écran
       var winH = $(document).height();
       var winW = $(window).width();
       
       // le fond aura la taille de l'écran
       $('#fond').css({'width':winW,'height':winH});
       
       // On récupère la hauteur et la largeur de l'écran
       var winH = $(window).height();
       // On met la fenêtre modale au centre de l'écran
       modal.css('top', winH/2 - modal.height()/2);
       modal.css('left', winW/2 - modal.width()/2);
    }

    // Lorsque l'on modifie la taille du navigateur la taille du fond change
    $(window).resize(function () {
        resizeModal();
        resizeModalVideo();
    });

    $scope.scrollToEl = function(el){
        $location.hash(el);
        $anchorScroll(); 
    }

    $scope.langChange = function(val){
        $translate.use(val);
    }

})
.controller('ProCtrl', function($scope, $state, $stateParams, $http, $translate, $location, $anchorScroll){
    
    switch($state.current.name){
        case "prof.default":
            $scope.currTab = 0;
        break;
        case "prof.gyn":
            $scope.currTab = 1;
        break;
        case "prof.rad":
            $scope.currTab = 2;
        break;
        case "prof.sage":
            $scope.currTab = 3;
        break;
        case "prof.gen":
            $scope.currTab = 4;
        break;
        case "prof.autre":
            $scope.currTab = 5;
        break;
    }

    $scope.langChange = function(val){
        $translate.use(val);
    }

    $scope.reset = function(){      
      $scope.autreForm = {
          qual:"",
          qualOpts: [
            { name:"Dr.", value:"docteur" },
            { name:"Prof.", value:"professeur" },
            { name:"M.", value:"monsieur" },
            { name:"Mme.", value:"madame" }
          ],
          nom: "",
          prenom: "",
          etab: "",
          spec: "",
          specOpts: [
            { name:"Radiologue", value:"radiologue" },
            { name:"Gynécologue-obstétricien(ne)", value:"gynecologue-obstetricien" },
            { name:"Sage femme", value:"sage-femme" },
            { name:"Médecin généraliste", value:"medecin-generaliste" },
            { name:"Autre", value:"autre" }
          ],
          pays: "",
          ville: "",
          email: "",
          tel: ""
      }
    }

    $scope.submitAutreForm = function(){
      console.log($scope.autreForm)
      $http({
          url: "backend/insertAutreForm.php",
          method: "POST",
          data: $scope.autreForm,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data, status, headers, config) {
          console.log(data)
          if(data.inserted){
            alert("Data has been inserted successfully!")
            $scope.reset();
          }else{
            alert("Data could not be inserted. Please try again!")            
          }
      }).error(function(data, status, headers, config) {
      });
    }

    $scope.showModal = function(){
      $('#fond').fadeIn(1000);   
      $('html').css({
        overflowY: "hidden"
      })
      $location.hash(null);
      $anchorScroll(); 
    }
    
    $scope.hideModal = function(){
      $('#fond').fadeOut(1000);
      $('html').css({
        overflowY: "scroll"
      })
    }

    $scope.reset();
});
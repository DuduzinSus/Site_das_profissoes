class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menu-mobile",
    ".list",
    ".list li",
    "nav",
  );
  mobileNavbar.init();

  function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");
  
  
    if(pontos.style.display === "none"){
      pontos.style.display = "inline";
      maisTexto.style.display="none";
      btnLeiaMais.innerHTML="Leia Mais";
    }else{
      pontos.style.display = "none";
      maisTexto.style.display = "inline";
      btnLeiaMais.innerHTML="Leia Menos";
    }
  }
  
  function leiaMais2(){
    var pontos2=document.getElementById("pontos2");
    var maisTexto2=document.getElementById("mais2");
    var btnLeiaMais2=document.getElementById("btnLeiaMais2");
  
  
    if(pontos2.style.display === "none"){
      pontos2.style.display = "inline";
      maisTexto2.style.display="none";
      btnLeiaMais2.innerHTML="Leia Mais";
    }else{
      pontos2.style.display = "none";
      maisTexto2.style.display = "inline";
      btnLeiaMais2.innerHTML="Leia Menos";
    }
  }
  
  function leiaMais3(){
    var pontos3=document.getElementById("pontos3");
    var maisTexto3=document.getElementById("mais3");
    var btnLeiaMais3=document.getElementById("btnLeiaMais3");
  
  
    if(pontos3.style.display === "none"){
      pontos3.style.display = "inline";
      maisTexto3.style.display="none";
      btnLeiaMais3.innerHTML="Leia Mais";
    }else{
      pontos3.style.display = "none";
      maisTexto3.style.display = "inline";
      btnLeiaMais3.innerHTML="Leia Menos";
    }
  }
  
  function leiaMais4(){
    var pontos4=document.getElementById("pontos4");
    var maisTexto4=document.getElementById("mais4");
    var btnLeiaMais4=document.getElementById("btnLeiaMais4");
  
  
    if(pontos4.style.display === "none"){
      pontos4.style.display = "inline";
      maisTexto4.style.display="none";
      btnLeiaMais4.innerHTML="Leia Mais";
    }else{
      pontos4.style.display = "none";
      maisTexto4.style.display = "inline";
      btnLeiaMais4.innerHTML="Leia Menos";
    }
  }
  
  function leiaMais5(){
    var pontos5=document.getElementById("pontos5");
    var maisTexto5=document.getElementById("mais5");
    var btnLeiaMais5=document.getElementById("btnLeiaMais5");
  
  
    if(pontos5.style.display === "none"){
      pontos5.style.display = "inline";
      maisTexto5.style.display="none";
      btnLeiaMais5.innerHTML="Leia Mais";
    }else{
      pontos5.style.display = "none";
      maisTexto5.style.display = "inline";
      btnLeiaMais5.innerHTML="Leia Menos";
    }
  }
  
  function leiaMais6(){
    var pontos6=document.getElementById("pontos6");
    var maisTexto6=document.getElementById("mais6");
    var btnLeiaMais6=document.getElementById("btnLeiaMais6");
  
  
    if(pontos6.style.display === "none"){
      pontos6.style.display = "inline";
      maisTexto6.style.display="none";
      btnLeiaMais6.innerHTML="Leia Mais";
    }else{
      pontos6.style.display = "none";
      maisTexto6.style.display = "inline";
      btnLeiaMais6.innerHTML="Leia Menos";
    }
  }
  
  function leiaMais7(){
    var pontos7=document.getElementById("pontos7");
    var maisTexto7=document.getElementById("mais7");
    var btnLeiaMais7=document.getElementById("btnLeiaMais7");
  
  
    if(pontos7.style.display === "none"){
      pontos7.style.display = "inline";
      maisTexto7.style.display="none";
      btnLeiaMais7.innerHTML="Leia Mais";
    }else{
      pontos7.style.display = "none";
      maisTexto7.style.display = "inline";
      btnLeiaMais7.innerHTML="Leia Menos";
    }
  }
$(document).ready(function(){
  $("form").submit(function(){
	   var firstMDP = $('#mdp').val();
	   var secondMDP = $('#mdpConfirm').val();
	   if(firstMDP != secondMDP){
		   alert("Mots de passe non correspondant.");
		   e.DefaultPrevented();
	   }
		
  });
});
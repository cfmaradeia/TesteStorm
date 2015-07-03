// JavaScript Document


$(function() {
	var ArrClipping = [];
	var Atual = 0;
	var qt = 0;
	
	function setClipping(){
		$('#Titulo').html(ArrClipping[Atual].titulo);
		$('#SubTitulo').html(ArrClipping[Atual].subtitulo);
		$('#Imagem').attr('src', ArrClipping[Atual].img);
		$('#Legenda').html(ArrClipping[Atual].legenda);
		$('#Texto').html(ArrClipping[Atual].texto);
	}
	
	$.getJSON("clipping.json", function(json){
		qt = json.clipping.length;
		ArrClipping = json.clipping;				
		setClipping();
				
		for (i=0; i <= qt; i++){
			var classActive = "";
			if(Atual == i){
				classActive = "active";
			}			
			$('#MenuClipping').append('<li><a href="javascript:;" class="linkMenuClippging '+classActive+'" data-id="'+i+'">'+json.clipping[i].titulo+'</a></li>');
			$('#comboClipping').append('<option value="'+i+'">'+json.clipping[i].titulo+'</option>');
		}
		
	});	
	
	$('#MenuClipping').on('click','.linkMenuClippging', function() {
		$('.linkMenuClippging').removeClass('active');
		Atual = $(this).data('id');
		$(this).addClass('active');
		setClipping();		
	});	
	
	$('#comboClipping').on('change', function() {
		Atual = $(this).val();
		setClipping();
	});	
	
	$('.trocaProximo').click(function() {
		if((Atual+1) < qt){
			Atual++;
			setClipping();
		}		
	});
	
	$('.trocaAnterior').click(function() {
		if((Atual-1) >= 0){
			Atual--;
			setClipping();
		}		
	});
	
});



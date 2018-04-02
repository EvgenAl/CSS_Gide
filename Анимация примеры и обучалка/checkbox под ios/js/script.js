$(function(){

$('.checkbox-2').click(function(){
if($('.checkbox').prop('checked')){
$('.checkbox + span').prepend('<p>нет</p>');
}
else{
	$('.checkbox + span').prepend('<p>да</p>');
}
});


});
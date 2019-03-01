function cari_movie(){
	$('#movie-list').html('');
	$.ajax({
		url:'http://omdbapi.com',
		type: 'get',
		dataType: 'json',
		data: {
			'apikey' : '7d4037ab',
			's'	: $('#search-input').val()
		},
		success: function(hasil){
			//console.log(hasil);
			if(hasil.Response=="True"){
				let movies = hasil.Search;
				//console.log(movies);
				$.each(movies, function(i, data){
					$('#movie-list').append(`
						<div class="col-xl-2">
							<div class="card mb-3">
							  <img src="` + data.Poster + `" class="card-img-top" alt="...">
							  <div class="card-body">
							    <h5 class="card-title">`+ data.Title+`</h5>
							    <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
<a href="javascript:void(0)" class="card-link lihat-detail" id="#detailFilm" data-toggle="modal" data-target="#exampleModalLong" data-id="`+ data.imdbID+ `">see detail</a>
							  </div>
							</div>
						</div>
						`);

				});
				//ini ketika diklik hilangkan history pencarian
				$('#search-input').val('');

			}else{
				// $('#movie-list').html('<h1 class="text-center"> Movie tidak ditemukan!</h1>');
				$('#movie-list').html(`
					<div class="col">
					<h1 class="text-center">` + hasil.Error + `</h1>
					</div>
					`);
					
			}
		}
	});
}

$('#search-button').on('click',function(){
	cari_movie();
});

//e hanya parameter jadi bebas
//13 =>kode enter=>keycode.info
$('#search-input').on('keyup',function(e){
	if(e.keyCode==13){
		cari_movie();
	}
});
$('#movie-list').on('click','.lihat-detail', function (){
	console.log($(this).data('id'));
	$.ajax({
		url: 'http://omdbapi.com',
		dataType: 'json',
		type: 'get',
		data: {
			'apikey': '7d4037ab',
			'i': $(this).data('id')
		},

		success: function(movie){
			
			if(movie.Response === "True"){
				$('.modal-body').html(`
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-4">
								<img src="`+ movie.Poster+`" class="img-fluid">
								<hr>
								<h3>`+ movie.Title +`</h3>
							</div>
							<div class="col-md-8">
								<ul class="list-group list-group-flush"><li class="list-group-item">`+ movie.Plot +`</li><li class="list-group-item">`+ movie.Genre +`</li><li class="list-group-item">`+ movie.Year +`</li><li class="list-group-item">`+ movie.Actors +`</li></ul>
							</div>
						</div>
					</div>
					`);
			}
		}
	});
});
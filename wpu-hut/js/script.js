function tampilkansemua(){
		$.getJSON('data/pizza.json',function(data){

		//console.log(data);

		//ini buat variable baru(data jadi menu)
		let menu =data.menu;
		//console.log(menu);

		//ini perulangan
		$.each(menu,function(i,data){
			//console.log(data);
			$('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top" ><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp.'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
		});
	});

}

tampilkansemua();


//#####################################
$('.nav-link').on('click',function(){
	// ini mematikan activ link di navbar ketika salahsatu diklik
	$('.nav-link').removeClass('active');
	//ini menambah activ link dinavbar yg diklik($(this)=>khusu diklik)
	$(this).addClass('active');


	//bikin variable untuk nama kategori yg diklik
	//$(this).html()=>yg diklik aambil html nya, liat consolelogkategori
	let kategori=$(this).html();
	//console.log(kategori);
	//ini menreplace h1 jadi yg diklik tadi(kategori)
	$('h1').html(kategori);

	if(kategori=='All Menu'){
		tampilkansemua();
		return;
	}

	//ambil json lagi
	$.getJSON('data/pizza.json',function(data){
		let menu= data.menu;
		//content sengaja dibikin kosong
		let content = '';
		//perulangan json
		$.each(menu, function(i,data){
			//kondisi jika data kategori sama dengan kategori yg di klik
			if(data.kategori==kategori.toLowerCase()){
				content +='<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top" ><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp.'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
			}
		});
		$('#daftar-menu').html(content);

	});
});
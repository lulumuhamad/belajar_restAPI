//object jadi json

// let mahasiswa ={

// 	nama : "lulu muhamad",
// 	NIM	: 14121042,
// 	email : "lulumuhamadulumudin@gmail.com"
// }
// console.log(JSON.stringify(mahasiswa));


//json jadi object(dengan ajax)
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
// 	if(xhr.readyState == 4 && xhr.status== 200){
// 		let mahasiswa= JSON.parse(this.responseText);
// 		console.log(mahasiswa);
// 	}
// }
// xhr.open('GET','percobaan.json',true);
// xhr.send();


//json jadi object (dengan jquery syarat ngambul jquery secara online ditaro di sebelum script(latihan3))
$.getJSON('percobaan.json', function(data){

	console.log(data);
});
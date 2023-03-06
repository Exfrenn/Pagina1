function aceptar() {
	let letrero = document.Formulario01.cuenta.value;
	alert (letrero);
}

function sumar(){
	let n = document.Formulario01.num1.value;
	let m = document.Formulario01.num2.value;
	n = parseInt(n);
	m = parseInt(m);
	let r = n + m;
	document.Formulario01.operacion.value="Suma";
	document.Formulario01.resultado.value=r;
}

function restar(){
	let n = parseInt(document.Formulario01.num1.value);
	let m = parseInt(document.Formulario01.num1.value);
	let r = n-m;
	document.Formulario01.operacion.value="Resta";
	document.Formulario01.resultado.value=r;
}

function multiplicar(){
	let n = document.Formulario01.num1.value;
	let m = document.Formulario01.num1.value;
	let r = n*m;
	document.Formulario01.operacion.value="multiplicar";
	document.Formulario01.resultado.value=r;
}

function dividir(){
	let n = document.Formulario01.num1.value;
	let m = document.Formulario01.num1.value;
	let r = n/m;
	document.Formulario01.operacion.value="dividir";
	document.Formulario01.resultado.value=r;
}
'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion');

	a.setAttribute('href', a.getAttribute('href')
		.replace('enviar', 'mailto:cont')
		.replace('-', 'acto@')
		.replaceAll('correo', 'odaeditor')
		.replace('/', 'ial.com.ar')
	);
}
);

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion-mobile');

	a.setAttribute('href', a.getAttribute('href')
		.replace('enviar', 'mailto:cont')
		.replace('-', 'acto@')
		.replaceAll('correo', 'odaeditor')
		.replace('/', 'ial.com.ar')
	);
}
);

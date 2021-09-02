function main() {
	let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	let stringCifrada = `Mvohlm Nzmwvoz - É fn rwvzo kziz l jfzo vhkvil erevi v xlmhvtfri ivzorazi. Nzh, hv kivxrhl uli, é fn rwvzo kziz l jfzo vhglf wrhklhgl z nliivi.`;

	stringCifrada = stringCifrada.split('');

	for (let i = 0; i < stringCifrada.length; i++) {
		let pos = -1;
		pos = alfabeto.reverse().indexOf(stringCifrada[i]);
		
		if (pos >= 0) {
			stringCifrada[i] = alfabeto.reverse()[pos];
			continue;
		}

		if (pos === -1) {
			pos = alfabeto.reverse().map((a) => {return a.toUpperCase()}).indexOf(stringCifrada[i]);

			if (pos >= 0) {
				stringCifrada[i] = alfabeto.reverse().map((a) => {return a.toUpperCase()})[pos];
			}
		}
	};

	stringCifrada = stringCifrada.join('');

	console.log(stringCifrada);
}

main();
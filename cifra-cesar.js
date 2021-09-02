function arrayRotate(arr, reverse) {
	if (reverse) arr.unshift(arr.pop());
	else arr.push(arr.shift());
	return arr;
  }

function decrypt(rotation, message) {
	let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	let rotatedArray = [...alfabeto];

	for (let i = 0; i < rotation; i++) {
		arrayRotate(rotatedArray);
	}

	let stringCifrada = message;

	stringCifrada = stringCifrada.split('');

	for (let i = 0; i < stringCifrada.length; i++) {
		let pos = -1;
		pos = rotatedArray.indexOf(stringCifrada[i]);

		if (pos >= 0) {
			stringCifrada[i] = alfabeto[pos];
			continue;
		}

		if (pos === -1) {
			pos = rotatedArray.map((a) => {return a.toUpperCase()}).indexOf(stringCifrada[i]);

			if (pos >= 0) {
				stringCifrada[i] = alfabeto.map((a) => {return a.toUpperCase()})[pos];
			}
		}
	};

	stringCifrada = stringCifrada.join('');

	console.log(stringCifrada);
}

decrypt(13, `N pevcgbtensvn é hz cebprffb qr pbqvsvpnçãb dhr nghn crezvgvaqb b nprffb fbzragr nbf vaqviíqhbf qrivqnzragr nhgbevmnqbf. Rffr cebprffb é ernyvmnqb cbe hz cebtenzn dhr pbairegr pbagrúqbf (grkgbf, vzntraf r iíqrbf) rz hzn yvathntrz qr pnenpgrerf inevnqbf r vyrtíirvf, znfpnenaqb b pbagrúqb bevtvany. Fbzragr dhrz grz n fraun pbafrthr qrpbqvsvpá-yb (qrfpevcgbtensvn)`);
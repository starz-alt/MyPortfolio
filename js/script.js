const arrElement = ['Designer Awam', 'Bukan editor berkelas', 'Penikmat GoodDays'];
let count = 0;
let arrIndex = 0;
let arrCurrent = '';
let words = '';

(function writing(){

	if(count == arrElement.length){
		count = 0;
	}

	arrCurrent = arrElement[count];

	words = arrCurrent.slice(0, ++arrIndex);
	document.querySelector('.effect_writing').textContent = words;

	if(words.length == arrCurrent.length){
		count++;
		arrIndex = 0;
	}

	setTimeout(writing, 300);

})();
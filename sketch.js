let values = [];
let w = 10;
let j = 0;
let i = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	values = new Array(floor(width / w));
	for (let i = 0; i < values.length; i++) {
		values[i] = random(height);
	}
}

function draw() {
	background(0);
	//frameRate(24);
	selectionsort()

	for (let i = 0; i < values.length; i++) {
		noStroke();
		rect(i * w, height - values[i], w, values[i]);
	}
}

async function selectionsort() {

	let n = values.length;

	if (i < values.length) {
		for (let i = 1; i < n - 1; i++) {
			let key = values[i];
			let j = i - 1;
			
			while(j >= 0 && values[j] > key){
				await sleep(500);
				values[j + 1] = values[j];
				j -= 1;
			}
			values[j + 1] = key;
		}
	}
	i++;

}

 async function swap(arr, a, b) {
	await sleep(20);
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

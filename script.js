'use strict';

const SCREEN_WIDTH = 96;
const SCREEN_HEIGHT = 64;

const SCALE = 3;

var canvas = document.getElementById('run');
var context = canvas.getContext('2d');
context.imageSmoothingEnabled = false;
var charMap = new Image();
charMap.onload = render;
charMap.src = 'chara.png';

function render() {
	output(1, 1, "PART 0: THE PROMISE");
}

function output(row, col, str) {
	renderString((row - 1) * 8, (col - 1) * 6, str);
}

function text(row, col, str) {
	renderString(row, col, str);
}

function renderString(row, col, str) {
	for (let i = 0, len = str.length; i < len; i++) {
		renderChar(row, col + (i * 6), str.charCodeAt(i));
	}
}

function renderChar(row, col, ch) {
	let i = (ch - 32);
	let spriteRow = (i & 0xF0) >> 4;
	let spriteCol = i & 0xF;
	
	context.drawImage(charMap,
		// sprite: x, y, h, w
		spriteCol * 6, spriteRow * 8, 5, 7,
		// canvas: x, y, h, w
		col, row, 5, 7);
}

function shortcut(e) {}

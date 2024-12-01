let channel = 'X';
const sizeChannel = channel === 'X' ? 'width' : 'height';
console.log(sizeChannel); // Output: 'width'

channel = 'Y';
const sizeChannel2 = channel === 'X' ? 'width' : 'height';
console.log(sizeChannel2); // Output: 'height'

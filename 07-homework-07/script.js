document.addEventListener('DOMContentLoaded', () => {
  /* **
   * create rectangles dynamically
  ** */
  const colors = generateRandomColors(Math.floor(Math.random() * 91) + 10);
  document.getElementById('rect-count').innerText = colors.length.toString();

  const rectangleWrapper = document.getElementById('rectangle-wrapper');
  for (let i = 0; i < colors.length; i++) {
    const rectContainerElement = rectangleWrapper.appendChild(document.createElement('div'));
    rectContainerElement.classList.add('rectangle-container');

    const rectElement = rectContainerElement.appendChild(document.createElement('div'));
    rectElement.classList.add('rectangle');
    rectElement.id = `rect-${i}`;
    rectElement.style.backgroundColor = colors[i];

    const hexCodeElement = rectContainerElement.appendChild(document.createElement('div'));
    hexCodeElement.classList.add('hex-code');
    hexCodeElement.appendChild(document.createTextNode(colors[i]));
  }

  /* **
   * output ids required for assignment
  ** */
  console.log('Here are the rectangle IDs:');
  for (const rectElement of document.getElementsByClassName('rectangle')) {
    console.log(rectElement.id);
  }
});

function generateRandomColors(count) {
  const colors = [];
  while (count-- > 0) {
    colors.push(getRandomColor());
  }
  return colors;
}

function getRandomColor() {
  const colorCode = Math.floor(Math.random() * 256 * 256 * 256);
  return `#${colorCode.toString(16).toUpperCase().padStart(6, '0')}`;
}

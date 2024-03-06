let placeToInsert = document.querySelector('.paste-here');
let circleTemplate = document.querySelector('#template').content.querySelector('.template__inner');


let func = () => {
  let cloneCircleTemplate = circleTemplate.cloneNode(true);
  return placeToInsert.append(cloneCircleTemplate);
}
Array.from({length: 4}, func)
// placeToInsert.append(cloneCircleTemplate);



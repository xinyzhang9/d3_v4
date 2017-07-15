var quantizescale = d3.scaleQuantize()
  .domain([0,100])
  .range(['red','white','green']);

  console.log(quantizescale(22))
  console.log(quantizescale(50))
  console.log(quantizescale(88))
  console.log(quantizescale(98))

  console.log(quantizescale.invertExtent('white'));

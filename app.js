const canvas = d3.select(".canva");

// var dataArray = [4, 15, 34, 123, 13, 0];

var dataArray = [
  {
    width: 25,
    height: 4,
    fill: "pink",
  },
  {
    width: 25,
    height: 14,
    fill: "purple",
  },
  {
    width: 25,
    height: 44,
    fill: "orange",
  },
  {
    width: 25,
    height: 124,
    fill: "green",
  },
  {
    width: 25,
    height: 12,
    fill: "grey",
  },
  {
    width: 25,
    height: 32,
    fill: "red ",
  },
];

// add an svg element
const svg = canvas.append("svg").attr("width", 600).attr("height", 600);

const rect = svg.selectAll("rect");

rect
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", 24)
  .attr("fill", function (d) {
    return d.fill;
  })
  .attr("height", function (d) {
    return d.height * 2;
  })

  .attr("x", function (d, i) {
    console.log(d);
    return i * 25;
  })
  .attr("y", function (d, i) {
    return 100 - d.height * 2;
  });

console.log(rect);

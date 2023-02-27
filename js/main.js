const F_HEIGHT = 400;
const F_WIDTH = 400;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const VIS_HEIGHT = F_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = F_WIDTH - MARGINS.left - MARGINS.right;


function vis1() {
  // frame for column 1
  const FRAME1 = d3.select("#column1")
            .append("svg")
              .attr("height", F_HEIGHT)
              .attr("width", F_WIDTH)
              .attr("class", "frame");

  // read from scatter-data.csv
  d3.csv("data/iris.csv").then((data) => {

    const X_SCALE = d3.scaleLinear()
              .domain([0, 8])
              .range([0, VIS_WIDTH])

    const Y_SCALE = d3.scaleLinear()
              .domain([0,7])
              .range([VIS_HEIGHT,0])


    // Use X_SCALE to plot our points
    FRAME1.selectAll("points")  
        .data(data) // passed from .then  
        .enter()       
        .append("circle")  
          .attr("cx", (d) => { return (X_SCALE(d.x) + MARGINS.left); }) 
          .attr("cy", (d) => { return (Y_SCALE(d.y) + MARGINS.top); }) 
          .attr("r", 2)
          .attr("class", "point");

    // add x-axis to vis
    FRAME1.append("g")
            .attr("transform", "translate(" + MARGINS.left+ "," + (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE).ticks(8));

    // add y-axis to vis
    FRAME1.append("g")
            .attr("transform", "translate(" + MARGINS.left + "," + (MARGINS.top) + ")")
            .call(d3.axisLeft(Y_SCALE).ticks(14));
  }) 
}

vis1()

function vis2() {
  // frame for column 2
  const FRAME2 = d3.select("#column2")
            .append("svg")
              .attr("height", F_HEIGHT)
              .attr("width", F_WIDTH)
              .attr("class", "frame");

  // read from scatter-data.csv
  d3.csv("data/iris.csv").then((data) => {

    const X_SCALE = d3.scaleLinear()
              .domain([0, 5])
              .range([0, VIS_WIDTH])

    const Y_SCALE = d3.scaleLinear()
              .domain([0,3])
              .range([VIS_HEIGHT,0])

    // add x-axis to vis
    FRAME2.append("g")
            .attr("transform", "translate(" + MARGINS.left+ "," + (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE).ticks(10));

    // add y-axis to vis
    FRAME2.append("g")
            .attr("transform", "translate(" + MARGINS.left + "," + (MARGINS.top) + ")")
            .call(d3.axisLeft(Y_SCALE).ticks(14));
  }) 

}

vis2()

function vis3() {
  // frame for column 3
  const FRAME2 = d3.select("#column3")
            .append("svg")
              .attr("height", F_HEIGHT)
              .attr("width", F_WIDTH)
              .attr("class", "frame");

  // read from scatter-data.csv
  d3.csv("data/iris.csv").then((data) => {

    const X_SCALE = d3.scaleBand()
              .domain(["virginica", "versicolor", "setosa"])
              .range([0, VIS_WIDTH])

    const Y_SCALE = d3.scaleLinear()
              .domain([0,60])
              .range([VIS_HEIGHT,0])

    // add x-axis to vis
    FRAME2.append("g")
            .attr("transform", "translate(" + MARGINS.left+ "," + (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE).ticks(3));

    // add y-axis to vis
    FRAME2.append("g")
            .attr("transform", "translate(" + MARGINS.left + "," + (MARGINS.top) + ")")
            .call(d3.axisLeft(Y_SCALE).ticks(14));
  })
}

vis3()
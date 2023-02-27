const F_HEIGHT = 500;
const F_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const VIS_HEIGHT = F_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = F_WIDTH - MARGINS.left - MARGINS.right;

// Creating color constant
    const COLORS = d3.scaleOrdinal()
        .domain(["setosa", "versicolor", "virginica"])
        .range(["green", "orange", "purple"]);


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


    // add x-axis to vis
    FRAME1.append("g")
            .attr("transform", "translate(" + MARGINS.left+ "," + (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE).ticks(8));

    // add y-axis to vis
    FRAME1.append("g")
            .attr("transform", "translate(" + MARGINS.left + "," + (MARGINS.top) + ")")
            .call(d3.axisLeft(Y_SCALE).ticks(14));


    // Use X_SCALE and Y_SCALE to plot our points
    FRAME1.selectAll("points")  
        .data(data) // passed from .then  
        .enter()       
        .append("circle")  
          .attr("cx", (d) => { return (X_SCALE(d.Sepal_Length) + MARGINS.left); }) 
          .attr("cy", (d) => { return (Y_SCALE(d.Petal_Length) + MARGINS.top); }) 
          .attr("r", 4)
          .attr("class", "point")  
          .attr("id", (d) => { return ("(" + d.Sepal_Length + ", " + d.Petal_Length + ")"); }) 
          .style("fill", function(d) {return COLORS(d.Species); })
          .style("opacity", 0.5);

    // highlight on mouseover
    function handleMouseover(event, d) {
      d3.select(this).style("opacity", ".7")
        .style("stroke-width", "3")
        .style("stroke", "red");
    }

     // unhighlight on mouseleave
    function handleMouseleave(event, d) {
      d3.select(this).style("opacity", ".5")
        .style("stroke-width", "0");
    }


    // add event listeners to the frame
    FRAME1.selectAll("circle")
                      .on("mouseover", handleMouseover)
                      .on("mouseleave", handleMouseleave);

  }) 
}

vis1()

/*--------------------------------------------------------------*/

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

    const COLORS = d3.scaleOrdinal()
        .domain(["setosa", "versicolor", "virginica"])
        .range(["green", "orange", "purple"]);

    // add x-axis to vis
    FRAME2.append("g")
            .attr("transform", "translate(" + MARGINS.left+ "," + (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE).ticks(10));

    // add y-axis to vis
    FRAME2.append("g")
            .attr("transform", "translate(" + MARGINS.left + "," + (MARGINS.top) + ")")
            .call(d3.axisLeft(Y_SCALE).ticks(14));

    // Use X_SCALE to plot our points
    FRAME2.selectAll("points")  
        .data(data) // passed from .then  
        .enter()       
        .append("circle")  
          .attr("cx", (d) => { return (X_SCALE(d.Sepal_Width) + MARGINS.left); }) 
          .attr("cy", (d) => { return (Y_SCALE(d.Petal_Width) + MARGINS.top); }) 
          .attr("r", 4)
          .attr("class", "point")
          .attr("id", (d) => { return ("(" + d.Sepal_Length + ", " + d.Petal_Length + ")"); })
          .style("fill", function(d) {return COLORS(d.Species); })
          .style("opacity", 0.5);

    // highlight on mouseover
    function handleMouseover(event, d) {
      d3.select(this).style("opacity", ".7")
        .style("stroke-width", "3")
        .style("stroke", "red");
    }

     // unhighlight on mouseleave
    function handleMouseleave(event, d) {
      d3.select(this).style("opacity", ".5")
        .style("stroke-width", "0");
    }


    // add event listeners to the frame
    FRAME2.selectAll("circle")
                      .on("mouseover", handleMouseover)
                      .on("mouseleave", handleMouseleave);



  }) 
}

vis2()

/*--------------------------------------------------------------*/

function vis3() {
  // frame for column 3
  const FRAME3 = d3.select("#column3")
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
    FRAME3.append("g")
            .attr("transform", "translate(" + MARGINS.left+ "," + (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE).ticks(3));

    // add y-axis to vis
    FRAME3.append("g")
            .attr("transform", "translate(" + MARGINS.left + "," + (MARGINS.top) + ")")
            .call(d3.axisLeft(Y_SCALE).ticks(14));

    const COUNTER = d3.scaleOrdinal()
        .domain(["setosa", "versicolor", "virginica"])
        .range([50, 50, 50]);


    // plot points in bar graph
    FRAME3.selectAll("bars")  
        .data(data) 
        .enter()       
        .append("rect")  
          .attr("x", (d) => { return (X_SCALE(d.Species) + MARGINS.left + 30); }) 
          .attr("y", (d) => { return (Y_SCALE(COUNTER(d.Species)) + MARGINS.top); }) 
          .attr("width", 50)
          .attr("height", (d) => {return VIS_HEIGHT - Y_SCALE(COUNTER(d.Species))})
          .attr("class", "bar")
          .style("fill", function(d) {return COLORS(d.Species); })
          .style("opacity", 0.5);
  })
}

vis3()
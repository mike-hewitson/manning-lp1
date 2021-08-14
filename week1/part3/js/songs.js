const topRockSongs = [
    { artist: "Fleetwod Mac", title: "Dreams", sales_and_streams: 1882000 },
    { artist: "AJR", title: "Bang!", sales_and_streams: 1627000 },
    { artist: "Imagine Dragons", title: "Believer", sales_and_streams: 1571000 },
    { artist: "Journey", title: "Don't Stop Believin'", sales_and_streams: 1497000 },
    { artist: "Eagles", title: "Hotel California", sales_and_streams: 1393000 }
 ];

 const topSongsSection = d3.select("#top-songs");

 topSongsSection.append("h3").text("Top Rock Songs");

const circlesChartWidth = 500;
const circlesChartHeight = 130;
const circlesChart = topSongsSection
  .append("svg")
  .attr("viewbox", [0, 0, barChartWidth, barChartHeight])
  .attr("width", barChartWidth)
  .attr("height", barChartHeight);

  const marginLeft = 200;
  barChart
    .append("line")
    .attr("x1", marginLeft)
    .attr("y1", 0)
    .attr("x2", marginLeft)
    .attr("y2", barChartHeight)
    .attr("stroke", "#333")
    .attr("stroke-width", 2);

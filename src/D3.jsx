import "./Popup.css";
import * as d3 from 'd3'
import React, { useState, useRef, useEffect } from "react"

function D3() {

    // This shows random dummy data in a chart. But in the furture I would like to show the user  
    // stats of what categories of videos I'm watching on Youtube and display the numbers on the chart
    // it would be cool to switch between the past week, month, and year
    
    const [data] = useState([200, 250, 60, 150, 100, 175])
    const svgRef = useRef();
    
    useEffect(() => {
        // set up svg container which determines the bounds everythin is contained in
        const w = 400;
        const h = 300;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr("height", h)
            .style('overflow', 'visible')
            .style("margin-top", "75px")
        // set up the scaling, converting data for our chart
        const xScale = d3.scaleBand()
            .domain(data.map((val, i) => i))
            .range([0, w])
            .padding(0.5);
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0])

        // set up axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
        const yAxis = d3.axisLeft(yScale)
            .ticks(5)
        svg.append('g')
            .call(xAxis)
            .attr("transform", `translate(0, ${h})`)
        svg.append('g')
            .call(yAxis)

        //set up svg data
            svg.selectAll('.bar')
                .data(data)
                .join('rect')
                    .attr('x', (v, i) => xScale(i))
                    .attr('y', yScale)
                    .attr('width', xScale.bandwidth())
                    .attr('height', val => h - yScale(val))
    }, [data])
    // const MrBeast_Data = [
    //     { region: 'AMERICAS', value: 80 },
    //     { region: 'EUROPE', value: 90 },
    //     { region: 'ASIA', value: 60 },
    //     { region: 'AFRICA', value: 70 },
    // ]
    // const width = 800;
    // const height = 400;
    // const margin = { top: 50, bottom: 50, left: 50, right: 50}


//     const xScale = d3
//         .scaleBand()
//         .domain(MrBeast_Data.map((dataPoint) => dataPoint.region))
//         .rangeRound([0, 250]
//         .padding(0.1))
//     const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

//     const container = d3.select("svg").classed('d3-container', true)

//     const bars = container
//         .selectAll('.d3-bar')
//         .data(MrBeast_Data)
//         .enter()
//         .append('rect')
//         .classed('d3-bar', true)
//         .attr('width', xScale.bandwidth())
//         .attr('height', (data) => 200 - yScale(data.value))
//         .attr('x', data => xScale(data.region))
//         .attr('y', data => yScale(data.value))


    return(
        <div className="D3">
            <div className="css-12hk6no">D3 Chart</div>
            <svg ref={svgRef}></svg>
        </div>
    )
}
export default D3;
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { roadmapData } from '../data/roadmapData';

const RoadmapWidget = () => {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const [selectedDetails, setSelectedDetails] = useState(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    
    const width = wrapperRef.current.clientWidth || 1200;
    const height = wrapperRef.current.clientHeight || 800;
    const margin = { top: 20, right: 120, bottom: 20, left: 80 };

    d3.select(svgRef.current).selectAll("*").remove(); // clear previous
    
    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%");

    // Background rect to catch zoom events
    svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "none")
      .attr("pointer-events", "all");

    const g = svg.append("g");

    const zoom = d3.zoom()
        .scaleExtent([0.1, 3])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });
        
    svg.call(zoom);
    // Initialize zoom transform to center the tree vertically
    svg.call(zoom.transform, d3.zoomIdentity.translate(margin.left, height / 2));

    const dx = 45; // Vertical spacing between nodes
    const dy = 280; // Horizontal spacing between nodes

    const tree = d3.tree().nodeSize([dx, dy]);
    const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

    const root = d3.hierarchy(roadmapData);
    
    root.x0 = 0;
    root.y0 = 0;

    // Initialize with all parent nodes expanded to show first level of children
    root.descendants().forEach((d, i) => {
      d.id = i;
      d._children = d.children;
      // Collapse everything deeper than level 1 initially
      if (d.depth >= 1 && d.children) {
        d.children = null;
      }
    });

    const update = (source) => {
      const nodes = root.descendants().reverse();
      const links = root.links();

      tree(root);

      const transition = svg.transition().duration(500);

      const node = g.selectAll("g.node")
        .data(nodes, d => d.id);

      const nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", d => `translate(${source.y0},${source.x0})`)
          .attr("fill-opacity", 0)
          .attr("stroke-opacity", 0)
          .style("cursor", "pointer")
          .on("click", (event, d) => {
            // Toggle children on click
            if (d.children) {
              d._children = d.children;
              d.children = null;
            } else if (d._children) {
              d.children = d._children;
              d._children = null;
            } 
            
            // Show details if it's a leaf node or any node with details
            if (d.data.details) {
              setSelectedDetails({ name: d.data.name, details: d.data.details });
            }

            update(d);
          });

      // Node circles
      nodeEnter.append("circle")
          .attr("r", 6)
          .attr("fill", d => d._children ? "#3b82f6" : (d.data.details ? "#10b981" : "#9ca3af"))
          .attr("stroke-width", 2)
          .attr("stroke", d => d._children ? "#60a5fa" : (d.data.details ? "#34d399" : "#6b7280"))
          .on("mouseover", function(event, d) {
              d3.select(this).transition().duration(200).attr("r", 9);
          })
          .on("mouseout", function(event, d) {
              d3.select(this).transition().duration(200).attr("r", 6);
          });

      // Node labels
      nodeEnter.append("text")
          .attr("dy", "0.31em")
          .attr("x", d => d._children || d.children ? -12 : 12)
          .attr("text-anchor", d => d._children || d.children ? "end" : "start")
          .text(d => d.data.name)
          .attr("fill", "#f3f4f6")
          .attr("font-size", "14px")
          .attr("font-weight", "500")
          .clone(true).lower()
          .attr("stroke-linejoin", "round")
          .attr("stroke-width", 4)
          .attr("stroke", "#111827"); // Outline for readability against dark bg

      const nodeUpdate = node.merge(nodeEnter).transition(transition)
          .attr("transform", d => `translate(${d.y},${d.x})`)
          .attr("fill-opacity", 1)
          .attr("stroke-opacity", 1);

      nodeUpdate.select("circle")
          .attr("fill", d => d._children ? "#3b82f6" : (d.data.details ? "#10b981" : "#9ca3af"))
          .attr("stroke", d => d._children ? "#60a5fa" : (d.data.details ? "#34d399" : "#6b7280"));

      const nodeExit = node.exit().transition(transition).remove()
          .attr("transform", d => `translate(${source.y},${source.x})`)
          .attr("fill-opacity", 0)
          .attr("stroke-opacity", 0);

      const link = g.selectAll("path.link")
          .data(links, d => d.target.id);

      const linkEnter = link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", d => {
            const o = {x: source.x0, y: source.y0};
            return diagonal({source: o, target: o});
          })
          .attr("fill", "none")
          .attr("stroke", "#374151")
          .attr("stroke-opacity", 0.8)
          .attr("stroke-width", 2);

      link.merge(linkEnter).transition(transition)
          .attr("d", diagonal);

      link.exit().transition(transition).remove()
          .attr("d", d => {
            const o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
          });

      root.eachBefore(d => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    };

    update(root);

  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 text-gray-100 flex flex-col font-sans overflow-hidden">
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-sm">
          Career Mastery Roadmap
        </h1>
        <p className="text-gray-400 mt-2 max-w-md text-sm leading-relaxed">
          Explore the path from beginner to expert. Click the <span className="text-blue-400 font-bold">blue</span> nodes to expand categories, and <span className="text-emerald-400 font-bold">green</span> nodes to view deep insights.
        </p>
      </div>

      <div ref={wrapperRef} className="flex-1 w-full relative">
        <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing"></svg>
      </div>

      {selectedDetails && (
        <div className="absolute bottom-8 right-8 w-96 bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl z-20 transition-all transform duration-300 ease-out">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-emerald-400 leading-tight pr-4">{selectedDetails.name}</h3>
            <button 
              onClick={() => setSelectedDetails(null)}
              className="text-gray-400 hover:text-white transition-colors bg-gray-700 hover:bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-wrap">
            {selectedDetails.details}
          </p>
        </div>
      )}
    </div>
  );
};

export default RoadmapWidget;

import React, { useState, useEffect } from "react";
import promptKits from "./data/Prompt_Kits.json";
import PromptKitCard from "./components/PromptKitCard";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKits, setFilteredKits] = useState(promptKits);

  useEffect(() => {
    const filtered = promptKits.filter((kit) =>
      (kit.title)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredKits(filtered);
  }, [searchTerm]);

  return (
    <div className="app-container">
      <h1>Prompt Kit Explorer</h1>
      <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Total Prompts: {filteredKits.length}
      </p>
      <p style={{ marginBottom: "1rem", fontStyle: "italic" }}>
        In this document, you will learn the pattern I use when prompting,
        designed to help AI clearly understand and effectively execute our
        goals. This guide will support you in crafting clear, strategic prompts
        tailored to specific use cases. Feel free to experiment—remember, ideas
        breathe through other ideas.
      </p>
      <input
        type="text"
        className="search-input"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredKits.map((kit, idx) => (
        <PromptKitCard key={idx} kit={kit} />
      ))}
    </div>
  );
}

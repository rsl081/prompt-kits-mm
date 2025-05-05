import React from "react";
import "./PromptKitCard.css";

export default function PromptKitCard({ kit }) {
  return (
    <div className="prompt-card">
      <h2 className="prompt-title">{kit.title}</h2>

      <div className="prompt-section">
        <span className="label">Prompt:</span>
        <p>{kit.prompt}</p>
      </div>

      <div className="prompt-section">
        <span className="label">Ideal Use Case:</span>
        <p>{kit.idealUseCase}</p>
      </div>

      <div className="prompt-section">
        <span className="label">Output Format:</span>
        {kit.outputFormat.length > 0 ? (
          <ul>
            {kit.outputFormat.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <em>No format provided</em>
        )}
      </div>

      <div className="prompt-section">
        <span className="label">API Settings:</span>
        <pre>{JSON.stringify(kit.settings, null, 2)}</pre>
      </div>
    </div>
  );
}

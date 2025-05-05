import React, { useState } from "react";
import "./PromptKitCard.css";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline"; // or any icon set you like



export default function PromptKitCard({ kit }) {
  // Keep track of which section was just copied (for a fleeting “✓” feedback)
  const [copiedSection, setCopiedSection] = useState(null);

  const copyToClipboard = (text, sectionKey) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedSection(sectionKey);
        setTimeout(() => setCopiedSection(null), 1500);
      })
      .catch(console.error);
  };

  return (
    <div className="prompt-card">
      <h2 className="prompt-title">{kit.title}</h2>

      {/* Prompt */}
      <div className="prompt-section with-copy">
        <span className="label">Prompt:</span>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(kit.prompt, "prompt")}
          aria-label="Copy prompt"
        >
          {copiedSection === "prompt" ? <CheckIcon /> : <ClipboardDocumentIcon />}
        </button>
        <p>{kit.prompt}</p>
      </div>

      {/* Ideal Use Case */}
      <div className="prompt-section with-copy">
        <span className="label">Ideal Use Case:</span>
        <button
          className="copy-btn"
          onClick={() => copyToClipboard(kit.idealUseCase, "useCase")}
          aria-label="Copy use case"
        >
          {copiedSection === "useCase" ? <CheckIcon /> : <ClipboardDocumentIcon />}
        </button>
        <p>{kit.idealUseCase}</p>
      </div>

      {/* Output Format */}
      <div className="prompt-section with-copy">
        <span className="label">Output Format:</span>
        <button
          className="copy-btn"
          onClick={() => {
            const text = kit.outputFormat.length
              ? kit.outputFormat.join("\n")
              : "No format provided";
            copyToClipboard(text, "format");
          }}
          aria-label="Copy output format"
        >
          {copiedSection === "format" ? <CheckIcon /> : <ClipboardDocumentIcon />}
        </button>
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

      {/* API Settings */}
      <div className="prompt-section with-copy">
        <span className="label">API Settings:</span>
        <button
          className="copy-btn"
          onClick={() =>
            copyToClipboard(JSON.stringify(kit.settings, null, 2), "settings")
          }
          aria-label="Copy API settings"
        >
          {copiedSection === "settings" ? <CheckIcon /> : <ClipboardDocumentIcon />}
        </button>
        <pre>{JSON.stringify(kit.settings, null, 2)}</pre>
      </div>
    </div>
  );
}

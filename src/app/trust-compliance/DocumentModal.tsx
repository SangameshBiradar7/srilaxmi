"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ZoomOut, Maximize2, Download } from "lucide-react";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doc: {
    title: string;
    filePath: string;
    fileType: string;
    fileName: string;
  } | null;
}

export default function DocumentModal({
  isOpen,
  onClose,
  doc,
}: DocumentModalProps) {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setZoom(100);
      setIsFullscreen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 10, 200));
      if (e.key === "-") setZoom((z) => Math.max(z - 10, 50));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  if (!isOpen || !doc) return null;

  const isImageFile = doc.fileType !== "pdf";

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-midnight/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full h-full max-w-6xl max-h-[90vh] mx-4 flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h3 className="font-display text-lg font-semibold text-midnight truncate pr-4">
            {doc.title}
          </h3>
          <div className="flex items-center gap-2">
            {!isImageFile && (
              <>
                <button
                  onClick={() => setZoom((z) => Math.max(z - 10, 50))}
                  className="p-2 text-slate-600 hover:text-midnight hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={18} />
                </button>
                <span className="text-sm text-slate-600 min-w-[3rem] text-center">
                  {zoom}%
                </span>
                <button
                  onClick={() => setZoom((z) => Math.min(z + 10, 200))}
                  className="p-2 text-slate-600 hover:text-midnight hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 text-slate-600 hover:text-midnight hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Toggle fullscreen"
                >
                  <Maximize2 size={18} />
                </button>
              </>
            )}
            <a
              href={doc.filePath}
              download={doc.fileName}
              className="p-2 text-slate-600 hover:text-midnight hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Download"
            >
              <Download size={18} />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-600 hover:text-midnight hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-slate-100 p-4 sm:p-6">
          <div
            className="mx-auto transition-transform duration-200"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
          >
            {isImageFile ? (
              <img
                src={doc.filePath}
                alt={doc.title}
                className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            ) : (
              <iframe
                src={doc.filePath}
                title={doc.title}
                className="w-full h-[70vh] rounded-lg border border-slate-200"
                style={{ minHeight: "500px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

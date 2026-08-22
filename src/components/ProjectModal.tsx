import { useState } from "react";
import PdfViewerModal from "./PdfViewerModal";

interface ProjectModalProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
  onOpenDeck?: () => void;
}

/**
 * Centralized ProjectModal component that directly loads and renders
 * full-resolution 10-page source PDF documents without cropping or summarization.
 */
export default function ProjectModal({ pdfUrl, title, onClose, onOpenDeck }: ProjectModalProps) {
  return (
    <PdfViewerModal
      pdfUrl={pdfUrl}
      title={title}
      onClose={onClose}
      onOpenDeck={onOpenDeck}
    />
  );
}

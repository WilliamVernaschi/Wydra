import { Injectable } from '@angular/core';
import { extractColors } from "extract-colors";
import chroma from "chroma-js";

@Injectable({
  providedIn: 'root'
})
export class DominantColorService {

  constructor() { }

  async corDominante(imgPath: string): Promise<string> {
    // Extract the dominant color
    const colors = await extractColors(imgPath);
    let dominantColor = colors[0].hex; // Get the first (most dominant) color

    // Retrieve the value of --var-ion-color from the CSS variables
    const ionColor = getComputedStyle(document.documentElement).getPropertyValue('--var-ion-color').trim() || '#ffffff';

    // Ensure good contrast with the retrieved CSS variable
    const minContrast = 4.5; // WCAG standard for normal text
    let contrast = chroma.contrast(dominantColor, ionColor);

    // Adjust the dominant color until it meets the contrast requirement
    while (contrast < minContrast) {
      dominantColor = chroma(dominantColor).darken(0.1).hex(); // Darken the color incrementally
      contrast = chroma.contrast(dominantColor, ionColor);
    }

    return dominantColor;
  }
}

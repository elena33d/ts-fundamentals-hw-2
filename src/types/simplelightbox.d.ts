declare module 'simplelightbox' {
  interface SimpleLightboxOptions {
    captions?: boolean;
    captionsData?: string;
    captionDelay?: number;
    close?: boolean;
    nav?: boolean;
    loop?: boolean;
  }

  export default class SimpleLightbox {
    constructor(selector: string, options?: SimpleLightboxOptions);
    refresh(): void;
    open(): void;
    close(): void;
    destroy(): void;
  }
}

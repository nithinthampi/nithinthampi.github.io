import "@testing-library/jest-dom";

class IntersectionObserverMock {
  constructor(private readonly callback: IntersectionObserverCallback) {}
  observe(): void {
    this.callback([], this as unknown as IntersectionObserver);
  }
  disconnect(): void {}
  unobserve(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// @ts-expect-error - assign to jsdom environment for animation tests
global.IntersectionObserver = IntersectionObserverMock;

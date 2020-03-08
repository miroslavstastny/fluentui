export function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (ms < 0) {
      reject(new Error('negative timeout'));
    } else {
      // This needs to be moved out of utils and reference window.setTimeout
      // eslint-disable-next-line no-restricted-globals
      setTimeout(resolve, ms);
    }
  });
}

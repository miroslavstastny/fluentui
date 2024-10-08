import { test } from '@playwright/test';
import { expect, fixtureURL } from '../helpers.tests.js';
import type { ProgressBar } from './progress-bar.js';

test.describe('Progress Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(fixtureURL('components-progressbar--progress'));

    await page.waitForFunction(() => customElements.whenDefined('fluent-progress-bar'));
  });

  test('should include a role of progressbar', async ({ page }) => {
    const element = page.locator('fluent-progress-bar');

    await expect(element).toHaveJSProperty('elementInternals.role', 'progressbar');
  });

  test('should set the `aria-valuenow` attribute with the `value` property when provided', async ({ page }) => {
    const element = page.locator('fluent-progress-bar');

    await page.setContent(/* html */ `
        <fluent-progress-bar value="50"></fluent-progress-bar>
    `);

    await expect(element).toHaveJSProperty('elementInternals.ariaValueNow', '50');
  });

  test('should set the `aria-valuemin` attribute with the `min` property when provided', async ({ page }) => {
    const element = page.locator('fluent-progress-bar');

    await page.setContent(/* html */ `
      <fluent-progress-bar min="50"></fluent-progress-bar>
    `);

    await expect(element).toHaveJSProperty('elementInternals.ariaValueMin', '50');
  });

  test('should set the `aria-valuemax` attribute with the `max` property when provided', async ({ page }) => {
    const element = page.locator('fluent-progress-bar');

    await page.setContent(/* html */ `
        <fluent-progress-bar max="50"></fluent-progress-bar>
    `);

    await expect(element).toHaveJSProperty('elementInternals.ariaValueMax', '50');
  });

  test('should return the `percentComplete` property as a value between 0 and 100 when `min` and `max` are unset', async ({
    page,
  }) => {
    const element = page.locator('fluent-progress-bar');

    await page.setContent(/* html */ `
        <fluent-progress-bar value="50"></fluent-progress-bar>
    `);

    await expect(element).toHaveJSProperty('percentComplete', 50);
  });

  test('should set the `percentComplete` property to match the current `value` in the range of `min` and `max`', async ({
    page,
  }) => {
    const element = page.locator('fluent-progress-bar');

    await page.setContent(/* html */ `
        <fluent-progress-bar value="0"></fluent-progress-bar>
    `);

    await expect(element).toHaveJSProperty('percentComplete', 0);

    await element.evaluate((node: ProgressBar) => {
      node.value = 50;
    });

    await expect(element).toHaveJSProperty('percentComplete', 50);

    await element.evaluate((node: ProgressBar) => {
      node.value = 100;
    });

    await expect(element).toHaveJSProperty('percentComplete', 100);

    await element.evaluate((node: ProgressBar) => {
      node.max = 200;
    });

    await expect(element).toHaveJSProperty('percentComplete', 50);

    await element.evaluate((node: ProgressBar) => {
      node.min = 100;
    });

    await expect(element).toHaveJSProperty('percentComplete', 0);
  });

  test('should set and retrieve the `thickness` property correctly', async ({ page }) => {
    const element = page.locator('fluent-progress-bar');

    await element.evaluate((node: ProgressBar) => {
      node.thickness = 'medium';
    });

    await expect(element).toHaveJSProperty('thickness', 'medium');
    await expect(element).toHaveCustomState('medium');

    await element.evaluate((node: ProgressBar) => {
      node.thickness = 'large';
    });

    await expect(element).toHaveJSProperty('thickness', 'large');
    await expect(element).not.toHaveCustomState('medium');
    await expect(element).toHaveCustomState('large');
  });

  test('should set and retrieve the `shape` property correctly', async ({ page }) => {
    const element = page.locator('fluent-progress-bar');

    await element.evaluate((node: ProgressBar) => {
      node.shape = 'square';
    });

    await expect(element).toHaveJSProperty('shape', 'square');
    await expect(element).toHaveCustomState('square');

    await element.evaluate((node: ProgressBar) => {
      node.shape = 'rounded';
    });

    await expect(element).toHaveJSProperty('shape', 'rounded');
    await expect(element).not.toHaveCustomState('square');
    await expect(element).toHaveCustomState('rounded');
  });

  test('should set and retrieve the `validationState` property correctly', async ({ page }) => {
    const element = page.locator('fluent-progress-bar');

    await element.evaluate((node: ProgressBar) => {
      node.validationState = 'success';
    });

    await expect(element).toHaveJSProperty('validationState', 'success');
    await expect(element).toHaveCustomState('success');

    await element.evaluate((node: ProgressBar) => {
      node.validationState = 'warning';
    });

    await expect(element).toHaveJSProperty('validationState', 'warning');
    await expect(element).not.toHaveCustomState('success');
    await expect(element).toHaveCustomState('warning');

    await element.evaluate((node: ProgressBar) => {
      node.validationState = 'error';
    });

    await expect(element).toHaveJSProperty('validationState', 'error');
    await expect(element).not.toHaveCustomState('warning');
    await expect(element).toHaveCustomState('error');

    await element.evaluate((node: ProgressBar) => {
      node.validationState = null;
    });

    await expect(element).not.toHaveCustomState('success');
    await expect(element).not.toHaveCustomState('warning');
    await expect(element).not.toHaveCustomState('error');
  });
});

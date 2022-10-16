import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000')
})

test('Render website', ({ page }) => {
  expect(page.locator('text=La romana'))
  expect(page.locator('text=Paris'))
  expect(page.locator('text=Tokyo'))
  expect(page.locator('text=California'))
  expect(page.locator('text=Weather Details'))
  expect(page.locator('text=Cloudy'))
  expect(page.locator('text=Humidity'))
  expect(page.locator('text=Wind'))
})

test('Search another city', async ({ page }) => {
  const input = page.locator('input[type=text]')
  expect(input.fill('Paris'))
  expect(page.locator('button[type=submit]').click())

  await expect(page.locator('.main-text')).toHaveText('Paris')
})

test('Select another city', async ({ page }) => {
  const li = page.locator('li').nth(0)
  expect(li.click())
  await expect(page.locator('.main-text')).toHaveText('New York')
})

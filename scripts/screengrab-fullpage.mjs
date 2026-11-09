import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const SITES = [
  { slug: 'diamond-living', url: 'https://www.diamondlivingbydiamondkleen.com/' },
  { slug: 'trowell-bookkeeping', url: 'https://www.trowellbookkeepingandaccounts.co.uk/' },
  { slug: 'jennette-miller', url: 'https://www.jennettemiller.com/' },
  { slug: 'matriarch-home-services', url: 'https://www.matriarchhomeservices.com/' },
  { slug: 'purpose-wellness', url: 'https://www.purposewellness.net/' },
  { slug: 'vertroue-caregivers', url: 'https://www.vertrouecaregivers.com/' },
  { slug: 'inkblock-media', url: 'https://timmydigitals.wixsite.com/my-site-13' },
  { slug: 'smith-associates', url: 'https://www.smithandassociates.com/' }
];

async function captureSite(browser, site) {
  console.log(`\nCapturing fullpage for ${site.slug} (${site.url})...`);
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });

  try {
    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 50000 });
    await new Promise(r => setTimeout(r, 4000));

    // Scroll down progressively to reveal all lazy-loaded content
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 500;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight || totalHeight > 15000) {
            clearInterval(timer);
            resolve();
          }
        }, 120);
      });
    });

    await new Promise(r => setTimeout(r, 2000));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 1000));

    const outDir = path.resolve(`public/images/projects/${site.slug}`);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const outPath = path.join(outDir, 'fullpage.jpg');
    await page.screenshot({
      path: outPath,
      fullPage: true,
      type: 'jpeg',
      quality: 82
    });

    const stat = fs.statSync(outPath);
    console.log(`SUCCESS: ${site.slug} saved to ${outPath} (${Math.round(stat.size / 1024)} KB)`);
  } catch (err) {
    console.error(`FAILED for ${site.slug}:`, err.message);
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('Starting live fullpage screengrab from header to footer...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1000']
  });

  for (const site of SITES) {
    await captureSite(browser, site);
  }

  await browser.close();
  console.log('\nAll fullpage screengrabs complete!');
}

main().catch(console.error);

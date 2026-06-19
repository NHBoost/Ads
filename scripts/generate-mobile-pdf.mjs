import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = process.env.URL || "http://localhost:3000";
const OUT = path.resolve(__dirname, "..", "nhboost-mobile.pdf");

const VIEWPORT = { width: 390, height: 844 }; // iPhone 14 Pro size

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({
      ...VIEWPORT,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    await page.setUserAgent(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
    );

    console.log(`Loading ${URL} ...`);
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

    // Force every Reveal element visible (otherwise IntersectionObserver leaves them opacity:0 below the fold)
    await page.evaluate(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
    });

    // Give animations a moment to settle
    await new Promise((r) => setTimeout(r, 1200));

    // Measure full page height
    const bodyHandle = await page.$("body");
    const { height } = await bodyHandle.boundingBox();
    await bodyHandle.dispose();
    console.log(`Page height: ${Math.round(height)}px`);

    await page.pdf({
      path: OUT,
      width: `${VIEWPORT.width}px`,
      height: `${Math.ceil(height)}px`,
      printBackground: true,
      pageRanges: "1",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`✓ Wrote ${OUT}`);
  } finally {
    await browser.close();
  }
})();

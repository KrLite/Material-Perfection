function handleParallax() {
  var elements = document.getElementsByClassName("parallax");

  Array.from(elements).forEach((element) => {
    var start = element.getAttribute("data-parallax-start") || "0%";
    var end = element.getAttribute("data-parallax-end") || "100%";

    if (start.endsWith("%")) {
      start = parsePercentage(start) * window.innerHeight;
    }

    if (end.endsWith("%")) {
      end = parsePercentage(end) * window.innerHeight;
    }

    if (start === end) return 0;

    const offset = element.getAttribute("data-parallax-offset") || 0;
    const bezier = element.getAttribute("data-parallax-bezier") || null;

    const rect = element.getBoundingClientRect();
    const screenCssPixelRatio = (window.outerWidth - 8) / window.innerWidth;
    const percentage =
      ((rect.top - offset - start) / (end - start)) * screenCssPixelRatio;

    const bezierParams = bezier === null ? null : parseCubicBezier(bezier);
    const curve =
      bezierParams === null
        ? percentage
        : cubicBezier(
            bezierParams.p0,
            bezierParams.p1,
            bezierParams.p2,
            bezierParams.p3,
            percentage
          );

    element.style.setProperty("--parallax", curve);
  });
}

function parsePercentage(str) {
  const parsedValue = parseFloat(str);

  if (!isNaN(parsedValue)) {
    return parsedValue / 100;
  }

  return null; // Invalid input
}

function parseCubicBezier(str) {
  if (str === null) return null;
  const matches = str.match(/cubic-bezier\(([^,]+),([^,]+),([^,]+),([^)]+)\)/);

  if (matches) {
    const p0 = parseFloat(matches[1]);
    const p1 = parseFloat(matches[2]);
    const p2 = parseFloat(matches[3]);
    const p3 = parseFloat(matches[4]);

    return { p0, p1, p2, p3 };
  }

  return null;
}

function cubicBezier(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  const mt2 = mt * mt;
  const t2 = t * t;

  const value =
    mt2 * mt * p0 + 3 * mt2 * t * p1 + 3 * mt * t2 * p2 + t2 * t * p3;

  return value;
}

document.addEventListener("DOMContentLoaded", handleParallax);
window.addEventListener("scroll", handleParallax);

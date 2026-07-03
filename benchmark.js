// Benchmark for @ph-itdev/fleet-tracker
const { performance } = require('perf_hooks');

function bench(name, fn, iterations = 10000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  const elapsed = (performance.now() - start).toFixed(2);
  console.log(`  ${name}: ${elapsed}ms (${iterations} ops)`);
  return { name, iterations, elapsedMs: +elapsed };
}

module.exports = { bench };

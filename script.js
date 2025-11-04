const fpsDisplay = document.getElementById('fps');
let lastFrameTime = performance.now();
let frames = 0;
let fps = 0;

function updateFPS() {
  const now = performance.now();
  frames++;

  if (now - lastFrameTime >= 1000) {
    fps = frames;
    fpsDisplay.textContent = `FPS: ${fps}`;
    frames = 0;
    lastFrameTime = now;
  }

  requestAnimationFrame(updateFPS);
}

updateFPS();

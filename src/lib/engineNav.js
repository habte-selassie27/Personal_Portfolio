// Shared helpers for jumping to engine scroll sections from UI that the
// engine itself does not navigate (sidebar links, extra burger-menu items).

// The engine's virtual scroll moves by deltaY * 0.9 per wheel event and
// only accepts input while no transition/menu/landing animation runs.
// Dispatch wheel events, but wait until the scroll has settled before
// dispatching again — long jumps tween for >1s and a second dispatch
// mid-tween would overshoot.
export function wheelTo(id) {
  let prevTop = null;
  let tries = 0;
  const attempt = () => {
    const el = document.getElementById(id);
    if (!el || tries++ > 120) return;
    const top = el.getBoundingClientRect().top;
    if (Math.abs(top) < 6) return;
    if (prevTop !== null && Math.abs(top - prevTop) < 1.5) {
      prevTop = null;
      document.dispatchEvent(
        new WheelEvent("wheel", {
          deltaY: top / 0.9,
          bubbles: true,
          cancelable: true,
        })
      );
    } else {
      prevTop = top;
    }
    setTimeout(attempt, 250);
  };
  attempt();
}

export function closeMenu() {
  const btn = document.getElementById("menu-button");
  if (btn) btn.click();
}

export function goToSection(sectionId) {
  closeMenu();
  wheelTo(sectionId);
}

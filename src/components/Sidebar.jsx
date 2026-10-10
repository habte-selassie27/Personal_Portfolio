import { useEffect, useState } from "react";
import { wheelTo } from "../lib/engineNav.js";

const NAV_ITEMS = [
  { label: "About", icon: "fas fa-user", menu: 1, sectionId: "about-section" },
  { label: "Skills", icon: "fas fa-tasks", menu: 1, passive: true },
  { label: "Projects", icon: "fas fa-th-large", menu: 2, sectionId: "work-section" },
  { label: "Technologies", icon: "fas fa-microchip", sectionId: "technologies-section", group: true },
  { label: "Experience", icon: "fas fa-briefcase", sectionId: "experience-section" },
  { label: "Education", icon: "fas fa-graduation-cap", sectionId: "education-section" },
  { label: "Certificates", icon: "fas fa-certificate", sectionId: "certificates-section" },
  { label: "Contact", icon: "fas fa-envelope", menu: 3, sectionId: "contact-section", group: true },
];

// DOM order of sections inside #scroll-container (used for active state).
const SECTION_ORDER = [
  "about-section",
  "work-section",
  "technologies-section",
  "experience-section",
  "education-section",
  "certificates-section",
  "contact-section",
];

function goToSection(item) {
  if (item.menu !== undefined) {
    const menuEl = document.querySelectorAll(".menu-item")[item.menu];
    if (menuEl && menuEl.getClientRects().length) {
      menuEl.click();
      return;
    }
  }
  if (item.sectionId) wheelTo(item.sectionId);
}

export default function Sidebar() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Mirror the section under the viewport center (same rule as the
    // engine uses for the burger menu).
    const compute = () => {
      const center = window.innerHeight / 2;
      let active = "";
      SECTION_ORDER.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= center) active = id;
      });
      setActiveId(active);
      // The engine marks Home active when the landing page is visible and
      // never clears it again — drop it once a real section is active.
      if (active) {
        const homeItem = document.querySelector(".menu-item");
        if (homeItem) homeItem.classList.remove("active-menu-item");
      }
      // Mirror the active state onto the burger-menu items (the engine only
      // computes its four menu items once, when the menu opens).
      document.querySelectorAll(".menu-item[data-section]").forEach((mi) => {
        mi.classList.toggle("active-menu-item", mi.getAttribute("data-section") === active);
      });
    };
    compute();
    const timer = setInterval(compute, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside id="sidebar" aria-label="Section navigation">
      <a
        id="sidebar-avatar"
        href="#top"
        aria-label="Back to the top"
        onClick={(e) => {
          e.preventDefault();
          goToSection(NAV_ITEMS[0]);
        }}
      >
        <img src="/images/profile.png" alt="Profile" />
      </a>

      <ul className="sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const isActive = !item.passive && activeId === item.sectionId;
          return (
            <li key={item.label} className={item.group ? "sidebar-group" : undefined}>
              <a
                className={`nav-link${isActive ? " active" : ""}`}
                href="#"
                aria-label={
                  item.menu !== undefined
                    ? `Navigate to the ${item.label} section`
                    : `Open the ${item.label} section`
                }
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(item);
                }}
              >
                <i className={item.icon} aria-hidden="true"></i>
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
        <li className="sidebar-divider" aria-hidden="true"></li>
        <li>
          <a className="nav-link" href="https://drive.google.com/file/d/1rnIqO2Xclv2OZwf3jn2hD_2OnApxfgi2/view?usp=sharing" target="_blank" rel="noreferrer">
            <i className="fas fa-folder-open" aria-hidden="true"></i>
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

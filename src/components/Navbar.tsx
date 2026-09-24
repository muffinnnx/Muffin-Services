import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  House,
  Layers3,
  CreditCard,
  Star,
  CircleHelp,
  Mail,
  MessageCircle,
} from "lucide-react";

import {
  MagneticDock,
} from "../components/ui/magnetic-dock";

import { siteConfig } from "../data/site";
import muffinLogo from "../assets/brand/muffin-logo.png";

import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();

    if (href.startsWith("#")) {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleDiscord = () => {
    if (siteConfig.discord.inviteUrl) {
      window.open(
        siteConfig.discord.inviteUrl,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      href: "#home",
      icon: <House />,
    },
    {
      id: "services",
      label: "Services",
      href: "#services",
      icon: <Layers3 />,
    },
    {
      id: "pricing",
      label: "Pricing",
      href: "#pricing",
      icon: <CreditCard />,
    },
    {
      id: "reviews",
      label: "Reviews",
      href: "#testimonials",
      icon: <Star />,
    },
    {
      id: "faq",
      label: "FAQ",
      href: "#faq",
      icon: <CircleHelp />,
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      icon: <Mail />,
    },
  ];

  const magneticItems = navigationItems.map((item) => ({
    id: item.id,
    label: item.label,
    icon: item.icon,
    onClick: () => handleNavClick(item.href),
    isActive: item.id === "home",
  }));

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* =====================================================
            BRAND
            ===================================================== */}

        <a
          href="#home"
          className="navbar__brand"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("#home");
          }}
          aria-label="Muffin Services home"
        >
          <span className="navbar__brand-mark">
            <img
              src={muffinLogo}
              alt=""
              className="navbar__brand-logo"
            />
          </span>

          <span className="navbar__brand-text">
            Muffin <span>Services</span>
          </span>
        </a>

        {/* =====================================================
            MAGNETIC NAVIGATION
            ===================================================== */}

        <div className="navbar__magnetic-wrap">
          <MagneticDock
            items={magneticItems}
            iconSize={34}
            maxScale={1.28}
            magneticDistance={105}
            showLabels={true}
            position="top"
            variant="transparent"
            className="navbar__magnetic-dock"
          />
        </div>

        {/* =====================================================
            DESKTOP ACTIONS
            ===================================================== */}

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__discord"
            onClick={handleDiscord}
          >
            <MessageCircle size={15} />

            <span>
              Discord Community
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={2}
            />
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            className="navbar__menu-button"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((open) => !open)
            }
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      <div
        className={`navbar__mobile ${
          mobileOpen
            ? "navbar__mobile--open"
            : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="navbar__mobile-link"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(item.href);
              }}
            >
              <span className="navbar__mobile-icon">
                {item.icon}
              </span>

              {item.label}
            </a>
          ))}

          <button
            type="button"
            className="navbar__mobile-discord"
            onClick={handleDiscord}
          >
            <span>
              <MessageCircle size={17} />
              Discord Community
            </span>

            <ArrowUpRight size={17} />
          </button>
        </nav>
      </div>
    </header>
  );
}
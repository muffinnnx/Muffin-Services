"use client";

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export interface CollectionItem {
  id: number;
  image: string;
  title: string;
}

export type CollectionSurferVariant =
  | "magnetic"
  | "uplift"
  | "simple";

interface CollectionSurferProps {
  items: CollectionItem[];
  variant?: CollectionSurferVariant;
}

interface SurferCardProps {
  item: CollectionItem;
  relativeIndex: number;
  isActive: boolean;
  variant: CollectionSurferVariant;
  index: number;
  onOpen: (item: CollectionItem) => void;
}

export function CollectionSurfer({
  items,
  variant = "magnetic",
}: CollectionSurferProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] =
    useState<CollectionItem | null>(null);

  const safeItems = useMemo(
    () => items ?? [],
    [items]
  );

  /* =========================================================
     FAST AUTOMATIC MOVEMENT
  ========================================================= */

  useEffect(() => {
    if (safeItems.length <= 1 || selectedItem) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % safeItems.length;
      });
    }, 1400);

    return () => {
      window.clearInterval(interval);
    };
  }, [safeItems.length, selectedItem]);

  /* =========================================================
     LOCK PAGE SCROLL WHILE MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!selectedItem) return;

    const previousOverflow =
      document.body.style.overflow;

    const previousPaddingRight =
      document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.body.style.paddingRight =
        previousPaddingRight;
    };
  }, [selectedItem]);

  /* =========================================================
     ESCAPE CLOSES MODAL
  ========================================================= */

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedItem]);

  if (safeItems.length === 0) {
    return (
      <div className="collection-surfer collection-surfer--empty">
        <span>No collection items available.</span>
      </div>
    );
  }

  return (
    <>
      {/* =====================================================
          3D COLLECTION SURFER
      ===================================================== */}

      <div className="collection-surfer">
        <div className="collection-surfer__glow" />

        <div className="collection-surfer__floor" />

        <div className="collection-surfer__center">
          <div className="collection-surfer__center-ring" />
          <div className="collection-surfer__center-dot" />
        </div>

        <div className="collection-surfer__stage">
          {safeItems.map((item, index) => {
            let relativeIndex =
              index - activeIndex;

            if (
              relativeIndex >
              safeItems.length / 2
            ) {
              relativeIndex -=
                safeItems.length;
            }

            if (
              relativeIndex <
              -safeItems.length / 2
            ) {
              relativeIndex +=
                safeItems.length;
            }

            return (
              <SurferCard
                key={item.id}
                item={item}
                index={index}
                relativeIndex={relativeIndex}
                isActive={
                  index === activeIndex
                }
                variant={variant}
                onOpen={setSelectedItem}
              />
            );
          })}
        </div>

        {/* ===================================================
            PROGRESS DOTS
        =================================================== */}

        <div className="collection-surfer__progress">
          {safeItems.map(
            (item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.title}`}
                className={
                  index === activeIndex
                    ? "collection-surfer__progress-dot collection-surfer__progress-dot--active"
                    : "collection-surfer__progress-dot"
                }
                onClick={() =>
                  setActiveIndex(index)
                }
              />
            )
          )}
        </div>

        {/* ===================================================
            AUTO SURFING LABEL
        =================================================== */}

        <div className="collection-surfer__hint">
          <span />
          AUTO SURFING
        </div>
      </div>

      {/* =====================================================
          IMAGE MODAL
          
          IMPORTANT:
          Render directly into document.body so the modal
          cannot get trapped inside a transformed/3D parent.
      ===================================================== */}

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                className="collection-surfer__modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() =>
                  setSelectedItem(null)
                }
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 99999,
                }}
              >
                <motion.div
                  className="collection-surfer__modal-content"
                  initial={{
                    opacity: 0,
                    scale: 0.88,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                    y: 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                  }}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                >
                  {/* ===============================
                      CLOSE BUTTON
                  =============================== */}

                  <button
                    type="button"
                    className="collection-surfer__modal-close"
                    onClick={() =>
                      setSelectedItem(null)
                    }
                    aria-label="Close image"
                  >
                    <X size={20} />
                  </button>

                  {/* ===============================
                      LARGE IMAGE
                  =============================== */}

                  <div className="collection-surfer__modal-image-wrap">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="collection-surfer__modal-image"
                      draggable={false}
                    />
                  </div>

                  {/* ===============================
                      MODAL FOOTER
                  =============================== */}

                  <div className="collection-surfer__modal-footer">
                    <div>
                      <span>
                        PERFORMANCE PROOF
                      </span>

                      <strong>
                        {selectedItem.title}
                      </strong>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedItem(null)
                      }
                    >
                      CLOSE
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

/* =========================================================
   CARD
========================================================= */

function SurferCard({
  item,
  relativeIndex,
  isActive,
  variant,
  index,
  onOpen,
}: SurferCardProps) {
  const distance =
    Math.abs(relativeIndex);

  const isVisible =
    distance <= 2;

  const x =
    relativeIndex * 142;

  const y =
    distance * 18;

  const z =
    -distance * 125;

  const rotateY =
    relativeIndex * -18;

  const scale =
    isActive
      ? 1
      : Math.max(
          0.76,
          1 - distance * 0.1
        );

  const opacity =
    distance === 0
      ? 1
      : distance === 1
        ? 0.7
        : distance === 2
          ? 0.28
          : 0;

  const blur =
    distance === 0
      ? 0
      : distance === 1
        ? 0.3
        : 1.2;

  let extraY = 0;

  if (
    variant === "uplift" &&
    isActive
  ) {
    extraY = -8;
  }

  return (
    <motion.button
      type="button"
      className={
        isActive
          ? "collection-surfer__card collection-surfer__card--active"
          : "collection-surfer__card"
      }
      initial={false}
      animate={{
        x,
        y: y + extraY,
        z,
        rotateY,
        scale,
        opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.65,
      }}
      style={{
        transformStyle:
          "preserve-3d",
        filter: `blur(${blur}px)`,
        pointerEvents: isVisible
          ? "auto"
          : "none",
      }}
      onClick={() =>
        onOpen(item)
      }
      aria-label={`Open ${item.title}`}
    >
      <div className="collection-surfer__image">
        <img
          src={item.image}
          alt={item.title}
          draggable={false}
        />
      </div>

      <div className="collection-surfer__image-overlay" />

      <div className="collection-surfer__card-glow" />

      <span className="collection-surfer__number">
        {String(index + 1).padStart(
          2,
          "0"
        )}
      </span>

      {isActive && (
        <motion.div
          className="collection-surfer__active-label"
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <span />
          {item.title}
        </motion.div>
      )}

      {isActive && (
        <span className="collection-surfer__click-hint">
          CLICK TO VIEW
        </span>
      )}
    </motion.button>
  );
}
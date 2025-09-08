import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './Drawer.scss';

export type DrawerDirection = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  direction?: DrawerDirection;
  size?: DrawerSize;
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  backdropClassName?: string;
  enableGestures?: boolean;
  preventBodyScroll?: boolean;
}

const sizeMap: Record<DrawerSize, string> = {
  sm: '320px',
  md: '480px',
  lg: '640px',
  xl: '768px',
  full: '100%',
};

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  direction = 'right',
  size = 'md',
  children,
  title,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = '',
  backdropClassName = '',
  enableGestures = true,
  preventBodyScroll = true,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (!preventBodyScroll) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, preventBodyScroll]);

  // Focus management
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      // Focus the drawer container for keyboard navigation
      drawerRef.current.focus();
    }
  }, [isOpen]);

  const getDrawerVariants = () => {
    const sizeValue = sizeMap[size];

    switch (direction) {
      case 'left':
        return {
          hidden: { x: `-${sizeValue}` },
          visible: { x: 0 },
          exit: { x: `-${sizeValue}` },
        };
      case 'right':
        return {
          hidden: { x: sizeValue },
          visible: { x: 0 },
          exit: { x: sizeValue },
        };
      case 'top':
        return {
          hidden: { y: `-${sizeValue}` },
          visible: { y: 0 },
          exit: { y: `-${sizeValue}` },
        };
      case 'bottom':
        return {
          hidden: { y: sizeValue },
          visible: { y: 0 },
          exit: { y: sizeValue },
        };
      default:
        return {
          hidden: { x: sizeValue },
          visible: { x: 0 },
          exit: { x: sizeValue },
        };
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = {
    type: 'spring' as const,
    damping: 30,
    stiffness: 300,
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!enableGestures) return;

    const threshold = 100;
    const velocity = Math.abs(info.velocity.x || info.velocity.y);
    const distance = Math.abs(info.offset.x || info.offset.y);

    // Determine if we should close based on drag distance and velocity
    const shouldClose = distance > threshold || velocity > 500;

    if (shouldClose) {
      // Check if drag direction matches drawer direction
      const dragDirection =
        info.offset.x > 0
          ? 'right'
          : info.offset.x < 0
            ? 'left'
            : info.offset.y > 0
              ? 'bottom'
              : 'top';

      const shouldCloseBasedOnDirection =
        (direction === 'left' && dragDirection === 'left') ||
        (direction === 'right' && dragDirection === 'right') ||
        (direction === 'top' && dragDirection === 'top') ||
        (direction === 'bottom' && dragDirection === 'bottom');

      if (shouldCloseBasedOnDirection) {
        onClose();
      }
    }
  };

  const getDrawerStyle = () => {
    const style: React.CSSProperties = {};

    switch (direction) {
      case 'left':
      case 'right':
        style.height = '100%';
        style.width = size === 'full' ? '100%' : sizeMap[size];
        style.maxWidth = '100vw';
        break;
      case 'top':
      case 'bottom':
        style.width = '100%';
        style.height = size === 'full' ? '100%' : sizeMap[size];
        style.maxHeight = '100vh';
        break;
    }

    return style;
  };

  const getDrawerPosition = () => {
    switch (direction) {
      case 'left':
        return { top: 0, left: 0 };
      case 'right':
        return { top: 0, right: 0 };
      case 'top':
        return { top: 0, left: 0 };
      case 'bottom':
        return { bottom: 0, left: 0 };
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className={`drawer-backdrop ${backdropClassName}`}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={transition}
        onClick={closeOnBackdropClick ? onClose : undefined}
      >
        <motion.div
          ref={drawerRef}
          className={`drawer drawer--${direction} drawer--${size} ${className}`}
          style={{ ...getDrawerStyle(), ...getDrawerPosition() }}
          variants={getDrawerVariants()}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={transition}
          drag={
            enableGestures ? (direction === 'left' || direction === 'right' ? 'x' : 'y') : false
          }
          dragConstraints={{
            left: direction === 'right' ? 0 : undefined,
            right: direction === 'left' ? 0 : undefined,
            top: direction === 'bottom' ? 0 : undefined,
            bottom: direction === 'top' ? 0 : undefined,
          }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="drawer__header">
              {title && <h2 className="drawer__title">{title}</h2>}
              {showCloseButton && (
                <button
                  className="drawer__close-button"
                  onClick={onClose}
                  aria-label="Close drawer"
                >
                  <XMarkIcon />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="drawer__content">{children}</div>

          {/* Drag indicator */}
          {enableGestures && (
            <div className={`drawer__drag-indicator drawer__drag-indicator--${direction}`}>
              <div className="drag-handle" />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default Drawer;

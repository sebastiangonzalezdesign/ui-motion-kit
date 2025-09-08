import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import './Breadcrumb.scss';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const location = useLocation();

  // Auto-generate breadcrumbs if not provided
  // Mapping of component paths to their categories
  const componentCategoryMap: { [key: string]: string } = {
    // UI Basics
    buttons: 'ui-basics',
    inputs: 'ui-basics',
    toggles: 'ui-basics',
    cards: 'ui-basics',

    // Navigation
    tabs: 'navigation',
    navbar: 'navigation',
    sidebar: 'navigation',
    breadcrumbs: 'navigation',

    // Feedback
    modals: 'feedback',
    toast: 'feedback',
    toasts: 'feedback',
    alerts: 'feedback',
    loaders: 'feedback',

    // Motion Components
    drawer: 'motion',
    'command-palette': 'motion',
    'micro-interactions': 'motion',
    'page-transitions': 'motion',
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;

      // Convert segment to readable label
      let label = segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
      let linkPath = currentPath;

      // Special cases for better labels and correct linking
      if (segment === 'docs') label = 'Documentation';
      if (segment === 'examples') {
        label = 'Components';
        // When we're in /docs/examples/*, find the current component and its category
        const currentComponent = pathSegments[pathSegments.length - 1];
        const category = componentCategoryMap[currentComponent];

        // Link to /docs/components with the appropriate category parameter
        linkPath = category ? `/docs/components?category=${category}` : '/docs/components';
      }
      if (segment === 'command-palette') label = 'Command Palette';
      if (segment === 'micro-interactions') label = 'Micro-interactions';
      if (segment === 'page-transitions') label = 'Page Transitions';

      breadcrumbs.push({
        label,
        path: linkPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isFirst = index === 0;

          return (
            <li key={item.path} className="breadcrumb__item">
              {!isLast ? (
                <Link
                  to={item.path}
                  className="breadcrumb__link"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isFirst && <HomeIcon className="breadcrumb__home-icon" />}
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb__current" aria-current="page">
                  {item.label}
                </span>
              )}

              {!isLast && <ChevronRightIcon className="breadcrumb__separator" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

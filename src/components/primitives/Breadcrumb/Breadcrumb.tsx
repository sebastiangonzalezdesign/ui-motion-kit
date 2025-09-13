import { Link } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import './Breadcrumb.scss';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb__item">
            {index === 0 && <HomeIcon className="breadcrumb__home-icon" />}

            {item.href && !item.current ? (
              <Link
                to={item.href}
                className="breadcrumb__link"
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`breadcrumb__text ${item.current ? 'breadcrumb__text--current' : ''}`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}

            {index < items.length - 1 && <ChevronRightIcon className="breadcrumb__separator" />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

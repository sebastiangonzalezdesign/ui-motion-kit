import type { ReactNode } from 'react';
import { SearchInput } from '../../../components/primitives';
import type { SearchableItem } from '../../../components/primitives';
import './DocsSidebar.scss';

interface SidebarItem {
  id: string;
  label: string;
  description: string;
  icon: ReactNode;
  isPro?: boolean;
  count?: number;
}

interface DocsSidebarProps {
  title: string;
  items: SidebarItem[];
  selectedItem: string;
  onItemClick: (itemId: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  searchData?: SearchableItem[];
  onSearchResultClick?: (item: SearchableItem) => void;
  searchPlaceholder?: string;
  className?: string;
}

export const DocsSidebar = ({
  title,
  items,
  selectedItem,
  onItemClick,
  collapsed,
  onToggleCollapse,
  searchData,
  onSearchResultClick,
  searchPlaceholder = 'Search...',
  className = '',
}: DocsSidebarProps) => {
  return (
    <aside className={`docs-sidebar ${collapsed ? 'collapsed' : ''} ${className}`}>
      <div className="sidebar-header">
        <h3>{title}</h3>
        <button
          className="sidebar-toggle"
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {!collapsed && (
        <>
          {searchData && onSearchResultClick && (
            <div className="sidebar-search">
              <SearchInput
                placeholder={searchPlaceholder}
                data={searchData}
                searchKeys={['label', 'description', 'name']}
                onResultClick={onSearchResultClick}
                renderResult={(item) => (
                  <div className="search-result-item">
                    <div className="search-result-name">{item.label}</div>
                    <div className="search-result-description">{item.description}</div>
                    <span className="search-result-type">{String(item.type || '')}</span>
                  </div>
                )}
              />
            </div>
          )}

          <nav className="sidebar-nav">
            {items.map((item) => (
              <button
                key={item.id}
                className={`sidebar-item ${selectedItem === item.id ? 'active' : ''} ${item.isPro ? 'pro' : ''}`}
                onClick={() => onItemClick(item.id)}
              >
                <div className="sidebar-item-icon">{item.icon}</div>
                <div className="sidebar-item-content">
                  <span className="sidebar-item-name">
                    {item.label}
                    {item.isPro && <span className="pro-badge">Pro</span>}
                  </span>
                  <span className="sidebar-item-description">{item.description}</span>
                  {item.count && <span className="sidebar-item-count">{item.count} items</span>}
                </div>
              </button>
            ))}
          </nav>
        </>
      )}
    </aside>
  );
};

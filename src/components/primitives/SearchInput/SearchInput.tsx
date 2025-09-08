import { useState, useRef, useEffect } from 'react';
import './SearchInput.scss';

export interface SearchableItem {
  label?: string;
  name?: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onResults?: (results: SearchableItem[]) => void;
  data?: SearchableItem[];
  searchKeys?: string[];
  className?: string;
  showResults?: boolean;
  renderResult?: (item: SearchableItem, index: number) => React.ReactNode;
  onResultClick?: (item: SearchableItem) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  onSearch,
  onResults,
  data = [],
  searchKeys = ['label', 'name', 'title'],
  className = '',
  showResults = true,
  renderResult,
  onResultClick,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchableItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const filterData = (searchQuery: string): SearchableItem[] => {
    if (!searchQuery.trim()) return [];

    const filtered = data.filter((item) => {
      return searchKeys.some((key) => {
        const value = key.split('.').reduce((obj: unknown, k: string) => {
          return obj && typeof obj === 'object' && k in obj
            ? (obj as Record<string, unknown>)[k]
            : undefined;
        }, item);
        return value?.toString().toLowerCase().includes(searchQuery.toLowerCase());
      });
    });

    return filtered.slice(0, 8); // Limit results
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    const filtered = filterData(newQuery);
    setResults(filtered);
    setIsOpen(!!newQuery && filtered.length > 0);
    setFocusedIndex(-1);

    onSearch?.(newQuery);
    onResults?.(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleResultClick(results[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (item: SearchableItem) => {
    setQuery('');
    setIsOpen(false);
    setFocusedIndex(-1);
    onResultClick?.(item);
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Delay closing to allow result clicks
    setTimeout(() => {
      if (!resultsRef.current?.contains(e.relatedTarget as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const defaultRenderResult = (item: SearchableItem) => (
    <div className="search-result-item">
      <span className="result-title">{item.label || item.name || item.title}</span>
      {item.description && <span className="result-description">{item.description}</span>}
    </div>
  );

  return (
    <div className={`search-input ${className}`}>
      <div className="search-input-wrapper">
        <svg
          className="search-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="search-input-field"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              setResults([]);
              onSearch?.('');
              onResults?.([]);
            }}
            className="clear-button"
            aria-label="Clear search"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {showResults && isOpen && results.length > 0 && (
        <div ref={resultsRef} className="search-results">
          {results.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`search-result ${index === focusedIndex ? 'focused' : ''}`}
              onClick={() => handleResultClick(item)}
              onMouseEnter={() => setFocusedIndex(index)}
            >
              {renderResult ? renderResult(item, index) : defaultRenderResult(item)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

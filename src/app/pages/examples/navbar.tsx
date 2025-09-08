import React from 'react';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './navbar.scss';

const NavbarPage: React.FC = () => {
  return (
    <div className="navbar-page">
      <Breadcrumb />
      <Hero
        headline="Navbar Components"
        description="Responsive navigation with mobile menu and smooth animations."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <div className="demo-section">
        <Card title="Navbar Components" subtitle="Navigation header implementations">
          <div className="navbar-examples">
            <p>Navbar components are coming soon. This will showcase:</p>
            <ul>
              <li>Responsive navigation bars</li>
              <li>Mobile hamburger menus</li>
              <li>Dropdown navigation</li>
              <li>Brand logo integration</li>
              <li>Search functionality</li>
              <li>User account menus</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NavbarPage;

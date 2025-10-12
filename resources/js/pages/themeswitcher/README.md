# Isolated Theme Dashboard

## Overview

This is a completely isolated dashboard application built within the `themeswitcher` directory. It's designed to be independent of the root application and will eventually replace the main dashboard.

## Architecture

### Directory Structure
```
resources/js/pages/themeswitcher/
├── dashboard.tsx                 # Main dashboard entry point
├── themeswitcher.tsx            # Original widget demo (preserved)
├── components/
│   ├── sidebar-provider.tsx     # Sidebar context provider
│   ├── app-sidebar.tsx          # Main sidebar component
│   ├── theme-sidebar.tsx        # Theme switcher sidebar section
│   └── main-content.tsx         # Dashboard main content
├── widget/
│   ├── tswitch-widget.tsx       # Original theme widget
│   ├── tswitch.css              # Compiled SASS styles
│   └── tswitch.css.map          # Source map
└── README.md                    # This file
```

## Features

### ✅ **Isolated Development**
- **No Dependencies**: Completely independent of root application components
- **Self-Contained**: All components and logic contained within themeswitcher directory
- **Standalone Routing**: Separate route (`/theme-dashboard`) for testing
- **Independent Context**: Own SidebarProvider to avoid conflicts

### ✅ **Theme System Integration**
- **SASS-Powered**: Uses existing SASS compilation pipeline
- **CSS Variables**: Dynamic theme switching via CSS custom properties
- **Persistent Storage**: Theme selection saved to localStorage
- **4 Theme Modes**: Light, Dark, Theme A, Theme B

### ✅ **Dashboard Components**
- **Responsive Sidebar**: Collapsible navigation with mobile support
- **Theme Controls**: Integrated theme switcher in sidebar
- **Stats Dashboard**: Sample dashboard with metrics cards
- **Widget Demo**: Original theme switcher widget preserved
- **Theme Variables Demo**: Live examples of CSS variable usage

## Usage

### Development
1. **Access Dashboard**: Visit `http://localhost:8000/theme-dashboard`
2. **Test Themes**: Use sidebar theme switcher to test all 4 themes
3. **Mobile Testing**: Resize browser to test mobile sidebar behavior
4. **Widget Testing**: Use original widget in dashboard for comparison

### Theme Development
1. **SASS Changes**: Edit files in `resources/css/sass/`
2. **Compile**: Run `npm run sass:build` or `npm run sass:watch`
3. **Test**: Refresh dashboard to see changes

## Components

### SidebarProvider
- **Purpose**: Provides sidebar state management
- **Context**: `isOpen`, `setIsOpen`, `isMobile`
- **Usage**: Wraps entire dashboard to provide sidebar functionality

### AppSidebar
- **Features**: 
  - Logo and branding
  - Navigation menu
  - Theme switcher integration
  - User profile section
  - Mobile overlay and responsive behavior

### ThemeSwitcherSidebar
- **Features**:
  - Collapsible theme selector
  - Visual theme indicators
  - Active theme highlighting
  - Smooth transitions

### MainContent
- **Features**:
  - Mobile menu button
  - Dashboard header
  - Stats grid
  - Widget demonstrations
  - Feature showcase

## Routes

### Current Routes
- `/themer` - Original widget demo (preserved)
- `/theme-dashboard` - New isolated dashboard

### Future Integration
When ready to replace the main dashboard:
1. Update `/dashboard` route to point to `themeswitcher/dashboard`
2. Integrate petstore components
3. Add documentation components
4. Remove old dashboard components

## Development Guidelines

### Adding New Components
1. **Location**: Create in `resources/js/pages/themeswitcher/components/`
2. **Imports**: Use relative imports within themeswitcher directory
3. **Styling**: Use CSS variables for theme-aware styling
4. **Context**: Use `useSidebar()` hook for sidebar state

### Theme Integration
```tsx
// Use CSS variables for theme-aware styling
<div style={{
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-text)',
    borderColor: 'var(--color-border)'
}}>
    Theme-aware content
</div>
```

### Adding Navigation Items
```tsx
// In app-sidebar.tsx
const navigationItems = [
    {
        title: 'New Page',
        href: '#new-page',
        icon: YourIcon,
        isActive: false
    }
];
```

## Testing Checklist

### Functionality
- [ ] Dashboard loads without errors
- [ ] Sidebar opens/closes correctly
- [ ] Theme switching works for all 4 themes
- [ ] Theme selection persists after refresh
- [ ] Mobile sidebar behavior works
- [ ] Original widget still functions
- [ ] CSS variables update correctly

### Visual
- [ ] All themes display correctly
- [ ] Responsive layout works on mobile
- [ ] Icons and typography are consistent
- [ ] Hover states work properly
- [ ] Active states are clearly visible

### Integration
- [ ] No conflicts with root application
- [ ] Independent routing works
- [ ] SASS compilation outputs correctly
- [ ] localStorage doesn't conflict

## Next Steps

### Phase 1: Enhancement
- [ ] Add more dashboard widgets
- [ ] Implement navigation routing
- [ ] Add loading states
- [ ] Improve mobile UX

### Phase 2: Integration Preparation
- [ ] Create petstore integration components
- [ ] Add documentation components
- [ ] Implement breadcrumb system
- [ ] Add error boundaries

### Phase 3: Replacement
- [ ] Update main dashboard route
- [ ] Migrate existing functionality
- [ ] Remove old dashboard components
- [ ] Update navigation references

## Troubleshooting

### Common Issues
1. **"useSidebar must be used within a SidebarProvider"**
   - Ensure all components are wrapped in `<SidebarProvider>`
   - Check component hierarchy in dashboard.tsx

2. **Themes not applying**
   - Verify SASS compilation: `npm run sass:build`
   - Check CSS variables are defined in compiled CSS
   - Ensure `data-color-scheme-mode` attribute is set on body

3. **Sidebar not responsive**
   - Check Tailwind CSS classes for responsive breakpoints
   - Verify mobile overlay click handlers
   - Test `useSidebar` context state

### Debug Mode
Enable console logging in theme-sidebar.tsx:
```typescript
console.log(`Theme set to: ${mode}`);
```

This isolated dashboard provides a complete foundation for building the new application dashboard while maintaining complete independence from the root application.

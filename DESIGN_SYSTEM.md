# WhatsApp AI Clerk - Design System Documentation

## Overview

This design system documentation provides complete specifications for the WhatsApp AI Clerk dashboard application. The design prioritizes clarity, professional aesthetics, and control transparency for small business owners managing AI automation.

---

## Design Principles

1. **Clarity over cleverness** - Information is presented directly without unnecessary complexity
2. **Simplicity over animations** - Minimal transitions, focus on content
3. **Actionable data over raw logs** - Business summaries instead of technical details
4. **Professional, minimal aesthetic** - Clean, trustworthy interface
5. **Always-visible safety controls** - Critical controls never hidden

---

## Color System

### Primary Colors
- **Primary 50**: `#f0f9ff` - Lightest blue background
- **Primary 100**: `#e0f2fe` - Light blue background
- **Primary 500**: `#0ea5e9` (Sky Blue) - Primary actions, links
- **Primary 600**: `#0284c7` - Hover states
- **Primary 700**: `#0369a1` - Active states

### Status Colors
- **Success/Connected**: `#22c55e` (Green 500)
- **Warning/Reconnecting**: `#f59e0b` (Amber 500)
- **Danger/Disconnected**: `#ef4444` (Red 500)

### Neutral Palette
- **Neutral 50**: `#fafafa` - Lightest background
- **Neutral 100**: `#f5f5f5` - Card hover states
- **Neutral 200**: `#e5e5e5` - Borders, dividers
- **Neutral 300**: `#d4d4d4` - Disabled borders
- **Neutral 500**: `#737373` - Secondary text
- **Neutral 600**: `#525252` - Body text
- **Neutral 700**: `#404040` - Emphasized text
- **Neutral 900**: `#171717` - Headings, high emphasis

---

## Typography

### Font Families
- **Sans Serif**: System font stack - `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace`

### Font Sizes
- **xs**: `0.75rem` (12px) - Timestamps, captions
- **sm**: `0.875rem` (14px) - Helper text, secondary labels
- **base**: `1rem` (16px) - Body text
- **lg**: `1.125rem` (18px) - Card titles
- **xl**: `1.25rem` (20px) - Section headings
- **2xl**: `1.5rem` (24px) - Page titles
- **3xl**: `1.875rem` (30px) - Metric values
- **4xl**: `2.25rem` (36px) - Large metrics

### Font Weights
- **Normal**: 400 - Body text
- **Medium**: 500 - Labels, navigation items
- **Semibold**: 600 - Card titles, buttons
- **Bold**: 700 - Page headings, metrics

### Line Heights
- **Tight**: 1.2 - Headings
- **Normal**: 1.5 - Body text
- **Relaxed**: 1.75 - Descriptions

---

## Spacing System

Based on 8px grid:
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `2rem` (32px)
- **2xl**: `3rem` (48px)
- **3xl**: `4rem` (64px)

---

## Layout Specifications

### Overall Structure
```
[Sidebar: 240px] | [TopBar: 64px height]
                  | [Content Area: flex-1]
```

### Sidebar
- **Width**: `240px` (fixed)
- **Background**: White (`#ffffff`)
- **Border**: Right border - `1px solid #e5e5e5`
- **Padding**: `16px` (nav section)

#### Sidebar Components
- **Logo Area**: 24px padding, bottom border
- **Navigation Items**:
  - Height: 48px
  - Padding: 16px horizontal
  - Border radius: 8px
  - Active state: Sky blue background (#f0f9ff), sky blue text (#0369a1)
  - Hover state: Neutral 100 background (#f5f5f5)

### Top Bar
- **Height**: `64px` (fixed)
- **Background**: White (`#ffffff`)
- **Border**: Bottom border - `1px solid #e5e5e5`
- **Padding**: `24px` horizontal
- **Layout**: Flexbox - space-between

#### Top Bar Critical Controls
1. **AI Status Indicator** (Left side)
   - Colored dot (12px diameter)
   - Status text (14px, medium weight)
   - Pulse animation for "Connected" state

2. **Control Group** (Right side)
   - Human Override Toggle
   - Pause/Resume Button (140px min-width)
   - Gap: 16px between controls

### Content Area
- **Max Width**: `1400px`
- **Padding**: `24px`
- **Background**: Neutral 50 (`#fafafa`)

---

## Component Library

### Button Component

#### Variants
1. **Primary**
   - Background: Sky 600 (#0284c7)
   - Text: White
   - Hover: Sky 700 (#0369a1)
   - Focus: 2px ring, sky 500

2. **Secondary**
   - Background: Neutral 200 (#e5e5e5)
   - Text: Neutral 900 (#171717)
   - Hover: Neutral 300 (#d4d4d4)

3. **Danger**
   - Background: Red 600 (#dc2626)
   - Text: White
   - Hover: Red 700 (#b91c1c)

4. **Ghost**
   - Background: Transparent
   - Text: Neutral 700 (#404040)
   - Hover: Neutral 100 (#f5f5f5)

#### Sizes
- **Small**: Padding `12px 16px`, Font size `14px`
- **Medium**: Padding `16px 24px`, Font size `16px`
- **Large**: Padding `20px 32px`, Font size `18px`

#### States
- **Default**: Base styles
- **Hover**: Darker background, smooth transition (150ms)
- **Active**: Even darker, slight scale (0.98)
- **Disabled**: 50% opacity, no pointer events
- **Loading**: Spinner icon, disabled state

---

### Card Component

**Base Styles**:
- Background: White
- Border radius: 8px
- Box shadow: `0 1px 3px 0 rgb(0 0 0 / 0.1)`
- Hover shadow (optional): `0 10px 15px -3px rgb(0 0 0 / 0.1)`

**Padding Options**:
- Small: 12px
- Medium: 16px
- Large: 24px

---

### Badge Component

#### Variants
- **Success**: Green 100 background, Green 800 text
- **Warning**: Amber 100 background, Amber 800 text
- **Danger**: Red 100 background, Red 800 text
- **Info**: Blue 100 background, Blue 800 text
- **Neutral**: Neutral 100 background, Neutral 800 text

#### Sizes
- **Small**: Padding `2px 8px`, Font size `12px`
- **Medium**: Padding `4px 10px`, Font size `14px`

---

### Status Indicator

**Connected** (Green):
- Dot: 12px, green 500 (#22c55e)
- Label: "Connected", green 700
- Animation: Pulsing green dot (opacity 75%)

**Reconnecting** (Amber):
- Dot: 12px, amber 500 (#f59e0b)
- Label: "Reconnecting", amber 700
- No animation

**Disconnected** (Red):
- Dot: 12px, red 500 (#ef4444)
- Label: "Disconnected", red 700
- No animation

---

### Input Components

#### Text Input
- Height: 40px
- Padding: 12px horizontal
- Border: 1px solid neutral 300
- Border radius: 6px
- Font size: 16px
- Focus: 2px sky 500 ring

#### Select Dropdown
- Same as Text Input
- Chevron icon on right

#### Textarea
- Padding: 12px
- Min height: 96px
- Resize: Vertical only
- Same border/focus styles as Input

#### Toggle Switch
- Width: 44px
- Height: 24px
- Thumb: 16px circle
- Active: Sky 600 background
- Inactive: Neutral 300 background
- Transition: 200ms ease

---

### Modal Component

**Overlay**:
- Background: Black with 50% opacity
- Fixed positioning, full screen

**Modal Container**:
- Max width: 448px
- Background: White
- Border radius: 8px
- Padding: 24px
- Box shadow: Large (0 10px 15px -3px rgb(0 0 0 / 0.1))

**Modal Structure**:
1. Header: Title (18px, semibold) + Close button (X icon)
2. Content: Body text (16px, neutral 600)
3. Footer: Action buttons (right-aligned)

---

## Page-Specific Specifications

### Dashboard Page

#### Metric Cards (4-column grid on desktop)
- **Card Structure**:
  - Large padding (24px)
  - Flex layout: value left, icon right

- **Metric Display**:
  - Label: 14px, medium, neutral 600
  - Value: 36px, bold, neutral 900
  - Change indicator: 14px, medium, with icon (trending up/down)
  - Icon background: 48px circle, sky 100, sky 600 icon

#### Activity Feed
- White card with large padding
- Each item:
  - Border bottom (neutral 100)
  - Padding: 12px vertical
  - Flex layout: info left, badge right

#### Quick Stats
- Progress bars: 8px height, rounded
- Label + percentage above
- Colored fill (varies by metric)

---

### Live Feed Page

#### Event Items
- **Structure**: Icon (left) | Content (center) | Badge (right)
- **Icon Box**: 40px, rounded, colored background based on event type
- **Content**: Title (16px, medium) + Description (14px, neutral 600)
- **Timestamp**: 12px, monospace font, neutral 500
- **Hover**: Light neutral background

#### Filter Buttons
- Small ghost buttons
- Active: Primary background
- Horizontal row with 8px gap

---

### Review Queue Page

#### Message Cards
- White card with left border (4px amber 500)
- Large padding (24px)
- Sections:
  1. Customer info header (avatar + name + phone)
  2. Priority badge (top right)
  3. Customer message (neutral 50 background box)
  4. Suggested reply (sky 50 background box)
  5. Action buttons (3-column grid)

#### Empty State
- Centered content
- Large green checkmark icon (64px circle)
- Heading + description
- Padding: 48px vertical

---

### Reports Page

#### Chart Cards
- White cards, large padding
- Title: 18px, semibold, margin bottom 16px
- Charts: Responsive container, 300px height
- Color scheme:
  - Revenue line: Sky 500
  - Leads bars: Green 500
  - Pie chart: Sky 500 (auto) + Purple 500 (human)

#### KPI Cards
- 4-column grid
- Neutral 50 background
- Centered text
- Large value (36px) + small label (14px)

---

### Settings Page

#### Form Layout
- 2-column grid on desktop
- Full-width on mobile
- Each card: White background, large padding
- Form sections clearly labeled (18px, semibold)

#### Form Controls
- Full width within cards
- 16px vertical spacing between fields
- Labels: 14px, medium, neutral 700
- Helper text: 12px, neutral 500

#### Template Variables Info Box
- Blue 50 background
- Blue 200 border
- Padding: 16px
- Code elements: Blue 100 background, padding 2px 8px

---

## Interactive States

### Hover States
- **Cards**: Shadow increase from md to lg
- **Buttons**: Background color darkens by one shade
- **Navigation items**: Light neutral background appears
- **Event items**: Neutral 50 background appears

### Active States
- **Buttons**: Background darkens by two shades
- **Navigation**: Sky blue background + text color change

### Focus States
- **All interactive elements**: 2px ring, sky 500 color, 2px offset
- **Inputs**: Border color changes to sky 500

### Loading States
- **Buttons**: Spinner icon replaces content, disabled state
- **Data sections**: Skeleton screens (neutral 200 animated pulse)

### Disabled States
- **Buttons**: 50% opacity, cursor not-allowed
- **Inputs**: Neutral 100 background, cursor not-allowed

### Error States
- **Inputs**: Red 500 border
- **Error message**: Red 600 text, 14px, below input

---

## Responsive Behavior

### Breakpoints (Tailwind defaults)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Layout Adaptations

#### Desktop (≥1024px)
- Sidebar: Visible, 240px fixed width
- Content: Max width 1400px, centered
- Metric cards: 4 columns
- Form fields: 2 columns

#### Tablet (768px - 1023px)
- Sidebar: Collapsible/overlay
- Metric cards: 2 columns
- Form fields: 1 column

#### Mobile (<768px)
- Sidebar: Drawer overlay
- Top bar: Compressed controls
- Metric cards: 1 column
- All grids: Single column

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Important actions: WCAG AAA (7:1)

### Focus Management
- Visible focus rings on all interactive elements
- Keyboard navigation support
- Tab order follows visual order

### Screen Reader Support
- All images have alt text
- ARIA labels on icon-only buttons
- Live regions for status updates
- Semantic HTML throughout

---

## Implementation Notes

### TailwindCSS Classes

**Common Patterns**:
```css
/* Card */
.card { @apply bg-white rounded-lg shadow-md; }

/* Button Primary */
.btn-primary { @apply bg-sky-600 text-white hover:bg-sky-700 px-4 py-2 rounded-md font-medium; }

/* Status Dot */
.status-dot { @apply w-3 h-3 rounded-full; }

/* Metric Value */
.metric-value { @apply text-3xl font-bold text-neutral-900; }
```

### Animation Classes
```css
/* Pulse for connected status */
@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
.animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
```

---

## Component Dependencies

### Installed Packages
- `react` (18.3.1) - UI framework
- `zustand` (latest) - State management
- `recharts` (latest) - Data visualization
- `lucide-react` (0.344.0) - Icon system
- `tailwindcss` (3.4.1) - Styling

### Custom Components Hierarchy
```
/components
  /ui
    - Button.tsx
    - Card.tsx
    - Badge.tsx
    - StatusIndicator.tsx
    - Toggle.tsx
    - Modal.tsx
    - Input.tsx
    - Select.tsx
    - Textarea.tsx
  /layout
    - Sidebar.tsx
    - TopBar.tsx
    - MainLayout.tsx
  /dashboard
    - MetricCard.tsx
  /live-feed
    - EventItem.tsx
  /review-queue
    - ReviewMessageCard.tsx
```

---

## Design Assets

### Icons
All icons from `lucide-react`:
- Dashboard: LayoutDashboard
- Live Feed: Radio
- Review Queue: ClipboardList
- Reports: BarChart3
- Settings: Settings
- User: User
- Phone: Phone
- Clock: Clock
- Alert: AlertCircle
- Check: CheckCircle
- Message: MessageSquare
- Automation: Zap
- Trending: TrendingUp, TrendingDown
- Actions: Play, Pause, RefreshCw, Download, Calendar

### No Custom Images Required
- Use icon system for all visual elements
- Status indicators use colored dots (CSS)
- Avatars use icon in colored circle background

---

## Performance Considerations

### Bundle Size
- Current production build: ~575KB (170KB gzipped)
- Recharts is the largest dependency
- Consider lazy loading Reports page if needed

### Optimization Opportunities
1. Code splitting by page
2. Lazy load Recharts only on Reports page
3. Optimize re-renders with React.memo on heavy components
4. Debounce search/filter inputs

---

## Future Enhancements

### Planned Features
- Dark mode toggle
- Customizable theme colors
- Export functionality for all pages
- Real-time WebSocket integration
- Advanced filtering and search
- Custom chart date ranges
- Notification system

### Design System Expansion
- Additional color themes
- More chart types
- Data table component
- File upload component
- Advanced form validation
- Toast notification component

---

## Development Guidelines

### Best Practices
1. Always use design system constants
2. Maintain consistent spacing (8px grid)
3. Test all interactive states
4. Ensure keyboard navigation
5. Validate color contrast
6. Use semantic HTML
7. Keep components small and focused
8. Document complex logic

### Code Organization
- One component per file
- Co-locate related components
- Shared utilities in separate folder
- Keep pages thin (delegate to components)
- Use TypeScript for type safety

---

**Design System Version**: 1.0.0
**Last Updated**: 2026-02-17
**Maintained By**: Development Team

# Figma Design Specifications
## WhatsApp AI Clerk - Desktop SaaS Dashboard

---

## Document Overview

This document provides pixel-perfect design specifications equivalent to Figma frames, including exact measurements, positioning, colors, and implementation guidelines for every component and page in the WhatsApp AI Clerk dashboard.

---

## Global Specifications

### Canvas & Artboard
- **Design Width**: 1440px (standard desktop)
- **Minimum Width**: 1024px
- **Optimal Width**: 1280px - 1600px
- **Background**: `#fafafa` (Neutral 50)

### Grid System
- **Base Unit**: 8px
- **Column Grid**: 12 columns with 24px gutters
- **Margins**: 24px left/right
- **Spacing Multipliers**: 0.5x (4px), 1x (8px), 2x (16px), 3x (24px), 4x (32px)

---

## Layout Frame Specifications

### Frame 1: Overall Application Layout

```
┌─────────────────────────────────────────────────────┐
│  [Sidebar: 240px]  │  [Main Area: flex-1]          │
│                    │  ┌──────────────────────────┐  │
│                    │  │ TopBar: 64px height      │  │
│                    │  └──────────────────────────┘  │
│                    │  ┌──────────────────────────┐  │
│  Navigation Items  │  │                          │  │
│                    │  │ Content Area             │  │
│  [Full Height]     │  │ (scrollable)             │  │
│                    │  │                          │  │
│                    │  └──────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

**Measurements**:
- Sidebar Width: 240px (fixed)
- Top Bar Height: 64px (fixed)
- Content Max Width: 1400px
- Content Padding: 24px all sides

---

## Frame 2: Sidebar Component

### Dimensions
- Width: 240px (fixed)
- Height: 100vh
- Background: `#ffffff`
- Right Border: 1px solid `#e5e5e5`

### Logo Section
```
┌──────────────────────────┐
│ [Padding: 24px]          │
│                          │
│ WhatsApp AI Clerk        │  ← 20px, Bold, #171717
│ Business Control Center  │  ← 12px, Regular, #737373
│                          │
│ [Bottom Border: 1px]     │
└──────────────────────────┘
```

**Measurements**:
- Section Height: 88px
- Padding: 24px all sides
- Title Font: 20px, Weight 700
- Subtitle Font: 12px, Weight 400
- Bottom Border: 1px solid `#e5e5e5`

### Navigation Items

**Individual Nav Item**:
```
┌──────────────────────────────────┐
│  [Icon: 20x20]  Dashboard        │  Height: 48px
└──────────────────────────────────┘
```

**Measurements**:
- Item Height: 48px
- Padding: 12px vertical, 16px horizontal
- Gap between icon and text: 12px
- Border Radius: 8px
- Font: 16px, Weight 500

**States**:
- **Default**: Text `#525252`, Background transparent
- **Hover**: Text `#171717`, Background `#f5f5f5`
- **Active**: Text `#0369a1`, Background `#f0f9ff`

**Spacing Between Items**: 4px

### Footer Section
```
┌──────────────────────────┐
│ [Top Border: 1px]        │
│ [Padding: 16px]          │
│                          │
│ Version 1.0.0            │  ← 12px, Medium, #404040
│ © 2026 AI Clerk          │  ← 12px, Regular, #737373
└──────────────────────────┘
```

**Position**: Absolute bottom of sidebar

---

## Frame 3: Top Bar Component

### Dimensions
- Height: 64px (fixed)
- Width: 100% (minus sidebar)
- Background: `#ffffff`
- Bottom Border: 1px solid `#e5e5e5`
- Padding: 0 24px

### Left Section: AI Status

```
┌────────────────────────────────────────┐
│  ● Connected                           │
│  ↑                                     │
│  12px dot with pulse animation         │
└────────────────────────────────────────┘
```

**Status Indicator**:
- Dot Size: 12px diameter
- Pulse Ring: 12px, expands to 24px with fade
- Gap to Text: 8px
- Text Font: 14px, Weight 500
- Text Color: `#404040`

**Colors by State**:
- Connected: `#22c55e` (Green)
- Reconnecting: `#f59e0b` (Amber)
- Disconnected: `#ef4444` (Red)

### Right Section: Controls

```
┌─────────────────────────────────────────────────────┐
│  Human Override  [Toggle]  │  [Pause Button]       │
│                             │  140px width          │
└─────────────────────────────────────────────────────┘
```

**Spacing**: 16px gap between all elements

**Toggle Component**:
- Width: 44px
- Height: 24px
- Thumb: 16px diameter
- Border Radius: 12px (full rounded)
- Label Font: 14px, Weight 500, `#404040`
- Label Gap: 12px

**Toggle States**:
- Off: Background `#d4d4d4`, Thumb left position
- On: Background `#0284c7`, Thumb right position
- Transition: 200ms ease-in-out

**Pause Button**:
- Min Width: 140px
- Height: 40px
- Padding: 8px 16px
- Border Radius: 6px
- Font: 16px, Weight 500
- Icon Size: 16px
- Icon Gap: 8px

**Pause Button States**:
- Paused State: Background `#e5e5e5`, Text `#171717`, Icon: Play
- Active State: Background `#dc2626`, Text `#ffffff`, Icon: Pause

---

## Frame 4: Dashboard Page

### Page Header
```
┌──────────────────────────────────────────────────┐
│ Dashboard                                        │  ← 24px, Bold
│ Overview of your business operations            │  ← 16px, Regular
└──────────────────────────────────────────────────┘
```

**Measurements**:
- Title Font: 24px, Weight 700, `#171717`
- Description Font: 16px, Weight 400, `#525252`
- Margin Bottom: 24px

### Metric Cards Grid

**Grid Layout**: 4 columns, 24px gap

**Single Metric Card**:
```
┌─────────────────────────────────────────────────┐
│  Today Revenue                      ┌────────┐  │
│                                     │   $    │  │ 48x48 icon box
│  $2,847                             └────────┘  │
│                                                 │
│  ↗ +12.5% from yesterday                       │
└─────────────────────────────────────────────────┘
```

**Measurements**:
- Card Padding: 24px
- Card Border Radius: 8px
- Card Background: `#ffffff`
- Card Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Hover Shadow: 0 10px 15px rgba(0,0,0,0.1)

**Content Layout**:
- Label Font: 14px, Weight 500, `#525252`
- Value Font: 36px, Weight 700, `#171717`
- Value Margin Top: 8px
- Change Font: 14px, Weight 500
- Change Margin Top: 8px
- Change Icon Size: 16px
- Icon Box: 48x48px, Border Radius 8px
- Icon Box Background: `#f0f9ff`
- Icon Color: `#0284c7`
- Icon Size: 24px

**Change Indicator Colors**:
- Positive: `#16a34a` (Green)
- Negative: `#dc2626` (Red)
- Neutral: `#737373` (Gray)

### Recent Activity Card

**Card Layout**:
```
┌────────────────────────────────────────────────┐
│ Recent Activity                                │  ← 18px, Semibold
│                                                │
│ ┌────────────────────────────────────────────┐│
│ │ New order received         2 min ago  ✓   ││
│ │ John Smith                                 ││
│ └────────────────────────────────────────────┘│
│ ────────────────────────────────────────────  │  Border between
│ ┌────────────────────────────────────────────┐│
│ │ Payment confirmed          15 min ago ✓   ││
│ │ Sarah Johnson                              ││
│ └────────────────────────────────────────────┘│
└────────────────────────────────────────────────┘
```

**Activity Item**:
- Padding: 12px vertical
- Border Bottom: 1px solid `#f5f5f5`
- Action Font: 14px, Weight 500, `#171717`
- Customer Font: 12px, Weight 400, `#737373`
- Time Font: 12px, Weight 400, `#737373`
- Badge Size: Small (4px padding, 12px font)

### Quick Stats Card

**Progress Bar**:
```
┌────────────────────────────────────────────────┐
│ Automation Rate                          87%   │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░                       │
└────────────────────────────────────────────────┘
```

**Measurements**:
- Label Font: 14px, Weight 400, `#525252`
- Value Font: 14px, Weight 500, `#171717`
- Progress Bar Height: 8px
- Progress Bar Border Radius: 4px (fully rounded)
- Background: `#e5e5e5`
- Fill Color: Varies by metric
- Margin Between Bars: 16px

---

## Frame 5: Live Feed Page

### Filter Buttons Row

```
┌─────────────────────────────────────────────────────┐
│ [All] [Messages] [Automation] [Jobs] [Overrides]   │
└─────────────────────────────────────────────────────┘
```

**Button Measurements**:
- Height: 32px
- Padding: 6px 12px
- Border Radius: 6px
- Font: 14px, Weight 500
- Gap: 8px

**States**:
- Active: Background `#0284c7`, Text `#ffffff`
- Inactive: Background transparent, Text `#525252`
- Hover: Background `#f5f5f5`

### Event Item

```
┌─────────────────────────────────────────────────────┐
│  ┌───┐  New message received                  INFO │
│  │ 📨 │  Customer inquiry about product             │
│  └───┘  availability from +1 555-0123               │
│  40px   14:32:45                                    │
└─────────────────────────────────────────────────────┘
```

**Measurements**:
- Item Padding: 16px
- Border Bottom: 1px solid `#f5f5f5`
- Icon Box: 40x40px, Border Radius 8px
- Gap to Content: 16px

**Icon Box Colors**:
- Job Completed: Background `#dcfce7`, Icon `#16a34a`
- New Message: Background `#dbeafe`, Icon `#2563eb`
- Automation: Background `#fef3c7`, Icon `#d97706`
- Human Override: Background `#f3e8ff`, Icon `#9333ea`
- Error: Background `#fee2e2`, Icon `#dc2626`

**Text Layout**:
- Title Font: 16px, Weight 500, `#171717`
- Description Font: 14px, Weight 400, `#525252`
- Timestamp Font: 12px, Weight 400, `#737373`, Monospace
- Timestamp Margin Top: 8px

---

## Frame 6: Review Queue Page

### Message Card

```
┌─────────────────────────────────────────────────────┐
│ │ ┌───┐ John Smith              [HIGH PRIORITY]    │
│ │ │ 👤 │ +1 555-0123              🔴               │
│ │ └───┘                           2:45 PM           │
│ │                                                   │
│ │ Customer Message                                 │
│ │ ┌───────────────────────────────────────────┐   │
│ │ │ Hi, I need to order 50 units...           │   │
│ │ └───────────────────────────────────────────┘   │
│ │                                                   │
│ │ Suggested Reply                                  │
│ │ ┌───────────────────────────────────────────┐   │
│ │ │ Hello John! Thank you for your inquiry... │   │
│ │ └───────────────────────────────────────────┘   │
│ │                                                   │
│ │ [Reject]      [Edit]        [Approve]            │
│ └─────────────────────────────────────────────────┘│
│ ← 4px amber left border                             │
└─────────────────────────────────────────────────────┘
```

**Card Measurements**:
- Padding: 24px
- Border Radius: 8px
- Left Border: 4px solid `#f59e0b`
- Background: `#ffffff`
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

**Header Section**:
- Avatar: 40x40px circle, Background `#f0f9ff`, Icon `#0284c7`
- Name Font: 16px, Weight 600, `#171717`
- Phone Font: 14px, Weight 400, `#525252`
- Phone Icon: 14px
- Priority Badge: Top right, Small size
- Timestamp: 12px, Weight 400, `#737373`

**Message Boxes**:
- Padding: 12px
- Border Radius: 8px
- Border: 1px solid
- Margin Top: 16px

**Customer Message Box**:
- Background: `#fafafa`
- Border Color: `#e5e5e5`
- Text: 16px, Weight 400, `#171717`

**Suggested Reply Box**:
- Background: `#f0f9ff`
- Border Color: `#bae6fd`
- Text: 16px, Weight 400, `#171717`

**OCR Confidence Warning** (if <90%):
```
┌────────────────────────────────────────┐
│ ⚠ Low OCR confidence (85%)             │
└────────────────────────────────────────┘
```
- Font: 14px, Weight 500, `#d97706`
- Icon: 14px
- Margin Top: 8px

**Action Buttons Grid**:
- Layout: 3 columns, equal width
- Gap: 12px
- Margin Top: 24px
- Button Height: 40px

---

## Frame 7: Reports Page

### Chart Card

```
┌─────────────────────────────────────────────────────┐
│  Revenue Over Time                                   │
│                                                      │
│  [Line Chart - 300px height]                        │
│                                                      │
│  ───────────────────────────────────────────────    │
│  Mon  Tue  Wed  Thu  Fri  Sat  Sun                 │
└─────────────────────────────────────────────────────┘
```

**Card Measurements**:
- Padding: 24px
- Border Radius: 8px
- Background: `#ffffff`
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

**Chart Specifications**:
- Height: 300px
- Responsive Container: 100% width
- Grid Lines: `#e5e5e5`, Dashed
- Axis Labels: 14px, `#737373`
- Line Width: 2px
- Line Color: `#0ea5e9`
- Dot Size: 4px (default), 6px (active)
- Dot Fill: `#0ea5e9`

**Chart Colors**:
- Revenue Line: `#0ea5e9` (Sky 500)
- Leads Bars: `#22c55e` (Green 500)
- Auto Replies Pie: `#0ea5e9` (Sky 500)
- Human Replies Pie: `#a855f7` (Purple 500)
- Response Time Line: `#f59e0b` (Amber 500)

### KPI Grid

```
┌───────────────┬───────────────┬───────────────┬───────────────┐
│               │               │               │               │
│   4.8/5.0     │     92%       │   1.2 min     │   $18.5K      │
│   Customer    │   First       │   Avg         │   Revenue     │
│   Satisfaction│   Contact     │   Response    │   This Week   │
│               │   Resolution  │   Time        │               │
└───────────────┴───────────────┴───────────────┴───────────────┘
```

**Individual KPI Box**:
- Padding: 16px
- Background: `#fafafa`
- Border Radius: 8px
- Text Alignment: Center

**Text**:
- Value Font: 36px, Weight 700, Color varies
- Label Font: 14px, Weight 400, `#525252`
- Value Margin Bottom: 4px

---

## Frame 8: Settings Page

### Form Section Card

```
┌─────────────────────────────────────────────────────┐
│  Business Information                                │
│                                                      │
│  Owner Phone Number                                 │
│  ┌──────────────────────────────────────────────┐  │
│  │ +1 555-0100                                  │  │
│  └──────────────────────────────────────────────┘  │
│  Phone number for escalations and notifications    │
│                                                      │
│  Working Hours Start                                │
│  ┌──────────────────────────────────────────────┐  │
│  │ 09:00                                        │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

**Section Title**:
- Font: 18px, Weight 600, `#171717`
- Margin Bottom: 16px

**Form Field**:
- Label Font: 14px, Weight 500, `#404040`
- Label Margin Bottom: 4px
- Input Height: 40px
- Input Padding: 12px horizontal
- Input Border: 1px solid `#d4d4d4`
- Input Border Radius: 6px
- Input Font: 16px, Weight 400, `#171717`
- Helper Text: 12px, Weight 400, `#737373`
- Helper Text Margin Top: 4px

**Field Spacing**: 16px between fields

**Focus State**:
- Border: 2px solid `#0ea5e9`
- Ring: 2px `#0ea5e9` with 2px offset

### Template Variables Info Box

```
┌─────────────────────────────────────────────────────┐
│  Template Variables                                  │
│                                                      │
│  {name} - Customer name                             │
│  {order_id} - Order ID                              │
│  {product} - Product name                           │
│  {amount} - Order amount                            │
└─────────────────────────────────────────────────────┘
```

**Measurements**:
- Background: `#eff6ff`
- Border: 1px solid `#bfdbfe`
- Border Radius: 8px
- Padding: 16px
- Title Font: 14px, Weight 600, `#1e3a8a`
- Item Font: 14px, Weight 400, `#1e40af`
- Code Background: `#dbeafe`
- Code Padding: 2px 8px
- Code Border Radius: 4px

---

## Component Specifications

### Button Component Frames

#### Primary Button
```
┌──────────────────┐
│  Save Changes    │  Height: 40px
└──────────────────┘  Padding: 8px 16px
```
- Background: `#0284c7`
- Text: `#ffffff`, 16px, Weight 500
- Border Radius: 6px
- Hover: `#0369a1`

#### Secondary Button
- Background: `#e5e5e5`
- Text: `#171717`, 16px, Weight 500
- Hover: `#d4d4d4`

#### Danger Button
- Background: `#dc2626`
- Text: `#ffffff`, 16px, Weight 500
- Hover: `#b91c1c`

#### Ghost Button
- Background: Transparent
- Text: `#404040`, 16px, Weight 500
- Hover: `#f5f5f5`

### Badge Component Frames

```
┌────────┐
│ Success│  Height: 24px (auto width)
└────────┘  Padding: 4px 10px
```

**Variants**:
- Success: Background `#dcfce7`, Text `#166534`
- Warning: Background `#fef3c7`, Text `#92400e`
- Danger: Background `#fee2e2`, Text `#991b1b`
- Info: Background `#dbeafe`, Text `#1e40af`
- Neutral: Background `#f5f5f5`, Text `#262626`

### Modal Component Frame

```
┌─────────────────────────────────────┐
│  Pause Automation?              ✕   │  Header: 24px padding
│  ─────────────────────────────────  │
│                                     │  Body: 24px padding
│  This will stop all automated       │
│  responses. You'll need to manually │
│  handle all incoming messages.      │
│                                     │
│  ─────────────────────────────────  │
│              [Cancel] [Pause]       │  Footer: 24px padding
└─────────────────────────────────────┘
```

**Measurements**:
- Max Width: 448px
- Border Radius: 8px
- Shadow: 0 20px 25px rgba(0,0,0,0.15)
- Overlay: rgba(0,0,0,0.5)

**Header**:
- Title Font: 18px, Weight 600, `#171717`
- Close Button: 20x20px, `#a3a3a3`

**Body**:
- Font: 16px, Weight 400, `#525252`
- Line Height: 1.5

**Footer**:
- Button Gap: 12px
- Alignment: Right

---

## Responsive Breakpoints

### Desktop (1024px+)
- Full sidebar visible
- 4-column metric grid
- 2-column form layout
- Full-width charts

### Tablet (768px - 1023px)
- Collapsible sidebar
- 2-column metric grid
- 1-column form layout
- Responsive charts

### Mobile (<768px)
- Drawer sidebar
- 1-column all grids
- Stacked forms
- Mobile-optimized charts

---

## Animation Specifications

### Transitions
- **Fast**: 150ms ease-in-out - Hover states, focus rings
- **Normal**: 250ms ease-in-out - Modal open/close, page transitions
- **Slow**: 350ms ease-in-out - Sidebar collapse/expand

### Animations

**Pulse (Connected Status)**:
```css
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(2); opacity: 0; }
}
```
- Duration: 1s
- Timing: cubic-bezier(0, 0, 0.2, 1)
- Iteration: infinite

**Hover Scale (Cards)**:
- Transform: scale(1.02)
- Duration: 200ms
- Timing: ease-out

---

## Export Settings

### For Development
- Format: CSS/TailwindCSS classes
- Units: rem (relative)
- Color Format: Hex
- Font Export: System fonts

### For Assets
- Icons: SVG, 24x24px viewBox
- Images: WebP, 2x resolution
- Favicon: PNG, 32x32px

---

## Implementation Checklist

- [ ] All components match pixel-perfect specs
- [ ] All interactive states implemented
- [ ] Hover effects smooth (150-250ms)
- [ ] Focus rings visible on all interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Typography scale consistent
- [ ] Spacing follows 8px grid
- [ ] Responsive breakpoints work correctly
- [ ] All animations perform smoothly
- [ ] Modal overlays block background interaction
- [ ] Sidebar navigation highlights active page
- [ ] Critical controls always visible in top bar
- [ ] Status indicators update in real-time
- [ ] Charts render responsively
- [ ] Forms validate and show errors correctly

---

**Specification Version**: 1.0.0
**Created**: 2026-02-17
**Design Tool**: Implemented in React + TailwindCSS
**Figma Equivalent**: Production-ready code implementation

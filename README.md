# Splash Cursor

A buttery-smooth fluid simulation cursor effect built with WebGL and React. Zero external dependencies — drop it into any React project.

![React](https://img.shields.io/badge/React-Component-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![WebGL](https://img.shields.io/badge/WebGL-Fluid_Sim-orange)

## Install

```bash
npx shadcn@latest add https://starknightt.github.io/Splash-Cursor/r/splash-cursor.json
```

Or copy `SplashCursor.jsx` directly from [`src/components/SplashCursor.jsx`](src/components/SplashCursor.jsx) into your project.

## Usage

```jsx
import { SplashCursor } from "@/components/splash-cursor";

function App() {
  return (
    <div>
      <SplashCursor />
      {/* Your content */}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `SIM_RESOLUTION` | `number` | `128` | Simulation grid resolution |
| `DYE_RESOLUTION` | `number` | `1440` | Dye texture resolution |
| `DENSITY_DISSIPATION` | `number` | `3.5` | How fast colours fade |
| `VELOCITY_DISSIPATION` | `number` | `2` | How fast motion fades |
| `PRESSURE` | `number` | `0.1` | Pressure simulation value |
| `PRESSURE_ITERATIONS` | `number` | `20` | Pressure solver iterations |
| `CURL` | `number` | `3` | Vorticity / swirl intensity |
| `SPLAT_RADIUS` | `number` | `0.2` | Size of colour splats |
| `SPLAT_FORCE` | `number` | `6000` | Force of colour splats |
| `SHADING` | `boolean` | `true` | Enable 3D shading effect |
| `COLOR_UPDATE_SPEED` | `number` | `10` | Colour cycling speed |
| `BACK_COLOR` | `{r,g,b}` | `{r:0.5,g:0,b:0}` | Background colour (RGB 0-1) |
| `TRANSPARENT` | `boolean` | `true` | Transparent canvas background |
| `className` | `string` | `""` | Additional CSS classes |

## Tech Stack

- **WebGL** — Fluid dynamics simulation (Navier-Stokes)
- **React** — Component architecture
- **Tailwind CSS** — Utility styling

## Development

```bash
npm install
npm run dev
```

## License

MIT

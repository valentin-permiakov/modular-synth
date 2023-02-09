# modular-synth

A modular synth built on [TypeScript] and [React]

## What it does

- Has a 29-piano-key keyboard that can be controlled through mouse-click or respective keys
- Can synthesize sound using WebAudio API
- Creates oscillators for each key pressed (can play chords)
- Has oscillator controls and an optional bass-oscillator

## Running the project

1. Install all necessary dependancies

```
npm i
```

### To use dev build:

2. Run

```
npm run dev
```

### To use production build:

2. Make the production build

```
npm run build
```

3. Move to /dist folder

```
cd dist
```

4. If you have [serve] package installed run

```
serve
```

5. Otherwise run

```
npx serve
```

6. Type 'y' in the terminal when promted

7. Open the localhost

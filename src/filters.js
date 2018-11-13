import styled from 'styled-components'

// 41 filters 🙃
export const filters = {
  aden: `
    -webkit-filter: sepia(0.2) brightness(1.15) saturate(1.4);
    filter: sepia(0.2) brightness(1.15) saturate(1.4);
    &:before {
      background: rgba(125, 105, 24, 0.1);
      content: '';
      mix-blend-mode: multiply;
    }
  `,
  amaro: `
    -webkit-filter: sepia(0.35) contrast(1.1) brightness(1.2)
    saturate(1.3);
    filter: sepia(0.35) contrast(1.1) brightness(1.2) saturate(1.3);
    &:before {
      background: rgba(125, 105, 24, 0.2);
      content: '';
      mix-blend-mode: overlay;
    }
  `,
  ashby: `
    -webkit-filter: sepia(0.5) contrast(1.2) saturate(1.8);
    filter: sepia(0.5) contrast(1.2) saturate(1.8);
    &:before {
      background: rgba(125, 105, 24, 0.35);
      content: '';
      mix-blend-mode: lighten;
    }
  `,
  brannan: `
    -webkit-filter: sepia(0.4) contrast(1.25) brightness(1.1)
      saturate(0.9) hue-rotate(-2deg);
    filter: sepia(0.4) contrast(1.25) brightness(1.1) saturate(0.9)
      hue-rotate(-2deg);
  `,
  brooklyn: `
    -webkit-filter: sepia(0.25) contrast(1.25) brightness(1.25)
      hue-rotate(5deg);
    filter: sepia(0.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
    &:before {
      background: rgba(127, 187, 227, 0.2);
      content: '';
      mix-blend-mode: overlay;
    }
  `,
  charmes: `
    -webkit-filter: sepia(0.25) contrast(1.25) brightness(1.25)
      saturate(1.35) hue-rotate(-5deg);
    filter: sepia(0.25) contrast(1.25) brightness(1.25) saturate(1.35)
      hue-rotate(-5deg);
    &::before {
      background: rgba(125, 105, 24, 0.25);
      content: '';
      mix-blend-mode: darken;
    }
  `,
  clarendon: `
    -webkit-filter: sepia(0.15) contrast(1.25) brightness(1.25)
      hue-rotate(5deg);
    filter: sepia(0.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);
    &:before {
      background: rgba(127, 187, 227, 0.4);
      content: '';
      mix-blend-mode: overlay;
    }
  `,
  crema: `
    -webkit-filter: sepia(0.5) contrast(1.25) brightness(1.15)
      saturate(0.9) hue-rotate(-2deg);
    filter: sepia(0.5) contrast(1.25) brightness(1.15) saturate(0.9)
      hue-rotate(-2deg);
    &:before {
      background: rgba(125, 105, 24, 0.2);
      content: '';
      mix-blend-mode: multiply;
    }
  `,
  dogpatch: `
    -webkit-filter: sepia(0.35) saturate(1.1) contrast(1.5);
    filter: sepia(0.35) saturate(1.1) contrast(1.5);
  `,
  earlybird: `
    -webkit-filter: sepia(0.25) contrast(1.25) brightness(1.15)
      saturate(0.9) hue-rotate(-5deg);
    filter: sepia(0.25) contrast(1.25) brightness(1.15) saturate(0.9)
      hue-rotate(-5deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(125, 105, 24, 0.2) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(125, 105, 24, 0.2) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(125, 105, 24, 0.2) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(125, 105, 24, 0.2) 100%
      );
      content: '';
      mix-blend-mode: multiply;
    }
  `,
  gingham: `
    -webkit-filter: contrast(1.1) brightness(1.1);
    filter: contrast(1.1) brightness(1.1);
    &:before {
      background: #e6e6e6;
      content: '';
      mix-blend-mode: soft-light;
    }
  `,
  ginza: `
    -webkit-filter: sepia(0.25) contrast(1.15) brightness(1.2)
      saturate(1.35) hue-rotate(-5deg);
    filter: sepia(0.25) contrast(1.15) brightness(1.2) saturate(1.35)
      hue-rotate(-5deg);
    &:before {
      background: rgba(125, 105, 24, 0.15);
      content: '';
      mix-blend-mode: darken;
    }       
  `,
  hefe: `
    -webkit-filter: sepia(0.4) contrast(1.5) brightness(1.2)
      saturate(1.4) hue-rotate(-10deg);
    filter: sepia(0.4) contrast(1.5) brightness(1.2) saturate(1.4)
      hue-rotate(-10deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(0, 0, 0, 0.25) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(0, 0, 0, 0.25) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(0, 0, 0, 0.25) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(0, 0, 0, 0.25) 100%
      );
      content: '';
      mix-blend-mode: multiply;
    }
  `,
  helena: `
    -webkit-filter: sepia(0.5) contrast(1.05) brightness(1.05)
      saturate(1.35);
    filter: sepia(0.5) contrast(1.05) brightness(1.05) saturate(1.35);
    &:before {
      background: rgba(158, 175, 30, 0.25);
      content: '';
      mix-blend-mode: overlay;
    }
  `,
  hudson: `
    -webkit-filter: sepia(0.25) contrast(1.2) brightness(1.2)
      saturate(1.05) hue-rotate(-15deg);
    filter: sepia(0.25) contrast(1.2) brightness(1.2) saturate(1.05)
      hue-rotate(-15deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        transparent 25%,
        rgba(25, 62, 167, 0.25) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        transparent 25%,
        rgba(25, 62, 167, 0.25) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        transparent 25%,
        rgba(25, 62, 167, 0.25) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        transparent 25%,
        rgba(25, 62, 167, 0.25) 100%
      );
      content: '';
      mix-blend-mode: multiply;
    }
  `,
  inkwell: `
    -webkit-filter: brightness(1.25) contrast(0.85) grayscale(1);
    filter: brightness(1.25) contrast(0.85) grayscale(1);
  `,
  juno: `
    -webkit-filter: sepia(0.35) contrast(1.15) brightness(1.15)
      saturate(1.8);
    filter: sepia(0.35) contrast(1.15) brightness(1.15) saturate(1.8);
    &:before {
      background: rgba(127, 187, 227, 0.2);
      content: '';
      mix-blend-mode: overlay;
    }
  `,
  kelvin: `
    -webkit-filter: sepia(0.15) contrast(1.5) brightness(1.1)
      hue-rotate(-10deg);
    filter: sepia(0.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.25) 0,
        rgba(128, 78, 15, 0.5) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.25) 0,
        rgba(128, 78, 15, 0.5) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.25) 0,
        rgba(128, 78, 15, 0.5) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.25) 0,
        rgba(128, 78, 15, 0.5) 100%
      );
      content: '';
      mix-blend-mode: overlay;
    }  
  `,
  lark: `
    -webkit-filter: sepia(0.25) contrast(1.2) brightness(1.3)
      saturate(1.25);
    filter: sepia(0.25) contrast(1.2) brightness(1.3) saturate(1.25);
  `,
  lofi: `
    -webkit-filter: saturate(1.1) contrast(1.5);
    filter: saturate(1.1) contrast(1.5);
  `,
  ludwig: `
    -webkit-filter: sepia(0.25) contrast(1.05) brightness(1.05)
      saturate(2);
    filter: sepia(0.25) contrast(1.05) brightness(1.05) saturate(2);
    &:before {
      background: rgba(125, 105, 24, 0.1);
      content: '';
      mix-blend-mode: overlay;
    }
  `,
  maven: `
    -webkit-filter: sepia(0.35) contrast(1.05) brightness(1.05)
      saturate(1.75);
    filter: sepia(0.35) contrast(1.05) brightness(1.05) saturate(1.75);
    &:before {
      background: rgba(158, 175, 30, 0.25);
      content: '';
      mix-blend-mode: darken;
    }
  `,
  mayfair: `
    -webkit-filter: contrast(1.1) brightness(1.15) saturate(1.1);
    filter: contrast(1.1) brightness(1.15) saturate(1.1);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(175, 105, 24, 0.4) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(175, 105, 24, 0.4) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(175, 105, 24, 0.4) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(175, 105, 24, 0.4) 100%
      );
      content: '';
      mix-blend-mode: multiply;
    }
  `,
  moon: `
    -webkit-filter: brightness(1.4) contrast(0.95) saturate(0)
      sepia(0.35);
    filter: brightness(1.4) contrast(0.95) saturate(0) sepia(0.35);
  `,
  nashville: `
    -webkit-filter: sepia(0.25) contrast(1.5) brightness(0.9)
      hue-rotate(-15deg);
    filter: sepia(0.25) contrast(1.5) brightness(0.9) hue-rotate(-15deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(128, 78, 15, 0.65) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(128, 78, 15, 0.65) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(128, 78, 15, 0.65) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(128, 78, 15, 0.65) 100%
      );
      content: '';
      mix-blend-mode: screen;
    }
  `,
  nineteenSeventySeven: `
    -webkit-filter: sepia(0.5) hue-rotate(-30deg) saturate(1.4);
    filter: sepia(0.5) hue-rotate(-30deg) saturate(1.4);
    `,
  perpetua: `
    -webkit-filter: contrast(1.1) brightness(1.25) saturate(1.1);
    filter: contrast(1.1) brightness(1.25) saturate(1.1);
    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 91, 154, 0.25),
        rgba(230, 193, 61, 0.25)
      );
      background: -o-linear-gradient(
        top,
        rgba(0, 91, 154, 0.25),
        rgba(230, 193, 61, 0.25)
      );
      background: -moz-linear-gradient(
        top,
        rgba(0, 91, 154, 0.25),
        rgba(230, 193, 61, 0.25)
      );
      background: -webkit-linear-gradient(
        top,
        rgba(0, 91, 154, 0.25),
        rgba(230, 193, 61, 0.25)
      );
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 91, 154, 0.25)),
        to(rgba(230, 193, 61, 0.25))
      );
      content: '';
      mix-blend-mode: multiply;
    }
  `,
  poprocket: `
    -webkit-filter: sepia(0.15) brightness(1.2);
    filter: sepia(0.15) brightness(1.2);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        rgba(206, 39, 70, 0.75) 40%,
        black 80%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        rgba(206, 39, 70, 0.75) 40%,
        black 80%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        rgba(206, 39, 70, 0.75) 40%,
        black 80%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        rgba(206, 39, 70, 0.75) 40%,
        black 80%
      );
      content: '';
      mix-blend-mode: screen;
    }
  `,
  reyes: `
    -webkit-filter: sepia(0.75) contrast(0.75) brightness(1.25)
      saturate(1.4);
    filter: sepia(0.75) contrast(0.75) brightness(1.25) saturate(1.4);
  `,
  rise: `
    -webkit-filter: sepia(0.25) contrast(1.25) brightness(1.2)
      saturate(0.9);
    filter: sepia(0.25) contrast(1.25) brightness(1.2) saturate(0.9);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(230, 193, 61, 0.25) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(230, 193, 61, 0.25) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(230, 193, 61, 0.25) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        transparent 0,
        rgba(230, 193, 61, 0.25) 100%
      );
      content: '';
      mix-blend-mode: lighten;
    }
  `,
  sierra: `
    -webkit-filter: sepia(0.25) contrast(1.5) brightness(0.9)
      hue-rotate(-15deg);
    filter: sepia(0.25) contrast(1.5) brightness(0.9) hue-rotate(-15deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        rgba(128, 78, 15, 0.5) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      content: '';
      mix-blend-mode: screen;
    }
  `,
  skyline: `
    -webkit-filter: sepia(0.15) contrast(1.25) brightness(1.25)
      saturate(1.2);
    filter: sepia(0.15) contrast(1.25) brightness(1.25) saturate(1.2);
  `,
  slumber: `
    -webkit-filter: sepia(0.35) contrast(1.25) saturate(1.25);
    filter: sepia(0.35) contrast(1.25) saturate(1.25);
    &:before {
     background: rgba(125, 105, 24, 0.2);
      content: '';
      mix-blend-mode: darken;
    }
  `,
  stinson: `
    -webkit-filter: sepia(0.35) contrast(1.25) brightness(1.1)
      saturate(1.25);
    filter: sepia(0.35) contrast(1.25) brightness(1.1) saturate(1.25);
    &:before {
      background: rgba(125, 105, 24, 0.45);
      content: '';
      mix-blend-mode: lighten;
    }
  `,
  sutro: `
    -webkit-filter: sepia(0.4) contrast(1.2) brightness(0.9)
      saturate(1.4) hue-rotate(-10deg);
    filter: sepia(0.4) contrast(1.2) brightness(0.9) saturate(1.4)
      hue-rotate(-10deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 90%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 90%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 90%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        transparent 50%,
        rgba(0, 0, 0, 0.5) 90%
      );
      content: '';
      mix-blend-mode: darken;
    }
  `,
  toaster: `
    -webkit-filter: sepia(0.25) contrast(1.5) brightness(0.95)
      hue-rotate(-15deg);
    filter: sepia(0.25) contrast(1.5) brightness(0.95)
      hue-rotate(-15deg);
    &:before {
      background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, 0.25));
      background: -o-radial-gradient(
        circle,
        #804e0f,
        rgba(0, 0, 0, 0.25)
      );
      background: -moz-radial-gradient(
        circle,
        #804e0f,
        rgba(0, 0, 0, 0.25)
      );
      background: -webkit-radial-gradient(
        circle,
        #804e0f,
        rgba(0, 0, 0, 0.25)
      );
      content: '';
      mix-blend-mode: screen;
    }
  `,
  valencia: `
    -webkit-filter: sepia(0.25) contrast(1.1) brightness(1.1);
    filter: sepia(0.25) contrast(1.1) brightness(1.1);
    &:before {
      background: rgba(230, 193, 61, 0.1);
      content: '';
      mix-blend-mode: lighten;
    }
  `,
  vesper: `
    -webkit-filter: sepia(0.35) contrast(1.15) brightness(1.2)
      saturate(1.3);
    filter: sepia(0.35) contrast(1.15) brightness(1.2) saturate(1.3);
    &:before {
      background: rgba(125, 105, 24, 0.25);
      content: '';
      mix-blend-mode: overlay;
    }
  `,
  walden: `
    -webkit-filter: sepia(0.35) contrast(0.8) brightness(1.25)
      saturate(1.4);
    filter: sepia(0.35) contrast(0.8) brightness(1.25) saturate(1.4);
    &:before {
      background: rgba(229, 240, 128, 0.5);
      content: '';
      mix-blend-mode: darken;
    }
  `,
  willow: `
    -webkit-filter: brightness(1.2) contrast(0.85) saturate(0.05)
      sepia(0.2);
    filter: brightness(1.2) contrast(0.85) saturate(0.05) sepia(0.2);
  `,
  xproIi: `
    -webkit-filter: sepia(0.45) contrast(1.25) brightness(1.75)
      saturate(1.3) hue-rotate(-5deg);
    filter: sepia(0.45) contrast(1.25) brightness(1.75) saturate(1.3)
      hue-rotate(-5deg);
    &:before {
      background: radial-gradient(
        circle closest-corner,
        rgba(0, 91, 154, 0.35) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      background: -o-radial-gradient(
        circle closest-corner,
        rgba(0, 91, 154, 0.35) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      background: -moz-radial-gradient(
        circle closest-corner,
        rgba(0, 91, 154, 0.35) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      background: -webkit-radial-gradient(
        circle closest-corner,
        rgba(0, 91, 154, 0.35) 0,
        rgba(0, 0, 0, 0.65) 100%
      );
      content: '';
      mix-blend-mode: multiply;
    }
  `
}

export const Filter1977 = styled.img`
  ${filters.aden}
  ${console.log(filters)}
`

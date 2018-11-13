import styled from 'styled-components'

export const filters = {
  one977: `
    -webkit-filter: sepia(0.5) hue-rotate(-30deg) saturate(1.4);
    filter: sepia(0.5) hue-rotate(-30deg) saturate(1.4);
    `,
  aden: `
    -webkit-filter: sepia(0.2) brightness(1.15) saturate(1.4);
    filter: sepia(0.2) brightness(1.15) saturate(1.4);
    &:before {
      background: rgba(125, 105, 24, 0.1);
      content: '';
      mix-blend-mode: multiply;
    }
  `
}

export const Filter1977 = styled.img`
  ${filters.aden}
  ${console.log(filters)}
`

import { css } from "styled-components";

const flexRowCenter = css`
    display: flex;
    align-items: center;
`
const flexColumn = css`
    display: flex;
    flex-direction: column;
`
const animationSpin = css`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`

export const mixins = {
    flexRowCenter,
    flexColumn,
    animationSpin
}
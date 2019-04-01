export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainYellow: `#d2aa5c`,
  mainYellow2: `#F2AF29`,
  mainGrey: `#474747`,
}

export const newColors = {
  navBack: `#01262F`,
  navFore: `#fff`,
  linkColor: `#61dafb`,
  abotmecard: `#073541`,
  skillback: `#d8d8d8`,
}

export const textSlanted = `font-family:'Caveat', cursive;`

export const transDefault = "transition:all 0.5s ease-in-out"
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}

export const slideDown = `@keyframes slide-down {
  0 % {
    transform: translateY(-50px);
    opacity: 0;
  }
  100 % {
    transform: translateY(0);
    opacity: 1;
  }
}`

export const slideUp = `@keyframes slide-up {
  0 % {
    opacity: 0;
    transform: translateY(50px);
  }
  100 % {
    opacity: 1;
    transform: translateY(0);
  }
}`

export const fadeIn = `@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`

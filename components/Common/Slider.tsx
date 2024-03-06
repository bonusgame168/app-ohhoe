import * as ReactSlider from 'react-slick'

const Slider: React.FC<ReactSlider.Settings> = ({ children, ...props }) => {
  return <ReactSlider.default {...props}>{children}</ReactSlider.default>
}

export default Slider

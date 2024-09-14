import { Dimensions, PixelRatio } from "react-native";

export const widthPercentageToDP = (widthPercent: string) => {
  const screenWidth = Dimensions.get("screen").width;
  
  const elemWidth = parseFloat(widthPercent) / 100;

  const roundedWidth = Math.round(elemWidth * screenWidth);

  const pixelRatio = PixelRatio.roundToNearestPixel(roundedWidth);

  return pixelRatio;
};

export const heightPercentageToDP = (heightPercent: string) => {
    const screenHeight = Dimensions.get("screen").height;

    const elemHeight = parseFloat(heightPercent) / 100;
    
    const roundedHeight = Math.round(elemHeight * screenHeight);
    
    const pixelRatio = PixelRatio.roundToNearestPixel(roundedHeight);
        
    return pixelRatio;
}

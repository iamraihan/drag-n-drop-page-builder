import Image from "next/image";

/**
 * @function
 * @description Optimizes an image for web use. Currently just uses the Next.js
 * Image component to do this. This component exists to make it easier to
 * optimize images and to provide a consistent interface for doing so.
 *
 * @param {string} imgURL - the URL of the image to optimize
 * @param {string} altLabel - the alt text for the image
 * @param {string} borderRadius - the border radius for the image
//  * @param {string} imgHeight - is by default null if not provided it set automatically auto height
 *
 * @returns {ReactElement} a ReactElement containing the optimized image
 */
const OptimizeImage = ({
  imgURL = "",
  altLabel = "",
  borderRadius = "",
  //   imgHeight = null,
  className = "",
}) => {
  return (
    <Image
      className={className}
      src={imgURL}
      alt={altLabel}
      width={0}
      height={0}
      layout="responsive"
      objectFit="cover"
      style={{
        width: "100%",

        objectFit: "cover",
        borderRadius: `${borderRadius}`,
      }}
    />
  );
};

export default OptimizeImage;

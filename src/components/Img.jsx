function Img({ className, src, alt, ...restProps }) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading="lazy"
    />
  );
}

export default Img;

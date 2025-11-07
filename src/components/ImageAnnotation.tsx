import { PropsWithChildren } from "react";

export const ImageAnnotation = ({
  src,
  alt,
  children,
}: PropsWithChildren<{
  src: string;
  alt: string;
}>) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4em",
          width: "100%",
          justifyContent: "flex-start",
          alignContent: "flex-start",
        }}
      >
        <div style={{ width: "fit-content" }}>
          <img
            src={src}
            alt={alt}
            style={{ width: "250px", borderRadius: "6px" }}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

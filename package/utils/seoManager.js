import { useEffect, useRef } from "react";

export const DocumentTitle = ({ title, prevailOnUnmount = false }) => {
  // const defaultTitle = useRef(document.title);

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = title /* defaultTitle.current */;
      }
    },
    []
  );
};

export const DocumentMetaDescription = ({
  metaDescription,
  prevailOnUnmount = false,
}) => {
  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document
          ?.querySelector('meta[name="description"]')
          ?.setAttribute("content", metaDescription);
      }
    },
    []
  );
};

export const DocumentMetaKeywords = ({
  metaKeywords,
  prevailOnUnmount = false,
}) => {
  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document
          ?.querySelector('meta[name="keywords"]')
          ?.setAttribute("content", metaKeywords.join(","));
      }
    },
    []
  );
};

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HIDE_AFTER_MS = 5000;

/**
 * Thank-you message of a form: show() after a submit, and it hides itself after a few
 * seconds, or as soon as the visitor starts filling the form in again (hide()).
 * formKey changes on every submit; put it on the <form> so all its fields start empty again.
 */
export function useSentMessage() {
  const [sent, setSent] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const hide = useCallback(() => {
    clearTimeout(timer.current);
    setSent(false);
  }, []);

  const show = useCallback(() => {
    clearTimeout(timer.current);
    setSent(true);
    setFormKey((key) => key + 1);
    timer.current = setTimeout(() => setSent(false), HIDE_AFTER_MS);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return { sent, show, hide, formKey };
}

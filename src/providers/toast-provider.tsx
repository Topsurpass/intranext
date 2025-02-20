import { Toaster as SonnerToaster } from "sonner";

/**
 * https://sonner.emilkowal.ski/getting-started
 */
export default function ToastProvider() {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      offset={30}
      closeButton
      toastOptions={{
        duration: 3 * 1000, // 3secs
      }}
    />
  );
}

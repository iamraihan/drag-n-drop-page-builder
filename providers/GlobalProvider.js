"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

/**
 * GlobalProvider component that serves as a centralized wrapper for global state management.
 *
 * This component wraps the entire application, providing a single source of truth for global state.
 * Use it as a container for various global providers, such as Redux, Apollo Client, authentication,
 * and toast notifications, ensuring that all child components have access to these providers.
 *
 * @function GlobalProvider
 * @description The top-level provider component for global state management in the application.
 *
 * @example
 * <RootLayout>
 *   <GlobalProvider>
 *     {children}
 *   </GlobalProvider>
 * </RootLayout>
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 *
 * @returns {React.ReactElement} The GlobalProvider component with all necessary providers.
 *
 * @examples
 * @see ReduxProvider for Redux state management.
 * @see ApolloProvider for Apollo Client state management.
 * @see AuthProvider for authentication state management.
 * @see ToastProvider for toast notification state management.
 */

export const GlobalProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

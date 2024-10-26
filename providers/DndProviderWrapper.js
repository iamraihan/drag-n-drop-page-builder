"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

/**
 * A wrapper component for providing `DndProvider` functionality to any drag-and-drop components.
 *
 * Use this wrapper for pages requiring multiple drag-and-drop components, such as:
 *
 * @example
 * <DndProviderWrapper>
 *   <PageBuilder />  // or any other drag-and-drop component, e.g., <TodoList />
 * </DndProviderWrapper>
 *
 * This setup ensures consistent drag-and-drop functionality across components using the `HTML5Backend`.
 *
 * @function DndProviderWrapper
 * @param {React.ReactNode} children - The child components that require drag-and-drop support.
 * @returns {React.ReactElement} A `DndProvider` with the `HTML5Backend`.
 */

export const DndProviderWrapper = ({ children }) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};

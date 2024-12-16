## drag and drop using dnd library

[drag and drop in React using dnd-kit ](https://dev.to/arshadayvid/how-to-implement-drag-and-drop-in-react-using-dnd-kit-204h)

1. npm install @dnd-kit/core
2. write an action to execute when drag event complete -> handle drag end
3. Wrap dnd context around columns
4. Pass the drag end handle event to dnd context prop onDragEnd
5. initiate useDroppable hook in column component
6. above hook returns setNodeRef map that to tasks wrapping div ref prop
7. initiate useDraggable hook in task component
8. deconstruct return values, that are; attributes, listeners, setNodeRef, transform
9. map setNodeRef to TaskCard ref and spread and pass attributes and listerners to TaskCard
10. setup style and map translation criteria to visualise drag effect

# React-Virtualize

So many elements in the DOM can cause two problems:

- Slow initial rendering
- Laggy scrolling

> How does react-virtualized work?

**rendering only what is visible**, this one is the same as List Adapter in Android

1. They calculate which items are visible inside the area where the list is displayed (the viewport).
2. They use a container (div) with relative positioning to absolute position the children elements inside of it by controlling its top, left, width and height style properties.

### Important HOC for this article

- **ArrowKeyStepper**. It decorates another component so it can respond to arrow-key events.
- **AutoSizer**. It automatically adjusts the width and height of another component.
- **CellMeasurer**. It automatically measures a cell’s contents by temporarily rendering it in a way that is not visible to the user.
- **ColumnSizer**. It calculates column-widths for Grid cells.
- **InfiniteLoader**. It manages the fetching of data as a user scrolls a List, Table, or Grid.
- **MultiGrid**. It decorates a Grid component to add fixed columns and/or rows.
- **ScrollSync**.It synchronizes scrolling between two or more components.
- **WindowScroller**. It enables a Table or List component to be scrolled based on the window’s scroll positions.

**Components like AutoSizer use a pattern named function as child components.**

    <AutoSizer>
    ({ width, height }) => {
    }
    </AutoSizer>

**cannot share a CellMeausure cache between two components**

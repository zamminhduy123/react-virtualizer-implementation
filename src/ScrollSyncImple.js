// import logo from "./logo.svg";
import "./App.css";

import { loremIpsum } from "lorem-ipsum";
import {
  AutoSizer,
  List,
  CellMeasurerCache,
  CellMeasurer,
  ScrollSync,
} from "react-virtualized";

const rowCount = 1000;
// const listHeight = 600;
const rowHeight = 50;
// const rowWidth = 800;

function ScrollSyncImple() {
  const list = Array(rowCount)
    .fill()
    .map((val, idx) => {
      return {
        id: idx,
        name: "John Doe",
        image: "http://via.placeholder.com/40",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 8,
        }),
      };
    });
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  });
  function renderRow({ index, key, style, parent }) {
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style} className="row">
          <div className="image">
            <img src={list[index].image} alt="" />
          </div>
          <div className="content">
            <div>{list[index].name}</div>
            <div>{list[index].text}</div>
          </div>
        </div>
      </CellMeasurer>
    );
  }
  function renderColumn({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="content">
          <div>{list[index].id}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <ScrollSync>
        {({ onScroll, scrollTop, scrollLeft }) => (
          <div className="list">
            <AutoSizer disableWidth>
              {({ height }) => {
                return (
                  <div>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    >
                      <List
                        className="leftSide"
                        width={50}
                        height={height}
                        rowHeight={rowHeight}
                        rowRenderer={renderColumn}
                        rowCount={list.length}
                        scrollTop={scrollTop}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 50,
                      }}
                    >
                      <List
                        width={800}
                        height={height}
                        rowHeight={rowHeight}
                        onScroll={onScroll}
                        rowRenderer={renderRow}
                        rowCount={list.length}
                        overscanRowCount={3}
                      />
                    </div>
                  </div>
                );
              }}
            </AutoSizer>
          </div>
        )}
      </ScrollSync>
    </div>
  );
}

export default ScrollSyncImple;

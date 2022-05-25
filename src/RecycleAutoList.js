import logo from "./logo.svg";
import "./App.css";

import { loremIpsum } from "lorem-ipsum";
import {
  AutoSizer,
  List,
  CellMeasurerCache,
  CellMeasurer,
} from "react-virtualized";

const rowCount = 1000;

function RecycleAutoList() {
  const list = Array(rowCount)
    .fill()
    .map((val, idx) => {
      return {
        id: idx,
        name: "John Doe",
        image: "http://via.placeholder.com/40",
        text: loremIpsum({
          count: 2,
          units: "sentences",
          sentenceLowerBound: 10,
          sentenceUpperBound: 100,
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
  return (
    <div className="App">
      <div className="list">
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                width={width}
                height={height}
                rowHeight={cache.rowHeight}
                rowRenderer={renderRow}
                rowCount={list.length}
                deferredMeasurementCache={cache}
              />
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default RecycleAutoList;

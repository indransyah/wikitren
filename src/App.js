import {
  DataSearch,
  RangeInput,
  ReactiveBase,
  ReactiveList,
  SingleList
} from "@appbaseio/reactivesearch";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="wikitrentest"
        credentials="WXT4ynLQD:d882d5ab-5e43-4d13-86cc-8a62525ddc65"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "20%" }}
          >
            <DataSearch
              componentId="search"
              dataField={[
                "pendiri",
                "nomor",
                "yayasan",
                "nama",
                "nama.autosuggest",
                "nama.search",
                "yayasan.autosuggest",
                "yayasan.keyword",
                "yayasan.search",
                "nomor.autosuggest",
                "nomor.search",
                "pendiri.autosuggest",
                "pendiri.keyword",
                "pendiri.search"
              ]}
              fieldWeights={[7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
              fuzziness={0}
              highlightField={["nama", "yayasan", "nomor", "pendiri"]}
              placeholder="Cari berdasarkan nama, yayasan, nomor, atau nama pendiri"
              // placeholder="Cari berdasarkan nama"
              style={{
                marginBottom: 20
              }}
              title="Cari"
            />
            <RangeInput
              componentId="Tahun"
              dataField="tahun"
              title="Tahun"
              range={{
                start: 1920,
                end: 2019
              }}
              rangeLabels={{
                start: "1920",
                end: "2019"
              }}
              showFilter={true}
              stepValue={1}
              showHistogram={true}
              interval={2}
              react={{
                and: ["CategoryFilter", "SearchFilter"]
              }}
              URLParams={false}
            />
            {/* <SingleDropdownList
              componentId="Kabupaten"
              dataField="kabupaten.keyword"
              title="Kabupaten"
              size={1000}
              sortBy="count"
              // defaultSelected="London"
              showCount={true}
              placeholder="Cari Kabupaten"
              selectAllLabel="All Cities"
              react={{
                and: ["CategoryFilter", "SearchFilter"]
              }}
              showFilter={true}
              filterLabel="City"
              URLParams={false}
              loader="Loading ..."
            /> */}
            <SingleList
              componentId="Kabupaten"
              dataField="kabupaten.keyword"
              sortBy="count"
              showRadio={true}
              showCount={true}
              showSearch={true}
              showFilter={true}
              style={{
                marginBottom: 20
              }}
              title="Kabupaten"
            />
          </div>
          <div style={{ marginLeft: "10%" }}>
            <ReactiveList
              componentId="result"
              dataField="nama"
              pagination={true}
              react={{
                and: [
                  "search",
                  "BerbadanHukum",
                  "Kabupaten",
                  "Kecamatan",
                  "Kelurahan",
                  "list-1",
                  "list-2",
                  "Tahun"
                ]
              }}
              renderData={res => {
                console.log({ res });
                return (
                  <div key={res.id}>
                    <h3>{res.nama}</h3>
                    <h5>{res.pendiri}</h5>
                    <hr />
                  </div>
                );
              }}
              size={10}
              style={{
                marginTop: 20
              }}
            />
          </div>
        </div>
      </ReactiveBase>
    );
  }
}

export default App;

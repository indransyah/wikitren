import {
  DataSearch,
  RangeInput,
  ReactiveBase,
  ReactiveList,
  SingleList,
  ToggleButton
} from "@appbaseio/reactivesearch";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="wikitren2"
        credentials="K6lcmd43r:e6ef2d31-983e-4def-9055-9823fc017bf6"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "20%" }}
          >
            <DataSearch
              componentId="search"
              dataField={[
                "kiai",
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
                "kiai.autosuggest",
                "kiai.keyword",
                "kiai.search"
              ]}
              fieldWeights={[7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
              fuzziness={0}
              highlightField={["nama", "yayasan", "nomor", "kiai"]}
              placeholder="Cari berdasarkan nama, yayasan, nomor, atau nama kiai"
              style={{
                marginBottom: 20
              }}
              title="Cari"
            />
            <ToggleButton
              title="Berbadan Hukum"
              componentId="BerbadanHukum"
              dataField="berbadan_hukum"
              multiSelect={false}
              data={[
                { label: "Ya", value: true },
                { label: "Tidak", value: false }
              ]}
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
                start: "1900",
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
            <SingleList
              componentId="Kabupaten"
              dataField="kabupaten.keyword"
              size={3}
              sortBy="count"
              showRadio={true}
              showCount={true}
              showSearch={true}
              showFilter={false}
              style={{
                marginBottom: 20
              }}
              title="Kabupaten"
            />
            <SingleList
              componentId="Kecamatan"
              dataField="kecamatan.keyword"
              size={3}
              sortBy="count"
              showRadio={true}
              showCount={true}
              showSearch={true}
              showFilter={false}
              style={{
                marginBottom: 20
              }}
              title="Kecamatan"
            />
            <SingleList
              componentId="Kelurahan"
              dataField="kelurahan.keyword"
              size={3}
              sortBy="count"
              showRadio={true}
              showCount={true}
              showSearch={true}
              showFilter={false}
              style={{
                marginBottom: 20
              }}
              title="Kelurahan"
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
                    <h5>{res.kiai.join(", ")}</h5>
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

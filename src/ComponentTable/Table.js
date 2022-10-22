import moment from "moment";
import "./Table.scss";
import useFetch from "../customize/fetch";


const Table = () => {
  const apiDataCovid =
    "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z";
  const { data: dataCovid, loading, messageError } = useFetch(apiDataCovid);
  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {loading === true &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{moment(item.Data).format("DD/MM/YYYY")}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}

          {messageError === true && (
            <tr>
              <td className="loading" colSpan={5}>
                Loading...
              </td>
            </tr>
          )}

          {loading === false && (
            <tr>
              <td className="loading" colSpan={5}>
                Somthing wrong ...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from "react";
import { Table } from "react-bootstrap";


export default function TableTavern() {
  return (
    <div className='table-responsive'>
      <Table className='my-table' striped bordered hover>
        <thead>
          <tr>
            <th style={{ color: "white" }}>#</th>
            <th style={{ color: "white" }}>Campaign</th>
            <th style={{ color: "white" }}>Status</th>
            <th style={{ color: "white" }}>Level</th>
            <th style={{ color: "white" }}>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "white" }}>1</td>
            <td style={{ color: "#D6BA73" }}>Mark</td>
            <td style={{ color: "#D6BA73" }}>Otto</td>
            <td style={{ color: "#D6BA73" }}>@mdo</td>
            <td style={{ color: "#D6BA73" }}>Otto</td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Otto</td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>3</td>
            <td style={{ color: "#D6BA73" }}>Jacob</td>
            <td style={{ color: "#D6BA73" }}>Thornton</td>
            <td style={{ color: "#D6BA73" }}>@fat</td>
            <td style={{ color: "#D6BA73" }}>Otto</td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>4</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Otto</td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>4</td>
            <td style={{ color: "#D6BA73" }}>Jacob</td>
            <td style={{ color: "#D6BA73" }}>Thornton</td>
            <td style={{ color: "#D6BA73" }}>@fat</td>
            <td style={{ color: "#D6BA73" }}>Otto</td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

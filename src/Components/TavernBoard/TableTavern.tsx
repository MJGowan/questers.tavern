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
            <td style={{ color: "#D6BA73" }}>The Haunted SchoolHouse</td>
            <td style={{ color: "#D6BA73" }}>Awaiting Group</td>
            <td style={{ color: "#D6BA73" }}>Beginners Campaign</td>
            <td style={{ color: "#D6BA73" }}>
              2721 Transworld Dr Stockton CA 95026
            </td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>2</td>
            <td>The Chamber of Rumors</td>
            <td>New</td>
            <td>Character Level 1-5</td>
            <td>2721 Transworld Dr Stockton CA 95026</td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>3</td>
            <td style={{ color: "#D6BA73" }}>The Order of Sol</td>
            <td style={{ color: "#D6BA73" }}>Full</td>
            <td style={{ color: "#D6BA73" }}>Characters Level 10-15</td>
            <td style={{ color: "#D6BA73" }}>
              2721 Transworld Dr Stockton CA 95026
            </td>
            <td>
              <button>More Info</button>
            </td>
          </tr>
          <tr>
            <td style={{ color: "white" }}>4</td>
            <td>Who Killed the Bard</td>
            <td>Full</td>
            <td>Beginners Campaign</td>
            <td>2721 Transworld Dr Stockton CA 95026</td>
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

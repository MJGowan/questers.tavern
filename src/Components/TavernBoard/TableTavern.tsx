import React from "react";
import { Table } from "react-bootstrap";
import './Tavern.css';
import { Link } from "react-router-dom";



export default function TableTavern() {
const topBanner = require("../../Assets/image 10.png")

const handleButtonClick = () => {
  // window.location.href = ""; // or any other URL
};



  return (
    <div className='table-container'>
      <div className='image-banner'>
        <img src={topBanner} alt='' />
      </div>
      <div className='table-responsive'>
        <br />
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
                <button
                  className='cardbutton'
                  style={{
                    width: "95%",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "10px",
                    height: "50px",
                    padding: "10px 20px",
                    backgroundColor: "#4A423F",
                    color: "white",
                  }}
                  onClick={handleButtonClick}
                >
                  <Link to='/TavernBoardPost'>More Info</Link>{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ color: "white" }}>2</td>
              <td>The Chamber of Rumors</td>
              <td>New</td>
              <td>Character Level 1-5</td>
              <td>2721 Transworld Dr Stockton CA 95026</td>
              <td>
                <button
                  style={{
                    width: "95%",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "10px",
                    height: "50px",
                    padding: "10px 20px",
                    backgroundColor: "#4A423F",
                    color: "white",
                  }}
                  onClick={handleButtonClick}
                >
                  <Link to='/TavernBoardPost'>More Info</Link>
                </button>
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
                <button
                  style={{
                    width: "95%",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "10px",
                    height: "50px",
                    padding: "10px 20px",
                    backgroundColor: "#4A423F",
                    color: "white",
                  }}
                  onClick={handleButtonClick}
                >
                  <Link to='/TavernBoardPost'>More Info</Link>
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ color: "white" }}>4</td>
              <td>Who Killed the Bard</td>
              <td>Full</td>
              <td>Beginners Campaign</td>
              <td>2721 Transworld Dr Stockton CA 95026</td>
              <td>
                <button
                  style={{
                    width: "95%",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "10px",
                    height: "50px",
                    padding: "10px 20px",
                    backgroundColor: "#4A423F",
                    color: "white",
                  }}
                  onClick={handleButtonClick}
                >
                  <Link to='/TavernBoardPost'>More Info</Link>
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ color: "white" }}>4</td>
              <td style={{ color: "#D6BA73" }}>Jacob</td>
              <td style={{ color: "#D6BA73" }}>Thornton</td>
              <td style={{ color: "#D6BA73" }}>@fat</td>
              <td style={{ color: "#D6BA73" }}>Otto</td>
              <td>
                <button
                  style={{
                    width: "95%",
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "10px",
                    height: "50px",
                    padding: "10px 20px",
                    backgroundColor: "#4A423F",
                    color: "white",
                  }}
                  onClick={handleButtonClick}
                >
                  <Link to='/TavernBoardPost'>More Info</Link>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

import React from "react";
import { Table } from "react-bootstrap";
import './Tavern.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCampaigns } from "../../Services/DataService";
import { GetCampaignByUserId } from "../../Services/DataService";




export default function TableTavern() {
  const topBanner = require("../../Assets/image 10.png");

  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [UserId, setUserId] = useState("");
  const [Campaignname, setCampaignname] = useState<string>("");
  const [Campaignlocation, setCampaignlocation] = useState<string>("");
  const [Campaigndifficulty, setCampaigndifficulty] = useState<string>("");

 const [campaignData, setCampaignData] = useState<any>([]);


  useEffect(() => {

    async function GetCampaignsData (){
      const data = await GetCampaigns()
      console.log(data);
      setCampaignData(data)
    }
    GetCampaignsData();

    function handleWindowResize() {
      setIsButtonVisible(window.innerWidth > 600);
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Call the function initially

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleButtonClick = (campaign: any) => {
    // Button click logic
    sessionStorage.setItem("campaignData", JSON.stringify(campaign));
  };



  return (
    <div
      className='table-container'
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
    >
      <div className='image-banner'>
        <img src={topBanner} alt='' />
      </div>
      <div className='table-responsive'>
        <br />
        <Table className='my-table' striped bordered hover>
          <thead>
            <tr>
              <th style={{ color: "white" }} className='col-sm-1'>
                #
              </th>
              <th style={{ color: "white" }} className='col-sm-3'>
                Campaign
              </th>
              <th style={{ color: "white" }} className='col-sm-2'>
                Status
              </th>
              <th style={{ color: "white" }} className='col-sm-2'>
                Level
              </th>
              <th style={{ color: "white" }} className='col-sm-4'>
                Location
              </th>
              <th className='col-sm-12'></th>
            </tr>
          </thead>
          <tbody>
            
            {campaignData.map((campaign: any, idx: number) => {
              return (
                <tr key={idx}>
                  <td style={{ color: "white" }} className='col-sm-1'>
                    1
                  </td>
                  <td style={{ color: "#D6BA73" }} className='col-sm-3'>
                    {campaign.campaignname}
                  </td>
                  <td style={{ color: "#D6BA73" }} className='col-sm-2'>
                    {campaign.campaigndate}
                  </td>
                  <td style={{ color: "#D6BA73" }} className='col-sm-2'>
                    {campaign.campaigndifficulty}
                  </td>
                  <td style={{ color: "#D6BA73" }} className='col-sm-4'>
                    {campaign.campaignlocation}
                  </td>
                  <td className='col-sm-12'>
                    {isButtonVisible && (
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
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() =>  handleButtonClick(campaign)}
                      >
                        <Link
                          to='/TavernBoardPost'
                          style={{
                            display: "inline-block",
                            maxWidth: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            textDecoration: "none",
                            color: "#D6BA73",
                          }}
                        >
                          More Info
                        </Link>
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
            {/* <tr>
              <td style={{ color: "white" }} className='col-sm-1'>
                2
              </td>
              <td className='col-sm-3'>The Chamber of Rumors</td>
              <td className='col-sm-2'>New</td>
              <td className='col-sm-2'>Character Level 1-5</td>
              <td className='col-sm-4'>2721 Transworld Dr Stockton CA 95026</td>
              <td className='col-sm-12'>
                {isButtonVisible && (
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={handleButtonClick}
                  >
                    <Link
                      to='/TavernBoardPost'
                      style={{
                        display: "inline-block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        color: "#D6BA73",
                      }}
                    >
                      More Info
                    </Link>
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ color: "white" }}>4</td>
              <td className='col-sm-3' style={{ color: "#D6BA73" }}>
                Who Killed the Bard
              </td>
              <td className='col-sm-3' style={{ color: "#D6BA73" }}>
                Full
              </td>
              <td style={{ color: "#D6BA73" }}>Beginners Campaign</td>
              <td style={{ color: "#D6BA73" }}>
                2721 Transworld Dr Stockton CA 95026
              </td>
              <td>
                {isButtonVisible && (
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={handleButtonClick}
                  >
                    <Link
                      to='/TavernBoardPost'
                      style={{
                        display: "inline-block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        color: "#D6BA73",
                      }}
                    >
                      More Info
                    </Link>
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td style={{ color: "white" }}>4</td>
              <td style={{ color: "#D6BA73" }}>Jacob</td>
              <td style={{ color: "#D6BA73" }}>Thornton</td>
              <td style={{ color: "#D6BA73" }}>@fat</td>
              <td style={{ color: "#D6BA73" }}>Otto</td>
              <td>
                {isButtonVisible && (
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={handleButtonClick}
                  >
                    <Link
                      to='/TavernBoardPost'
                      style={{
                        display: "inline-block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        color: "#D6BA73",
                      }}
                    >
                      More Info
                    </Link>
                  </button>
                )}
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

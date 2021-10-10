import { useState, useEffect } from 'react'
import { Bar, Doughnut, Line } from "react-chartjs2"
import axios from 'axios'

const Contents = () => {


    const [confirmedData, setconfirmedData] = useState({
        lables: ["1월","2월","3월"],
        datasets: [ 
            {
                label:"국내 누적 확진자"
              
            }
        ]
    })

    useEffect(() =>{
         
        const fetchEvents = async () => {
            const res= await axios.get("https://api.covid19api.com/total/dayone/country/kr")
            console.log(res)
                
        }
        fetchEvents()

    })

    return (
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
              <div>
                    <Bar data={confirmedData} options={
                        {title: {display:true, text:"누적 확진자 추이" , fontsize:16 }},
                        {legend: {diplay:true, position:"bottom"}} 
                    }
                    >-</Bar>
              </div>
            </div>
        </section>
    )
}

export default Contents

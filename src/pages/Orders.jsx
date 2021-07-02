import {Card} from "../components/Card";
import React from "react"
import axios from "axios";

export const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect( () => {
    (async () => {
     try  {
       const { data } = await axios.get('https://60d381a961160900173c93d6.mockapi.io/orders')
       // console.log(data.map(obj => obj.items).flat())
       setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
       setIsLoading(false)
     } catch (error) {
       alert('Ошибка при запросе заказов')
       console.error(error)
     }
    })()

  },[])

  return (
    <div className='content p-40'>
      <div className='d-flex align-center mb-40 justify-between'>
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {
          (isLoading
            ? [...Array(12)]
            : orders).map((item) => (
            <Card
              key={item && item.id}
              loading={isLoading}
              {...item}
            />
          ))
        }
      </div>
    </div>

  )
}
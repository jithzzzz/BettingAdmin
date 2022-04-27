
import './WidgetLarge.css'

function WidgetLarge() {
    const Button =({type}) =>{
        return <button className={'widgetButton ' + type} >{type}</button>

    }
  return (
    <div className='widgetLg'>
        <div className='widgetLgHedder'>
        <h3 className='widgetLgTitle'>
          Latest Transations</h3>
          <button className='widgetLgSeeMore'>SeeMore</button>
          </div>
          <table className='widgetLgTable'>
              <tr className='widgetLgTr'>
                  <th className='widgetLgTh'>Customer</th>
                  <th className='widgetLgTh'>Date</th>
                  <th className='widgetLgTh'>Amount</th>
                  <th className='widgetLgTh'>Status</th>
              
              </tr>
              <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                      <img src='user1.png' alt='' className='widgetLgUserImg'></img>
                      <span className='widgetLgName'>Susan carol</span>


                  </td>
                  <td className='widgetLgDate'>2 Jun 2021</td>
                  <td className='widgetLgAmount'>100</td>
                  <td className='widgetLgStatus'><Button type="Success"/></td>
              </tr>
              <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                      <img src='user3.png' alt='' className='widgetLgUserImg'></img>
                      <span className='widgetLgName'>Susan carol</span>


                  </td>
                  <td className='widgetLgDate'>2 Jun 2021</td>
                  <td className='widgetLgAmount'>100</td>
                  <td className='widgetLgStatus'><Button type="Success"/></td>
              </tr>
              <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                      <img src='user2.png' alt='' className='widgetLgUserImg'></img>
                      <span className='widgetLgName'>Susan carol</span>


                  </td>
                  <td className='widgetLgDate'>2 Jun 2021</td>
                  <td className='widgetLgAmount'>100</td>
                  <td className='widgetLgStatus'><Button type="Declined"/></td>
              </tr>
              <tr className='widgetLgTr'>
                  <td className='widgetLgUser'>
                      <img src='user4.png' alt='' className='widgetLgUserImg'></img>
                      <span className='widgetLgName'>Susan carol</span>


                  </td>
                  <td className='widgetLgDate'>2 Jun 2021</td>
                  <td className='widgetLgAmount'>100</td>
                  <td className='widgetLgStatus'><Button type="Pending"/></td>
              </tr>
          </table>
    </div>
  )
}

export default WidgetLarge
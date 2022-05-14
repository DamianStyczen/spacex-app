import { Launch } from '../types/FlightListTypes'
import LaunchRow from './FlightListRow'

import styles from '../styles/FlightList.module.css';


const FLIGHT_LIST_TABLE_HEADERS = ['id', 'date', 'site name', 'mission', 'rocket', 'ship', 'port', 'image'];

type Props = {
    launches: Launch[];
}

export default function FlightList({ launches }: Props) {
    return (<table className={styles.table}>
        <thead>
          <tr>
            { FLIGHT_LIST_TABLE_HEADERS.map(header => <th>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {launches?.map(launch => (
            <LaunchRow launch={launch} />
          ))}
        </tbody>
      </table>);
}

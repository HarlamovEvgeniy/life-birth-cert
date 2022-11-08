import {FC} from 'react';
import Tooltip from '@mui/material/Tooltip';

type StatusProps = {
    state: number
}

export const Status: FC<StatusProps> = ({ state }) => {
    return (
        <div className="status">
            <Tooltip title="Doctor">
                <span className={state > 0 ? "status__item signed" : "status__item"}></span>
            </Tooltip>
            <Tooltip title="Midwife">
                <span className={state > 1 ? "status__item signed" : "status__item"}></span>
            </Tooltip>
            <Tooltip title="Administrator">
                <span className={state > 2 ? "status__item signed" : "status__item"}></span>
            </Tooltip>
        </div>
    )
}

export default Status;
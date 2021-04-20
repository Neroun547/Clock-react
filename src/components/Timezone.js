import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select'
import spacetime from 'spacetime';
import { Clock } from './Clock';
export function Timezone() {
    const [selectedTimezone, setSelectedTimezone] = useState({})
    const time = spacetime.now(selectedTimezone.value);
    const timeProps = parseInt(time.format("{hour} o'clock"));
    const style = {
        marginWrapper: '30px'
    }
    return (
        <div className='App'>
            <Clock time={timeProps} />
            <div className='select-wrapper' style={{ margin: style.marginWrapper }}>
                <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                />
            </div>
        </div>
    )
}
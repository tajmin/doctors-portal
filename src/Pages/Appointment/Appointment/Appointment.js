import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHero from '../AppointmentHero/AppoinmentHero';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHero date={date} setDate={setDate}></AppoinmentHero>
            <AvailableAppoinment date={date}></AvailableAppoinment>
        </div>
    );
};

export default Appointment;
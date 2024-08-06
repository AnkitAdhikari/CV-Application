import { mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js/mdi";
import Icon from "@mdi/react";
import "../styles/introduction.css";
export default function Introuction({ fullName, email, phone, address }) {
  return (
    <div className='intro-container'>
      <div className='left'>
        <h1 className='username'>{fullName}</h1>
        <div className='address'>
          {address && <Icon path={mdiMapMarker} size={1} />}
          {address}
        </div>
      </div>
      <div className='right'>
        <div className='email'>
          {email && <Icon path={mdiEmail} size={1} />}
          {email}
        </div>
        <div className='phone'>
          {phone && <Icon path={mdiPhone} size={1} />}
          {phone}
        </div>
      </div>
    </div>
  );
}

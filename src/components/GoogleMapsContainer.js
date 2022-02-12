import React from 'react';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';
import { useStaticQuery, graphql } from 'gatsby';
import MapStyles from './MapStyles';

const containerStyle = {
  width: '100%',
  height: '60vh',
  borderRadius: '5px',
  boxShadow:
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
};

const center = {
  lat: 39.6398212,
  lng: -104.7955574,
};

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function GoogleMapsContainer() {
  const [infoWindowOpen, setInfoWindowOpen] = React.useState(true);

  const data = useStaticQuery(graphql`
    {
      wpPage(title: { eq: "Contact" }) {
        contact {
          googleMaps {
            position {
              latitude
              longitude
            }
            title
            subtitle
            email
            phone
            directions
          }
        }
      }
    }
  `);

  const {
    position: { latitude, longitude },
    title,
    subtitle,
    email,
    phone,
    directions,
  } = data.wpPage.contact.googleMaps;

  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_JS_GOOGLE_MAPS_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Marker
            onClick={() => setInfoWindowOpen(!infoWindowOpen)}
            position={{
              lat: latitude,
              lng: longitude,
            }}
          />
          {infoWindowOpen && (
            <InfoWindow
              position={{
                lat: latitude,
                lng: longitude,
              }}
            >
              <div className="w-auto">
                <h2 className="pb-4 text-3xl font-bold text-center">{title}</h2>
                <p className="text-lg font-semibold">{subtitle}</p>
                <ul className="pt-4">
                  <li className="text-lg pb-2 cursor-pointer ease-out duration-300 hover:text-bouquetShades-500">
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                  <li className="text-lg pb-2 cursor-pointer ease-out duration-300 hover:text-bouquetShades-500">
                    <a href={`tel:${phone}`}>{phone}</a>
                  </li>
                  <li className="text-lg cursor-pointer ease-out duration-300 hover:text-bouquetShades-500">
                    <a target="_blank" rel="noreferrer" href={directions}>
                      Directions
                    </a>
                  </li>
                </ul>
              </div>
            </InfoWindow>
          )}
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMapsContainer);

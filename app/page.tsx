import Navbar from './nav/Navbar';
import MapCollapse from '@/pages/MapCollapse';
import Grid from './grid/Grid';
import Test from './Test';

export default function Home() {
  return (
    <>
      <Navbar />
      <MapCollapse>
        <Grid />
      </MapCollapse>
    </>
    
  )
}

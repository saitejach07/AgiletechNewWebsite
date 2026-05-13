import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './app/components/Layout';
import { Home } from './app/pages/Home';
import { ContactPage } from './app/pages/ContactPage';
import { ITStaffAugmentation } from './app/pages/ITStaffAugmentation';
import { MobileDevelopment } from './app/pages/MobileDevelopment';
import { WebDevelopment } from './app/pages/WebDevelopment';
import { CloudSolutions } from './app/pages/CloudSolutions';
import { CustomBuildinSolutions } from './app/pages/CustomBuildinSolutions';
import { AboutUs } from './app/pages/AboutUs';
import { Careers } from './app/pages/Careers';
import { InternalLogin } from './app/pages/InternalLogin';
import Providerenrollment from './app/pages/InternalProjects/Providerenrollment';
import { ProtectedRoute } from './app/components/ProtectedRoute';
import Register from './app/pages/InternalProjects/Register';
import Login from './app/pages/InternalProjects/Login';
import UnderConstruction from './app/pages/InternalProjects/Underconstruction';
import NewDashboard from './app/pages/InternalProjects/NewDashboard';
import Profile from './app/pages/InternalProjects/Profile';
import { ProtectedRouteBackend } from './app/components/ProtectedRouteBackend';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="services/it-staff-augmentation" element={<ITStaffAugmentation />} />
          <Route path="services/mobile-development" element={<MobileDevelopment />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="services/in-house-projects" element={<CustomBuildinSolutions />}/>
          <Route path="services/in-house-projects/login" element={<InternalLogin />} />
          <Route path="services/in-house-projects/dashboard" element={<ProtectedRoute><NewDashboard/></ProtectedRoute>}/>
          <Route path="services/in-house-projects/providerenrollment" element={ <ProtectedRoute><Providerenrollment /></ProtectedRoute>} />
          <Route path="services/in-house-projects/providerenrollment/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
          <Route path="services/in-house-projects/providerenrollment/login" element={<ProtectedRoute><Login /></ProtectedRoute>} /> 
          <Route path="services/in-house-projects/providerenrollment/profile" element={<ProtectedRouteBackend><Profile/></ProtectedRouteBackend>}/>
          <Route path="services/in-house-projects/providerenrollment/underconstrunction" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
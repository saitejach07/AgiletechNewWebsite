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
import Dashboard from './app/pages/InternalProjects/Dashboard';
import { ProtectedRoute } from './app/components/ProtectedRoute';
import Register from './app/pages/InternalProjects/Register';
//import Login from './app/pages/InternalProjects/Login';
import UnderConstruction from './app/pages/InternalProjects/Underconstruction';

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
          <Route path="services/in-house-projects/dashboard" element={  <ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="services/in-house-projects/dashboard/register" element={<Register />} />
          {/* <Route path="services/in-house-projects/dashboard/login" element={<Login />} /> */}
          <Route path="services/in-house-projects/dashboard/underconstrunction" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
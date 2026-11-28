import GyrocraftAccessRequest from "./GyrocraftAccessRequest";

// Gyrocraft is access-by-request. Rather than a client-side password gate (which
// shipped the code and content to the browser and could be bypassed), every
// Gyrocraft route shows the access-request page. The gated material is not served
// to the public; access is granted manually after a request.
const ProtectedGyrocraftRoute = (_: { children?: React.ReactNode }) => (
  <GyrocraftAccessRequest />
);

export default ProtectedGyrocraftRoute;

import '@scalar/api-reference-react/style.css';
import "../styles/scalar-custom.css";
import { ApiReferenceReact } from '@scalar/api-reference-react';

export default function ScalarDoc() {
  return (
    <div >
      <ApiReferenceReact configuration={{ url: '/openapi.yaml', layout: 'modern', hideModels: true, hideClientButton: true, showDeveloperTools: "never", theme: "bluePlanet", }} />
    </div>
  );
}
